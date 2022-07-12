import React, { useEffect, useReducer } from 'react'
import {
    Badge, Button, Flex,
    FormControl, FormLabel, IconButton,
    Input, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalFooter, ModalHeader,
    ModalOverlay, useDisclosure
} from '@chakra-ui/react'


// for reducer 
import { useAppDispatch, useAppSelector } from '../../redux'


// import google png from assets folder 
import Google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import Email from '../../assets/Email.png'

// this is modal css file 
import './ModalSignUp.css'
import { signInGoogle } from '../../redux/reducers/Login'
import { text } from 'node:stream/consumers'

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

    const [formState, dispatchChangeinFormState] = useReducer(formReducer, initialState);

    const _changeInInput = (type: string, value: any) => {
        console.log('In _change', { type, value })
        dispatchChangeinFormState({ type, value })
    }
    // for handling form submit 
    const handleSubmit = () => {
        console.log("hello")
        //logic for id already exists
        //logic for phone no already exists
        //logic for password match
        if (formState.password != formState.confirmPassword) {
            return console.log("Password did not match")
        }
        //logic to save user to the database
    }

    console.log({ formState })


    const initialRef = React.useRef(null)
    const dispatch = useAppDispatch();
    const { getUser, dataGoogle } = useAppSelector((state) => state.login);

    const googleLogin = () => {
        console.log("Hello")
        dispatch(signInGoogle({}))
    }

    useEffect(() => {

    }, [])

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
                                                                    <Input width={"100%"} fontSize={"0.7rem"} required={formField.required} placeholder={formField.placeholder} name={formField.name} onChange={(e) => { console.log('in field ', { type: formField.name, value: e.target.value }); _changeInInput(formField.name, e.target.value) }} />
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
                                                                <Input fontSize={"0.7rem"} mt="0.8rem" mb="0.8rem" type={formField.type} required={formField.required} placeholder={formField.placeholder} name={formField.name} onChange={(e) => { console.log('in field ', { type: formField.name, value: e.target.value }); _changeInInput(formField.name, e.target.value) }} />
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
                                                                    <Input width={"100%"} fontSize={"0.7rem"} required={formField.required} placeholder={formField.placeholder} name={formField.name} onChange={(e) => { console.log('in field ', { type: formField.name, value: e.target.value }); _changeInInput(formField.name, e.target.value) }} />
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
                                <Flex className="center" width={"90%"} height={"10vh"} justifyContent="center" alignItems={"center"} mt="1rem">
                                    <Flex className="line" />
                                    <Flex className="or">OR</Flex>
                                </Flex>
                                {/* right flex  */}
                                <Flex direction={"column"} alignItems="center" justifyContent={"center"} width={"100%"} mt="1rem">
                                    {/* <Flex color={"green"} mb={'1.5rem'}>Why  an Account?</Flex> */}
                                    <Flex justifyContent={"space-between"} width={"100%"}>
                                    <Flex className="googleButton google" onClick={googleLogin}>
                                        <img src={Google} alt="" className='icon' />
                                        Google
                                    </Flex>
                                    <Flex className="googleButton facebook">
                                        <img src={facebook} alt="" className='icon' />
                                        Facebook
                                    </Flex>
                                    <Flex className="googleButton email" onClick={googleLogin}>
                                        <img src={Email} alt="" className='icon' style={{"filter":"invert(100%)"}}/>
                                        Email
                                    </Flex>
                                    </Flex>
                                </Flex>



                            </Flex>
                        </ModalBody>
                        <Flex pb={2} width={"96.5%"} justifyContent="flex-end">
                            <ModalFooter p={0}>
                                <Button type='submit' form='customer_form' colorScheme='blue' mr={3}>
                                    Submit
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </Flex>
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalSignUp