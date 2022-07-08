import React, { useEffect } from 'react'
import {
    Badge, Button, Flex,
    FormControl, FormLabel, IconButton,
    Input, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalFooter, ModalHeader,
    ModalOverlay, useDisclosure
} from '@chakra-ui/react'
import './ModalSignUp.css'

interface ModalSignUpProps {
    onOpen: () => void,
    onClose: () => void,
    isOpen: boolean

}

const ModalSignUp: React.FC<ModalSignUpProps> = ({ isOpen, onClose, onOpen }) => {

    const initialRef = React.useRef(null)

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
                <ModalContent>
                    <Flex direction={"column"}>
                    <ModalHeader>Create your account</ModalHeader>
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
                        <Flex>
                        <FormControl>
                                <FormLabel>E-mail</FormLabel>
                                <Input placeholder='Enter your E-mail address' type={"email"}/>
                            </FormControl>
                        </Flex>
                        <Flex>
                        <FormControl>
                                <FormLabel>Contact No.</FormLabel>
                                <Input placeholder='Enter your phone number' type={"number"}/>
                            </FormControl>
                        </Flex>
                        <Flex>
                        <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input placeholder='Enter your password' type={"password"}/>
                            </FormControl>
                        </Flex>
                        <Flex>
                        <FormControl>
                                <FormLabel>Confirm Password</FormLabel>
                                <Input placeholder='Retype your password' type={"password"}/>
                            </FormControl>
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