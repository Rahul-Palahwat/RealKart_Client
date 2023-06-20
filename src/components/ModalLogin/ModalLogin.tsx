import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

// images 
import Google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import Email from '../../assets/Email.png'

import {formFields} from './data'

interface ModalLoginProps {
    onOpen1: () => void,
    onClose1: () => void,
    isOpen1: boolean
}

const ModalLogin:React.FC<ModalLoginProps> = ({ isOpen1, onClose1, onOpen1 }) => {
    // const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  return (
    <>
        <Modal size={'md'} 
        initialFocusRef={initialRef}
        isOpen={isOpen1}
        onClose={onClose1}
      >
        <ModalOverlay />
        <ModalContent>
        {/* <Flex direction={"column"}> */}
                        <ModalHeader ><Flex justifyContent="center" fontSize={"1.6rem"}>LogIn With</Flex></ModalHeader>
                        <ModalBody pb={0}>
                            <Flex width={"100%"} direction="column" alignItems={"center"} justifyContent="center" >
                                {/* right flex  */}
                                <Flex direction={"column"} alignItems="center" justifyContent={"center"} width={"100%"}>
                                    {/* <Flex color={"green"} mb={'1.5rem'}>Why  an Account?</Flex> */}
                                    <Flex justifyContent={"space-around"} alignItems={"center"} width={"65%"} direction={"column"}>
                                    <Flex className="googleButton google" justifyContent="center">
                                        <img src={Google} alt="" className='icon' />
                                        Google
                                    </Flex>
                                    <Flex className="googleButton facebook" justifyContent={'center'}>
                                        <img src={facebook} alt="" className='icon' />
                                        Facebook
                                    </Flex>
                                    
                                    </Flex>
                                </Flex>
                                {/* Left flex  */}
                                <Flex direction={"column"} width="90%">
                                    <form id='customer_form'>
                                        <Flex width="100%" alignItems={"center"}>
                                            {formFields.map((formField, idx) => {
                                                    return (
                                                        <Flex width={"50%"} key={formField.placeholder} ml={idx>0?"1rem":""}>
                                                            <Flex alignItems="center" direction="column" width="100%">
                                                                {/* <FormLabel mt="0.8rem" mb={idx === formFields.length-1 ? "0rem" :"0.8rem"}>{formField.label}</FormLabel> */}
                                                                <Input className='phone'  fontSize={"0.7rem"} mt="0.8rem" mb="0.8rem" type={formField.type} required={formField.required} placeholder={formField.placeholder} name={formField.name} onChange={(e) => { console.log('in field ', { type: formField.name, value: e.target.value });  }} />
                                                            </Flex>
                                                        </Flex>
                                                    )
                                            })}
                                        </Flex>
                                    </form>
                                </Flex>
                            </Flex>
                        </ModalBody>
                        <Flex pb={2} pt={3} width={"98%"} justifyContent="flex-end">
                            <ModalFooter p={0}>
                                <Button type='submit' size={'sm'} form='customer_form' colorScheme='blue' mr={2}>
                                    Submit
                                </Button>
                                <Button size={'sm'} onClick={onClose1} ml={2}>Cancel</Button>
                            </ModalFooter>
                        </Flex>
                    {/* </Flex> */}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalLogin