import React from 'react'

import { useReducer } from 'react'
import {
    Button, Flex,
    FormControl,
    Input , useToast ,Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverTrigger, useDisclosure, Badge
} from '@chakra-ui/react'
// for reducer 
import { useAppDispatch } from '../../redux'
import { logIn } from '../../redux/reducers/Login/index';
// import google png from assets folder 
import Google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import Email from '../../assets/Email.png'
// this is modal css file 

import { create_customer, signInGoogle } from '../../redux/reducers/Login'

// import { signInGoogle } from '../../redux/reducers/Login'
// import { useNavigate } from 'react-router-dom'
// import { text } from 'node:stream/consumers'
// for form data handling 
import { formReducer } from '../../utils/formReducer'
import { formFields } from './data'
interface ModalSignUpProps {
    onOpen: () => void,
    onClose: () => void,
    isOpen: boolean
}
// Interface for InitialState for reducer 
interface InitialState {
    firstName: string,
    lastName: string,
    email: string,
    contactNo: string,
    password: string,
    confirmPassword: string,
}
// for UseReducer for form 
const initialState: InitialState = {
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    password: '',
    confirmPassword: ''
}


const PopSignUp: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast();
    const [formState, dispatchChangeinFormState] = useReducer(formReducer, initialState);
    const dispatch = useAppDispatch();
    // for e change value 
    const _changeInInput = (type: string, value: any) => {
        console.log('In _change', { type, value })
        dispatchChangeinFormState({ type, value })
    }
    // for handling form submit 
    const handleSubmit = async () => {
        //logic for id already exists
        //logic for phone no already exists
        //logic for password match
        if (formState.password !== formState.confirmPassword) {
            toast({
                position: 'top',
                title: 'Account not created.',
                description: "Password doesn't match",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            return console.log("Password does not match")
        }
        let fullName:string = formState.firstName;
        // console.log("fullname",fullName);
        fullName = fullName.concat(' ',formState.lastName);
        // console.log({a:fullName.concat(formState.lastName)});
        console.log("fullname",fullName);
        let contactNo = formState.contactNo;
        if(contactNo.length != 10){
            console.log("error in modal")
            dispatch(logIn(false));
            toast({
                position: 'top',
                title: 'Account not created.',
                description: "Please Provide correct ContactNo",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        else if(contactNo[0] === '9' || contactNo[0] === '8' || contactNo[0] === '7' || contactNo[0] === '6'){

            //logic to save user to the database
        const data = await dispatch(create_customer({
            'store' : '6232a2a4cd65fb954ebd83a5',
            'name' : fullName.toLowerCase(),
            'contact' : formState.contactNo,
            'password' : formState.password,
        }))
        if(data.payload === 'SERVER_ERROR' || data.payload === 'CLIENT_ERROR'){
            console.log("error in modal")
            dispatch(logIn(false));
            toast({
                position: 'top',
                title: 'Account not created.',
                description: "Please Provide correct Credentails",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }else{
              console.log("data in modal", data.payload);
              localStorage.setItem( "user" , JSON.stringify(data.payload))
              console.log("data in local storage" , JSON.parse(localStorage.getItem("user") || ""))
            // for toast 
            toast({
                position: 'top',
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            dispatch(logIn(true));
            onClose();
        }

            
        }
        else{
            console.log("error in modal")
            dispatch(logIn(false));
            toast({
                position: 'top',
                title: 'Account not created.',
                description: "Please Provide correct ContactNo",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        
    }
    }
    // console.log({ formState })
    const initialRef = React.useRef(null)

    // const dispatch = useAppDispatch();
    // let navigate = useNavigate();
    // const { getUser, dataGoogle } = useAppSelector((state) => state.login);
    const googleLogin = () => {
        console.log("Hello")
        // dispatch(signInGoogle({}))
        // window.open('http://localhost:3000/auth/google/new')
        window.open('http://localhost:3000/auth/google/new', '',
                        `toolbar=no, location=no, directories=no, status=no, menubar=no, 
scrollbars=no, resizable=no, copyhistory=no`
                    );
    }

    return (
        <>
            <Flex>
                <Popover
                    placement='bottom'
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                    arrowSize={30}
                >
                    <PopoverTrigger>
                        <Flex mr={"1.5rem"} cursor={"pointer"} fontWeight="bold" fontSize={"1.1rem"} alignItems={"center"} color={"white"} bgColor={"#47B5FF"}>Sign Up</Flex>
                    </PopoverTrigger>
                    <PopoverContent style={{marginTop:'15px', width: '40vw'}} >
                        <Flex fontSize={"1.5rem"} pt={4} fontWeight='bold' border='0' justifyContent={"center"} mb={"1rem"}>
                        Create your account
                        </Flex>
                        <PopoverArrow />
                        <PopoverCloseButton />

                        <Flex width={"100%"} direction="column" alignItems={"center"} justifyContent="center" >
                                {/* right flex  */}
                                <Flex direction={"column"} alignItems="center" justifyContent={"center"} width={"100%"}>
                                    <Flex justifyContent={"space-around"} width={"62%"} mb={"0.5rem"}>
                                    <Flex className="googleButton facebook" justifyContent={'center'}>
                                        <img src={facebook} alt="" className='icon' />
                                        Facebook
                                    </Flex>
                                    <Flex className="googleButton google" onClick={googleLogin} justifyContent="center">
                                        <img src={Google} alt="" className='icon' />
                                        Google
                                    </Flex>
                                    </Flex>
                                </Flex>
                                {/* Left flex  */}
                                <Flex direction={"column"} width="100%">
                                    <form id='customer_form' onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>

                                        {/* email phone field  */}
                                        <Flex direction="column" width="100%" alignItems={"center"}>
                                            {formFields.map((formField, idx) => {
                                                if (idx === 2) {
                                                    return (
                                                        <Flex width={"56%"} key={formField.placeholder}>
                                                            <Flex alignItems="center" width="100%">
                                                                <Input className='phone'  fontSize={"0.7rem"} mb="0.8rem" type={formField.type} required={formField.required} placeholder={formField.placeholder} name={formField.name} onChange={(e) => { console.log('in field ', { type: formField.name, value: e.target.value }); _changeInInput(formField.name, e.target.value) }} />
                                                                <Flex ml="0.5rem" mb="0.8rem" alignItems={"center"} justifyContent="center" height={"100%"}>{formState.contactNo.includes('@') || formState.contactNo.length ===0 ? "" :<Badge fontSize={"1.1rem"} borderRadius={"1rem"} colorScheme='green'>{formState.contactNo.length}</Badge>}</Flex>
                                                            </Flex>
                                                        </Flex>
                                                    )
                                                }
                                            })}
                                        </Flex>

                                        {/* name field  */}
                                        <Flex justifyContent={"center"} width="100%" mb={"0.8rem"}>
                                            <Flex justifyContent={"space-between"} width={"61%"}>
                                                {formFields.map((formField, idx) => {
                                                    if (idx < 2) {
                                                        return (
                                                            <Flex width={"48%"} key={formField.placeholder}>
                                                                <FormControl>
                                                                    <Input width={"100%"} fontSize={"0.8rem"} required={formField.required} placeholder={formField.placeholder} type={formField.type} name={formField.name} onChange={(e) => { console.log('in field ', { type: formField.name, value: e.target.value }); _changeInInput(formField.name, e.target.value) }} />
                                                                </FormControl>
                                                            </Flex>
                                                        )
                                                    }
                                                })}
                                            </Flex>
                                        </Flex>

                                        {/* password and confirmPassword field  */}
                                        <Flex justifyContent={"center"} width="100%">
                                            <Flex justifyContent={"space-between"} width={"65%"}>
                                                {formFields.map((formField, idx) => {
                                                    if (idx > 2) {
                                                        return (
                                                            <Flex width={"48%"} key={formField.placeholder}>
                                                                <FormControl>
                                                                    <Input width={"100%"} fontSize={"0.8rem"} required={formField.required} placeholder={formField.placeholder} name={formField.name} type={formField.type} onChange={(e) => { console.log('in field ', { type: formField.name, value: e.target.value }); _changeInInput(formField.name, e.target.value) }} />
                                                                </FormControl>
                                                            </Flex>
                                                        )
                                                    }
                                                })}
                                            </Flex>
                                        </Flex>

                                    </form>
                                </Flex>
                            </Flex>

                        <PopoverFooter
                            border='0'
                            display='flex'
                            alignItems='center'
                            justifyContent='space-between'
                            pb={4}
                        >

                            <Flex justifyContent={"flex-end"} width={"100%"} mt={"0.5rem"}>
                                <Button type='submit' size={'sm'} form='customer_form' colorScheme='blue' mr={2}>
                                    Submit
                                </Button>
                                <Button size={'sm'} ml={2} onClick={onClose}>Cancel</Button>
                            </Flex>
                        </PopoverFooter>
                    </PopoverContent>
                </Popover>
            </Flex>
        </>
    )
}

export default PopSignUp