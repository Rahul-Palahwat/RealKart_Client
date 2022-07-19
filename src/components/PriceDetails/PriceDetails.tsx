import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import './PriceDetails.css'

const PriceDetails:React.FC = () => {
  return (
    <>
    <Flex border={"1px solid black"} width="100%" direction={"column"} height="65vh">

        <Flex height={"8vh"} alignItems='center' ml="1.5rem" color={"grey"} fontSize="1.2rem">PRICE DETAILS</Flex>
        <hr style={{"width":"100%"}}/>

        <Flex m="1.5rem" mb={0} justifyContent={"space-between"}>
            <Flex>Price(4 Items)</Flex>
            <Flex>&#x20B9;1000</Flex>
        </Flex>

        <Flex m="1.5rem" mb={0} justifyContent={"space-between"}>
            <Flex>Discount</Flex>
            <Flex color={"#398F3C"}>-&#x20B9;1000</Flex>
        </Flex>

        <Flex m="1.5rem" mb={0} justifyContent={"space-between"}>
            <Flex>Delivery Charges</Flex>
            <Flex color={"#398F3C"}>FREE</Flex>
        </Flex>

        <Flex m="1.5rem" mb={0} justifyContent={"space-between"}>
            <hr />
        </Flex>

        <Flex m="1.5rem" mb={0} justifyContent={"space-between"}>
            <Flex fontWeight={"bold"}>Total Amount</Flex>
            <Flex fontWeight={'bold'}>&#x20B9;2000</Flex>
        </Flex>

        <Flex m="1.5rem" mb={0} justifyContent={"space-between"}>
            <hr />
        </Flex>

        <Flex m="1.5rem" mb={"1rem"} mt="1rem">
            <Flex color={"#398F3C"}>You will save &#x20B9;1000 on this order</Flex>
        </Flex>

        <hr style={{"width":"100%"}}/>

        <Flex m="1.5rem" justifyContent={"center"} alignItems="center">
        <Button width={"80%"} colorScheme='orange' fontSize={"1.3rem"} size="lg">Place Order</Button>
        </Flex>

        <></>
    </Flex>
    </>
  )
}

export default PriceDetails