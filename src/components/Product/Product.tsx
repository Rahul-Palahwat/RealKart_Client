import { InfoIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { Flex, IconButton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsBagCheck , BsCartPlus } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import './Product.css'
interface Props {
    title: string,
    image: string[],
    price: number,
    company: string,
    desc: string,
    minStock : number,
    stock: number,
}
const Product: React.FC<Props> = (props) => {
    const [info , setInfo] = useState<boolean>(true);
    const { title, image, price , company, desc, minStock , stock } = props;
    const newtitle: string = title.slice(0, 18);
    // const newprice = price;
    const location = useLocation();
    // console.log(info)
    return (
        <Flex className='total' m={location.pathname === '/' ? "0.5rem 0.5rem" : ""} borderRadius={"1.2rem"}>

            {info ?
            <Flex alignItems={"center"} justifyContent="center" width={"100%"} height="100%" wrap={"wrap"} p={2}>
                <Flex direction={"column"} alignItems="center" className='add' height="100%" width="100%">
                    <Flex mt={1}>{newtitle}</Flex>
                    <Flex mt={3}><img src={image[0]} alt="Hello" style={{ "height": "20vh","borderRadius":"0.5rem"}} /></Flex>
                    <Flex justifyContent={"space-between"} mt={2}>
                        <Flex mt={2} color="#4167B2" fontWeight={"bold"}>&#x20B9;{price.toLocaleString("en-IN")}</Flex>
                        <Flex mt={2} ml={2} textDecoration="line-through" fontSize={"0.8rem"} alignItems="center">&#x20B9;{price}</Flex>
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
                            <Flex><IconButton aria-label='Search database' variant={"ghost"} colorScheme="cyan" onClick={() => setInfo(false)} icon={<InfoIcon />} /></Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            :
            <Flex alignItems={"center"} justifyContent="center" width={"100%"} height="100%" wrap={"wrap"} p={0}>
                <Flex direction={"column"} alignItems="center" className='add' height="100%" width="100%">
                    <Flex mt={4} textAlign="center">{title}</Flex>
                    {/* <Flex mt={3}><img src={image[0]} alt="Hello" style={{ "height": "20vh","borderRadius":"0.5rem"}} /></Flex> */}
                    <Flex justifyContent={"space-between"} textAlign="center" mt={2}>Company:{company}</Flex>
                    <Flex justifyContent={"space-between"} textAlign="center" mt={2}>{desc.length>0?`Description : ${desc}`:""}</Flex>
                    <Flex justifyContent={"space-between"} mt={3}>Min Stock : {minStock}</Flex>
                    <Flex justifyContent={"space-between"} mt={3}>Total Stock : {stock}</Flex>
                    <Flex id="cart" width="80%" height={"100%"} alignItems={"center"} mt={"auto"} justifyContent="space-around">
                        <Flex mb={4} justifyContent={"center"} alignItems="center">
                            {/* <Flex width={"80%"}><Button className='items' width="80%" color={"white"} bgColor={"#47B5FF"} fontSize="0.8rem" height={"1.8rem"}>Add to Cart</Button></Flex> */}
                            <Flex><IconButton aria-label='Search database' variant={"ghost"} colorScheme='cyan' icon={<BsCartPlus />} /></Flex>
                        </Flex>
                        <Flex mb={4} justifyContent={"center"} alignItems="center">
                            <Flex><IconButton aria-label='Search database' variant={"ghost"} colorScheme="cyan" icon={<BsBagCheck />} /></Flex>
                        </Flex>
                        <Flex mb={4} justifyContent={"center"} alignItems="center">
                            <Flex><IconButton aria-label='Search database' variant={"ghost"} colorScheme="cyan" onClick={() => setInfo(true)} icon={<SmallCloseIcon />} /></Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            }

        </Flex>
    )
}
export default Product