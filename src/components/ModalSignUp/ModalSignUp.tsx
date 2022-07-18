import React, { useEffect } from 'react'
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
import { useNavigate } from 'react-router-dom'

interface ModalSignUpProps {
    onOpen: () => void,
    onClose: () => void,
    isOpen: boolean

}

const ModalSignUp: React.FC<ModalSignUpProps> = ({ isOpen, onClose, onOpen }) => {
    const initialRef = React.useRef(null)
    const dispatch = useAppDispatch();
    const { getUser , dataGoogle } = useAppSelector((state) => state.login);
    let navigate = useNavigate();
    const googleLogin = () => {
        console.log("Hello")
        // dispatch(signInGoogle({}))
        // window.open('http://localhost:3000/auth/google/new')
        window.open('http://localhost:3000/auth/google/new', '',
                        `toolbar=no, location=no, directories=no, status=no, menubar=no, 
scrollbars=no, resizable=no, copyhistory=no`
                    );
    }

    console.log({getUser, dataGoogle})

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
                        <ModalHeader ><Flex justifyContent="center">Create your account</Flex></ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Flex justifyContent={"space-between"} alignItems={"center"}>
                                <Flex width={"45%"}>
                                    <FormControl>
                                        <FormLabel>First name</FormLabel>
                                        <Input ref={initialRef} placeholder='First name' />
                                    </FormControl>
                                </Flex>
                                <Flex width={"45%"} alignItems={"center"}>
                                    <FormControl>
                                        <FormLabel>Last name</FormLabel>
                                        <Input placeholder='Last name' />
                                    </FormControl>
                                </Flex>
                            </Flex>
                            {/* After name  */}
                            <Flex width={"100%"}>
                                {/* Left flex  */}
                                <Flex direction={"column"} width="50%">
                                    <Flex width={"100%"}>
                                        <FormControl>
                                            <FormLabel mt="0.8rem" mb="0.8rem">E-mail</FormLabel>
                                            <Input placeholder='Enter your E-mail address' type={"email"} />
                                        </FormControl>
                                    </Flex>
                                    <Flex width={"100%"}>
                                        <FormControl>
                                            <FormLabel mt="0.8rem" mb="0.8rem">Contact No.</FormLabel>
                                            <Input placeholder='Enter your phone number' type={"number"} />
                                        </FormControl>
                                    </Flex>
                                    <Flex width={"100%"}>
                                        <FormControl>
                                            <FormLabel mt="0.8rem" mb="0.8rem">Password</FormLabel>
                                            <Input placeholder='Enter your password' type={"password"} />
                                        </FormControl>
                                    </Flex>
                                    <Flex width={"100%"}>
                                        <FormControl>
                                            <FormLabel mt="0.8rem" mb="0.8rem">Confirm Password</FormLabel>
                                            <Input placeholder='Retype your password' type={"password"} />
                                        </FormControl>
                                    </Flex>
                                </Flex>
                                {/* middle line  */}
                                <Flex className="center" width={"10%"} height={"50vh"} justifyContent="center">
                                    <Flex className="line" />
                                    <Flex className="or">OR</Flex>
                                </Flex>
                                {/* right flex  */}
                                <Flex direction={"column"} alignItems="center" justifyContent={"center"} width={"40%"}>
                                    <Flex color={"green"}>Why create an Account?</Flex>
                                    <Flex className="googleButton google" onClick={googleLogin}>
                                        <img src={Google} alt="" className='icon' />
                                        Google
                                    </Flex>
                                    <Flex className="googleButton facebook">
                                        <img src={facebook} alt="" className='icon' />
                                        Facebook
                                    </Flex>
                                </Flex>
                            </Flex>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}>
                                Submit
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalSignUp