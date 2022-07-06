import { CheckIcon, InfoIcon, PlusSquareIcon } from '@chakra-ui/icons'
import { Button, Flex, IconButton } from '@chakra-ui/react'
import React from 'react'

import { BsBagCheck , BsCartPlus } from 'react-icons/bs'

import { useLocation } from 'react-router-dom'

import './Product.css'

interface Props {
    title: string
    image: string[]
    price: number
}

const Product: React.FC<Props> = (props) => {
    const { title, image, price } = props;
    const newtitle: string = title.slice(0, 18);

    // const newprice = price;

    const location = useLocation();



    return (
        <Flex className='total' m={location.pathname === '/' ? "0.5rem 0.5rem" : ""} borderRadius={"1.2rem"}>
            <Flex alignItems={"center"} justifyContent="center" width={"100%"} height="100%" wrap={"wrap"} p={2}>
                <Flex direction={"column"} alignItems="center" className='add' height="100%" width="100%">
                    <Flex mt={1}>{newtitle}</Flex>
                    <Flex mt={3}><img src={image[0]} alt="Hello" style={{ "height": "20vh","borderRadius":"0.5rem"}} /></Flex>
                    <Flex justifyContent={"space-between"} mt={2}>
                        <Flex mt={2} color="#4167B2" fontWeight={"bold"}>&#x20B9;{price.toLocaleString("en-IN")}</Flex>
                        <Flex mt={2} ml={4} textDecoration="line-through" fontSize={"0.8rem"} alignItems="flex-end">&#x20B9;{price}</Flex>
                    </Flex>
                    <Flex id="cart" width="80%" height={"100%"} alignItems={"center"} mt={1} justifyContent="space-around">
                        <Flex mb={4} justifyContent={"center"} alignItems="center">
                            {/* <Flex width={"80%"}><Button className='items' width="80%" color={"white"} bgColor={"#47B5FF"} fontSize="0.8rem" height={"1.8rem"}>Add to Cart</Button></Flex> */}
                            <Flex><IconButton aria-label='Search database' variant={"ghost"} colorScheme='cyan' icon={<BsCartPlus />} /></Flex>
                        </Flex>
                        <Flex mb={4} justifyContent={"center"} alignItems="center">
                            <Flex><IconButton aria-label='Search database' variant={"ghost"} colorScheme="cyan" icon={<BsBagCheck />} /></Flex>
                        </Flex>
                        <Flex mb={4} justifyContent={"center"} alignItems="center">
                            <Flex><IconButton aria-label='Search database' variant={"ghost"} colorScheme="cyan" icon={<InfoIcon />} /></Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Product