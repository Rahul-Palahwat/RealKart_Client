import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
// for redux 
import { useAppSelector } from '../../redux'
import './PriceDetails.css'

const PriceDetails: React.FC = () => {
    const { sum, noOfItems } = useAppSelector((state) => state.cartItem);
    return (
        <>
            <Flex className="cartComponents sticky" width="100%" direction={"column"} height="80vh" >

                <Flex height={"8vh"} alignItems='center' ml="1.5rem" color={"grey"} fontSize="1.2rem">Price Details</Flex>
                <hr style={{ "width": "100%" }} />

                <Flex m="1.5rem" mt={"1rem"} mb={0} justifyContent={"space-between"}>
                    <Flex>Price({noOfItems} Items)</Flex>
                    <Flex>&#x20B9;{sum}</Flex>
                </Flex>

                <Flex m="1.5rem" mt={"1rem"} mb={0} justifyContent={"space-between"}>
                    <Flex>Discount</Flex>
                    <Flex color={"#398F3C"}>-&#x20B9;{sum > 1000 ? "1000" : "0"}</Flex>
                </Flex>

                <Flex m="1.5rem" mt={"1rem"} mb={0} justifyContent={"space-between"}>
                    <Flex>Delivery Charges</Flex>
                    <Flex color={"#398F3C"}>FREE</Flex>
                </Flex>

                <Flex m="1.5rem" mt={"1rem"} mb={0} justifyContent={"space-between"}>
                    <hr />
                </Flex>

                <Flex m="1.5rem" mt={"1rem"} mb={0} justifyContent={"space-between"}>
                    <Flex fontWeight={"bold"}>Total Amount</Flex>
                    <Flex fontWeight={'bold'}>&#x20B9;{sum > 1000 ? sum - 1000 : sum}</Flex>
                </Flex>

                <Flex m="1.5rem" mt={"1rem"} mb={0} justifyContent={"space-between"}>
                    <hr />
                </Flex>

                <Flex m="1.5rem" mb={"1rem"} mt="1rem">
                    <Flex color={"#398F3C"}>You will save &#x20B9;{sum > 1000 ? 1000 : 0} on this order</Flex>
                </Flex>

                <hr style={{ "width": "100%" }} />

                <Flex m="1.5rem" mt={"1rem"} justifyContent={"center"} alignItems="center">
                    <Button width={"80%"} colorScheme='orange' fontSize={"1.3rem"} size="lg">Place Order</Button>
                </Flex>




                {/* address component  */}
                <Flex height="auto" justifyContent={"center"} alignItems='flex-end' mb={"1rem"}>
                    <Flex className="cartComponents" p={2} width="90%" height={"100%"} justifyContent="space-between" direction={"column"}>
                        {/* Address  */}
                        <Flex direction={"column"} justifyContent="center" mb={2}>
                            <Flex m="0.2rem" ml="1rem" fontWeight={"bold"} fontSize={"1.2rem"}>
                                <Flex width={"60%"}>Shipping Address</Flex>
                                <Flex alignItems={"center"} mr="1rem" width={"40%"} justifyContent="flex-end">
                                    <Button colorScheme='blue' variant='outline'>
                                        Change
                                    </Button>
                                </Flex>
                            </Flex>
                            <Flex m="0.2rem" ml="1rem">Rahul kumar</Flex>
                            <Flex m="0.2rem" ml="1rem" color={"grey"}>Village- Nagla Anta, Post- Kota, Uttar Pradesh, PinCode 204213</Flex>
                        </Flex>

                    </Flex>
                </Flex>
                <></>
            </Flex>
        </>
    )
}

export default PriceDetails