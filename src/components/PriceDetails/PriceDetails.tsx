import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
// for redux 
import { useAppSelector } from '../../redux'
import './PriceDetails.css'

const PriceDetails:React.FC = () => {
    const {sum , noOfItems} = useAppSelector((state) => state.cartItem);
  return (
    <>
    <Flex className="cartComponents" width="100%" direction={"column"} height="65vh">

        <Flex height={"8vh"} alignItems='center' ml="1.5rem" color={"grey"} fontSize="1.2rem">PRICE DETAILS</Flex>
        <hr style={{"width":"100%"}}/>

        <Flex m="1.5rem" mb={0} justifyContent={"space-between"}>
            <Flex>Price({noOfItems} Items)</Flex>
            <Flex>&#x20B9;{sum}</Flex>
        </Flex>

        <Flex m="1.5rem" mb={0} justifyContent={"space-between"}>
            <Flex>Discount</Flex>
            <Flex color={"#398F3C"}>-&#x20B9;{sum>1000?"1000":"0"}</Flex>
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
            <Flex fontWeight={'bold'}>&#x20B9;{sum>1000? sum-1000: sum}</Flex>
        </Flex>

        <Flex m="1.5rem" mb={0} justifyContent={"space-between"}>
            <hr />
        </Flex>

        <Flex m="1.5rem" mb={"1rem"} mt="1rem">
            <Flex color={"#398F3C"}>You will save &#x20B9;{sum>1000?1000:0} on this order</Flex>
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