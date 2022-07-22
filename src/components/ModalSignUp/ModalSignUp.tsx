import React, { useEffect, useReducer } from 'react'
import {
    Button, Flex,
    FormControl,
    Input, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalFooter, ModalHeader,
    ModalOverlay, useToast
} from '@chakra-ui/react'
// for reducer 
import { useAppDispatch, useAppSelector } from '../../redux'
import { logIn } from '../../redux/reducers/Login/index';
// import google png from assets folder 
import Google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import Email from '../../assets/Email.png'
// this is modal css file 
import './ModalSignUp.css'
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
const ModalSignUp: React.FC<ModalSignUpProps> = ({ isOpen, onClose, onOpen }) => {
    // for toast 
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
        if (formState.password != formState.confirmPassword) {
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
        //logic to save user to the database
        const data = await dispatch(create_customer({
            'store' : '6232a2a4cd65fb954ebd83a5',
            'name' : fullName,
            'contact' : formState.contactNo,
            'password' : formState.password,
        }))
        if(data.payload !== 'SERVER_ERROR'){
            console.log("data in modal", data.payload);
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
        }else{
            console.log("error in modal")
            toast({
                position: 'top',
                title: 'Account not created.',
                description: "Please Provide correct Credentails",
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
    // console.log({getUser, dataGoogle})
    // useEffect(() => {

    // }, [])
    return (
        <>
            <Modal size={"2xl"}
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent pl="2rem" pr={"2rem"}>
                    <Flex direction={"column"}>
                        <ModalHeader ><Flex justifyContent="center">Create your account</Flex></ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={0}>
                            <Flex width={"100%"} direction="column" alignItems={"center"} justifyContent="center" >
                                {/* Left flex  */}
                                <Flex direction={"column"} width="90%">
                                    <form id='customer_form' onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>

                                        <Flex justifyContent={"center"} width="100%">
                                            <Flex justifyContent={"space-between"} width={"50%"}>
                                                {formFields.map((formField, idx) => {
                                                    if (idx < 2) {
                                                        return (
                                                            <Flex width={"48%"} key={formField.placeholder}>
                                                                <FormControl>
                                                                    {/* <FormLabel mt="0.8rem" mb="0.8rem">{formField.label}</FormLabel> */}
                                                                    <Input width={"100%"} fontSize={"0.8rem"} required={formField.required} placeholder={formField.placeholder} type={formField.type} name={formField.name} onChange={(e) => { console.log('in field ', { type: formField.name, value: e.target.value }); _changeInInput(formField.name, e.target.value) }} />
                                                                </FormControl>
                                                            </Flex>
                                                        )
                                                    }
                                                })}
                                            </Flex>
                                        </Flex>
                                        <Flex direction="column" width="100%" alignItems={"center"}>
                                            {formFields.map((formField, idx) => {
                                                if (idx === 2) {
                                                    return (
                                                        <Flex width={"60%"} key={formField.placeholder}>
                                                            <Flex alignItems="center" direction="column" width="100%">
                                                                {/* <FormLabel mt="0.8rem" mb={idx === formFields.length-1 ? "0rem" :"0.8rem"}>{formField.label}</FormLabel> */}
                                                                <Input className='phone'  fontSize={"0.7rem"} mt="0.8rem" mb="0.8rem" type={formField.type} required={formField.required} placeholder={formField.placeholder} name={formField.name} onChange={(e) => { console.log('in field ', { type: formField.name, value: e.target.value }); _changeInInput(formField.name, e.target.value) }} />
                                                            </Flex>
                                                        </Flex>
                                                    )
                                                }
                                            })}
                                        </Flex>
                                        <Flex justifyContent={"center"} width="100%">
                                            <Flex justifyContent={"space-between"} width={"70%"}>
                                                {formFields.map((formField, idx) => {
                                                    if (idx > 2) {
                                                        return (
                                                            <Flex width={"48%"} key={formField.placeholder}>
                                                                <FormControl>
                                                                    {/* <FormLabel mt="0.8rem" mb="0.8rem">{formField.label}</FormLabel> */}
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
                                {/* middle line  */}
                                <Flex className="center" width={"90%"} height={"6vh"} justifyContent="center" alignItems={"center"} mt="1rem">
                                    <Flex className="line" />
                                    {/* <Flex className="or">OR</Flex> */}
                                </Flex>
                                {/* right flex  */}
                                <Flex direction={"column"} alignItems="center" justifyContent={"center"} width={"100%"} mt="1rem">
                                    {/* <Flex color={"green"} mb={'1.5rem'}>Why  an Account?</Flex> */}
                                    <Flex justifyContent={"space-around"} width={"65%"}>
                                    <Flex className="googleButton google" onClick={googleLogin} justifyContent="center">
                                        <img src={Google} alt="" className='icon' />
                                        Google
                                    </Flex>
                                    <Flex className="googleButton facebook" justifyContent={'center'}>
                                        <img src={facebook} alt="" className='icon' />
                                        Facebook
                                    </Flex>
                                    <Flex className="googleButton email" onClick={googleLogin} justifyContent="center">
                                        <img src={Email} alt="" className='icon' style={{"filter":"invert(100%)"}}/>
                                        Email
                                    </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </ModalBody>
                        <Flex pb={2} pt={3} width={"98%"} justifyContent="flex-end">
                            <ModalFooter p={0}>
                                <Button type='submit' size={'sm'} form='customer_form' colorScheme='blue' mr={2}>
                                    Submit
                                </Button>
                                <Button size={'sm'} onClick={onClose} ml={2}>Cancel</Button>
                            </ModalFooter>
                        </Flex>
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalSignUp