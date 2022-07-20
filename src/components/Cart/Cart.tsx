import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import CartItem from '../CartItem/CartItem'
import PriceDetails from '../PriceDetails/PriceDetails'

// for redux 
import { useAppSelector, useAppDispatch } from '../../redux'

import './Cart.css'

const Cart: React.FC = () => {

    const it = '625677a0c6ea9be331f5a5b3';
    const { items } = useAppSelector((state) => state.cartItem)

    console.log("Cart wala", items)
    return (
        <>
            <Flex border={"1px solid red"} height="auto" justifyContent={"center"} mt={"2.2rem"}>

                <Flex border="1px solid green" width={"60%"} direction="column" className="cartComponents">

                    {/* address component  */}
                    <Flex border={"1px solid red"} height="15vh" justifyContent={"center"} alignItems='flex-end'>
                        <Flex p={2} border={"1px solid grey"} width="20%" alignItems={'center'} fontSize='1.3rem' height={"100%"} fontWeight="bold">MyCart(4)</Flex>

                        <Flex border={"1px solid blue"} width="73%" ml="2rem" height={"95%"} justifyContent="space-between">

                            {/* Address  */}
                            <Flex direction={"column"} justifyContent="center">
                                <Flex m="0.2rem" ml="1rem">Deliver to: <Flex fontWeight={"bold"}>Rahul kumar, 204213</Flex></Flex>
                                <Flex m="0.2rem" ml="1rem" color={"grey"}>Village- Nagla Anta, Post- Kota, Uttar Pradesh</Flex>
                            </Flex>

                            <Flex alignItems={"center"} mr="1rem">
                                <Button colorScheme='blue' variant='outline'>
                                    Change
                                </Button>
                            </Flex>
                        </Flex>

                    </Flex>

                    {/* CartItem component  */}
                    <Flex border={"2px solid yellow"} height="100%" direction={"column"}>
                        {/* {items.map((id) => 
                             (
                                <Flex height={"30vh"} width="auto" m="1rem">
                                    <CartItem />
                                </Flex>
                            )
                        )} */}

                        <Flex height={"30vh"} width="auto" m="1rem">
                            <CartItem id={it}/>
                        </Flex>


                    </Flex>

                </Flex>

                {/* Price Details component  */}
                <Flex border={"1px solid blue"} width="30%" ml={"2rem"} height="auto" className="cartComponents">
                    <PriceDetails />
                </Flex>

            </Flex>
        </>
    )
}

export default Cart