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

// this is modal css file 
import './ModalSignUp.css'
import { signInGoogle } from '../../redux/reducers/Login'
import { text } from 'node:stream/consumers'
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

// const formReducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'handleChange':
//             return { ...state, [action.field]: action.payload }
//         default:
//             return state
//     }
// }

const ModalSignUp: React.FC<ModalSignUpProps> = ({ isOpen, onClose, onOpen }) => {

    const [formState, dispatchChangeinFormState] = useReducer(formReducer, initialState);

    const _changeInInput = (type:string, value:any) => {
        console.log('In _change', {type, value})
        dispatchChangeinFormState({type, value})
    }

    // const handleChange = (e: any) => {
    //     formDispatch({
    //         type: 'handleChange',
    //         field: e.target.name,
    //         payload: e.target.value,
    //     })
    // }

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

    console.log({formState})


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
            <Modal size={"3xl"}
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent pl="2rem" pr={"2rem"}>
                    <Flex direction={"column"}>
                        <form id='customer_form'>
                            <ModalHeader ><Flex justifyContent="center">Create your account</Flex></ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                {/* After name  */}
                                <Flex width={"100%"}>
                                    {/* Left flex  */}
                                    <Flex direction={"column"} width="50%">
                                        {formFields.map((formField) => (
                                            <Flex width={"100%"} key={formField.placeholder} mt="0.8rem" mb="0.8rem">
                                                <FormControl>
                                                    <FormLabel>{formField.label}</FormLabel>
                                                    <Input required={formField.required} placeholder={formField.placeholder} name={formField.name} onChange={(e) => {console.log('in field ', {type:formField.name, value:e.target.value} );_changeInInput( formField.name ,e.target.value)}} />
                                                </FormControl>
                                            </Flex>
                                        ))}
                                        
                                    </Flex>


                                    {/* middle line  */}
                                    {/* <Flex className="center" width={"10%"} height={"50vh"} justifyContent="center">
                                        <Flex className="line" />
                                        <Flex className="or">OR</Flex>
                                    </Flex> */}
                                    {/* right flex  */}
                                    {/* <Flex direction={"column"} alignItems="center" justifyContent={"center"} width={"40%"}>
                                        <Flex color={"green"}>Why create an Account?</Flex>
                                        <Flex className="googleButton google" onClick={googleLogin}>
                                            <img src={Google} alt="" className='icon' />
                                            Google
                                        </Flex>
                                        <Flex className="googleButton facebook">
                                            <img src={facebook} alt="" className='icon' />
                                            Facebook
                                        </Flex>
                                    </Flex> */}



                                </Flex>
                            </ModalBody>

                            <ModalFooter>
                                <Button type='submit' form='customer_form' colorScheme='blue' mr={3} onClick={() => handleSubmit()}>
                                    Submit
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </form>
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalSignUp