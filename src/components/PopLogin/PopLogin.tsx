import React , {useReducer} from 'react'

// images 
import Google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'

import { formFields } from './data'
import { Button, Flex, Input, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverTrigger, useDisclosure } from '@chakra-ui/react'

// for formReducer 
import { formReducer } from '../../utils/formReducer'
interface InitialState {
    username: string,
    password: string,
}
const initialState:InitialState = {
    username: '',
    password: '',
}

const PopLogin: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    // for form reducer 
    const [formState, dispatchChangeinFormState] = useReducer(formReducer, initialState);
    const _changeInInput = (type: string, value: any) => {
        console.log('In _change', { type, value })
        dispatchChangeinFormState({ type, value })
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
                        <Button color={"white"} bgColor={"#47B5FF"} className="mainBtn" fontSize="1.1rem" cursor={"pointer"}>Log In</Button>
                    </PopoverTrigger>
                    <PopoverContent style={{marginTop:'15px'}} >
                        <Flex fontSize={"1.5rem"} pt={4} fontWeight='bold' border='0' justifyContent={"center"} mb={"1rem"}>
                            LogIn With
                        </Flex>
                        <PopoverArrow />
                        <PopoverCloseButton />

                        <Flex width={"100%"} direction="column" alignItems={"center"} justifyContent="center" >
                            {/* right flex  */}
                            <Flex direction={"column"} alignItems="center" justifyContent={"center"} width={"100%"}>
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
                                                <Flex width={"50%"} key={formField.placeholder} ml={idx > 0 ? "1rem" : ""}>
                                                    <Flex alignItems="center" direction="column" width="100%">
                                                        {/* <FormLabel mt="0.8rem" mb={idx === formFields.length-1 ? "0rem" :"0.8rem"}>{formField.label}</FormLabel> */}
                                                        <Input className='phone' fontSize={"0.7rem"} mt="0.8rem" mb="0.8rem" type={formField.type} required={formField.required} placeholder={formField.placeholder} name={formField.name} onChange={(e) => ( _changeInInput(formField.name, e.target.value) )} />
                                                    </Flex>
                                                </Flex>
                                            )
                                        })}
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

                            <Flex justifyContent={"flex-end"} width={"100%"}>
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

export default PopLogin