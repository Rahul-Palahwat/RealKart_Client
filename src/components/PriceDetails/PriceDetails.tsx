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
                {/* address component  */}
                <Flex height="auto" justifyContent={"center"} alignItems='center' mb={"1rem"}>
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
                            <Flex m="0.2rem" ml="2rem">Rahul kumar</Flex>
                            <Flex m="0.2rem" ml="2rem" color={"grey"}>Village- Nagla Anta, Post- Kota, Uttar Pradesh, PinCode 204213</Flex>
                        </Flex>

                    </Flex>
                </Flex>

                <Flex width={"100%"} justifyContent="center"><Flex width={"80%"} height={"8vh"} alignItems='center' color={"grey"} fontSize="1.2rem">Price Details</Flex></Flex>
                
                <Flex justifyContent={"center"}><hr style={{ "width": "80%" }} /></Flex>


                <Flex justifyContent={"center"}><Flex m="1.5rem" mt={"1rem"} mb={0} justifyContent={"space-between"} width="70%">
                    <Flex>Price({noOfItems} Items)</Flex>
                    <Flex width={"20%"}>&#x20B9;{sum.toLocaleString("en-IN")}</Flex>
                </Flex>
                </Flex>

                <Flex justifyContent={"center"}><Flex m="1.5rem" mt={"1rem"} mb={0} justifyContent={"space-between"} width="70%">
                    <Flex>Discount</Flex>
                    <Flex width={"20%"} color={"#398F3C"}>-&#x20B9;{sum > 1000 ? "1,000" : "0"}</Flex>
                </Flex>
                </Flex>

                <Flex justifyContent={"center"}><Flex m="1.5rem" mt={"1rem"} mb={0} justifyContent={"space-between"} width="70%">
                    <Flex>Delivery Charges</Flex>
                    <Flex width={"20%"} color={"#398F3C"}>FREE</Flex>
                </Flex>
                </Flex>

                <Flex justifyContent={"center"} mt="1rem"><hr style={{ "width": "80%" }} /></Flex>

                <Flex width={"100%"} justifyContent="center">
                    <Flex width={"80%"} height={"8vh"} alignItems='center' color={"grey"} fontSize="1.2rem" justifyContent={"space-between"}>
                    <Flex fontWeight={"bold"}>Total Amount</Flex>
                    <Flex width={"24%"} fontWeight={'bold'}>&#x20B9;{sum > 1000 ? (sum - 1000).toLocaleString("en-IN") : sum.toLocaleString("en-IN")}</Flex>
                    </Flex>
                    </Flex>

                <Flex justifyContent={"center"}><hr style={{ "width": "80%" }} /></Flex>


                <Flex width={"100%"} justifyContent="center">
                    <Flex width={"80%"} alignItems='center' mb={"1rem"} mt="1rem" color={"grey"} justifyContent={"space-between"}>
                    <Flex color={"#398F3C"} ml="2.5rem">You will save &#x20B9;{sum > 1000 ? `1,000` : 0} on this order</Flex>
                    </Flex>
                    </Flex>


                <Flex justifyContent={"center"} mt="1rem"><hr style={{ "width": "80%" }} /></Flex>

                <Flex m="1.5rem" mt={"1rem"} justifyContent={"center"} alignItems="center">
                    <Button width={"80%"} colorScheme='orange' fontSize={"1.3rem"} size="lg">Place Order</Button>
                </Flex>
                <></>
            </Flex>
        </>
    )
}

export default PriceDetails