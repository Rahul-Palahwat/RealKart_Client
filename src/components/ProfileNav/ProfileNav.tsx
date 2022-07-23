import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex } from '@chakra-ui/react'
import React from 'react'
// css import 
import '../ProfileNav/ProfileNav.css'
const ProfileNav: React.FC = () => {
    return (
        <>
            <Flex mt={"1rem"} width={"100%"} height="auto" className='total' direction={"column"}>
                {/* My orders */}
                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Flex alignItems={"center"} width="90%" justifyContent={"space-between"}>
                                    <Flex fontSize={"1.3rem"} color="gray" fontWeight={"bold"} cursor="pointer">My Orders</Flex>
                                </Flex>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex width={"100%"} mt="1rem" justifyContent={"center"}>
                                <Flex fontSize={"1.1rem"} width={"70%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Recent Orders</Flex>
                            </Flex>
                            <Flex width={"100%"} mt="1rem" justifyContent={"center"}>
                                <Flex fontSize={"1.1rem"} width={"70%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Past orders</Flex>
                            </Flex>
                            <Flex width={"100%"} mt="1rem" justifyContent={"center"}>
                                <Flex fontSize={"1.1rem"} width={"70%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Returns and Cancel</Flex>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                {/* My Stuffs  */}
                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Flex alignItems={"center"} width="90%">
                                    <Flex fontSize={"1.3rem"} color="gray" fontWeight={"bold"} cursor="pointer">My Stuffs</Flex>
                                </Flex>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex width={"100%"} mt="1rem" justifyContent={"center"}>
                                <Flex fontSize={"1.1rem"} width={"70%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Coupons and Offers</Flex>
                            </Flex>
                            <Flex width={"100%"} mt="1rem" justifyContent={"center"}>
                                <Flex fontSize={"1.1rem"} width={"70%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Reviews and Ratings</Flex>
                            </Flex>
                            <Flex width={"100%"} mt="1rem" justifyContent={"center"}>
                                <Flex fontSize={"1.1rem"} width={"70%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Wishlisted Items</Flex>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                
                {/* Payment  */}
                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Flex alignItems={"center"} width="90%" justifyContent={"space-between"}>
                                    <Flex fontSize={"1.3rem"} color="gray" fontWeight={"bold"} cursor="pointer">Payment Methods</Flex>
                                </Flex>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex width={"100%"} mt="1rem" justifyContent={"center"}>
                                <Flex fontSize={"1.1rem"} width={"70%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Saved UPI</Flex>
                            </Flex>
                            <Flex width={"100%"} mt="1rem" justifyContent={"center"}>
                                <Flex fontSize={"1.1rem"} width={"70%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Saved Cards</Flex>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                
                
                {/* Account setting  */}
                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Flex alignItems={"center"} width="90%" justifyContent={"space-between"}>
                                    <Flex fontSize={"1.3rem"} color="gray" fontWeight={"bold"} cursor="pointer">Account Setting</Flex>
                                </Flex>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex width={"100%"} mt="1rem" justifyContent={"center"}>
                                <Flex fontSize={"1.1rem"} width={"70%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Profile Information</Flex>
                            </Flex>
                            <Flex width={"100%"} mt="1rem" justifyContent={"center"}>
                                <Flex fontSize={"1.1rem"} width={"70%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Manage Address</Flex>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
        </>
    )
}
export default ProfileNav