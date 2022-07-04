import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

import { useLocation } from 'react-router-dom'

import './Product.css'

interface Props {
    title: string
    image: string[]
    price: number
}

const Product: React.FC<Props> = (props) => {
    const { title, image, price } = props;
    const newtitle: string = title.slice(0, 12);

    // const newprice = price;

    const location = useLocation();
    console.log("location", location.pathname);



    return (
        <Flex className='total' m={location.pathname === '/' ? "1rem 1rem" : ""} borderRadius={"1.2rem"}>
            <Flex alignItems={"center"} justifyContent="center" width={"100%"} height="100%" wrap={"wrap"}>
                <Flex direction={"column"} alignItems="center" className='add' height="100%" width="100%">
                    <Flex mt={2}>{newtitle}</Flex>
                    <Flex mt={2}><img src={image[0]} alt="Hello" style={{ "height": "20vh"}} /></Flex>
                    <Flex justifyContent={"space-between"}>
                        <Flex mt={2} color="#4167B2" fontWeight={"bold"}>&#x20B9;{price.toLocaleString("en-IN")}</Flex>
                        <Flex mt={2} ml={4} textDecoration="line-through" fontSize={"0.8rem"} alignItems="flex-end">&#x20B9;{price}</Flex>
                    </Flex>
                    <Flex id="cart" width="80%" height={"100%"} alignItems={"flex-end"} mt={3}>
                        <Flex mb={2} width="100%" justifyContent={"center"}>
                            <Button className='items' width="80%" color={"white"} bgColor={"#47B5FF"} fontSize="0.8rem" height={"1.8rem"}>Add to Cart</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Product