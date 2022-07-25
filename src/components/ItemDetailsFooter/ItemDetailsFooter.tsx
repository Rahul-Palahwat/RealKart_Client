import { Badge, Button, Flex, Image, Tooltip } from '@chakra-ui/react'
import React from 'react'

const ItemDetailsFooter: React.FC = () => {
    return (
        <>
            <Flex width={"100%"} alignItems={"center"} justifyContent={"space-between"} height={"12vh"}>
                {/* description flex  */}
                <Flex width="25%" ml="2rem" height={"100%"} direction="column" justifyContent={"center"}>
                    <Flex mb={"0.5rem"} fontSize="1.2rem" fontWeight={"bold"}>abda plant vitaliser 4kg</Flex>
                    <Flex color={"gray"} fontSize="1.1rem">Description : this is a short description</Flex>
                </Flex>

                {/* Price flex  */}
                <Flex width={"16%"} height={"100%"} alignItems={"center"} justifyContent={"center"} >
                    <Flex color="#4167B2" fontSize={"1.2rem"} fontWeight={"bold"}>&#x20B9;4000</Flex>
                    <Flex ml={2} textDecoration="line-through" fontSize={"1rem"} alignItems="center">&#x20B9;4000</Flex>
                </Flex>

                {/* no of items  */}
                <Flex width={"30%"} height={"100%"} fontSize={"1.2rem"} alignItems="center" justifyContent={"center"} fontWeight="bold">Qty :<Flex ml={"0.5rem"} alignItems={"center"} justifyContent="center">
                            <Tooltip label='Remove' hasArrow arrowSize={10}>
                                <Flex cursor={"pointer"} fontWeight="bold" fontSize={"2rem"} alignItems="center" justifyContent={"center"} color="red" mr={"0.2rem"} >-</Flex>
                            </Tooltip>
                            <Badge cursor={"pointer"} ml="0.3rem" variant="outline" alignItems={"center"} fontSize="1rem" p={"0.3rem"} >01</Badge>
                            <Tooltip label='Add' hasArrow arrowSize={10}>
                                <Flex cursor={"pointer"} alignItems="center" fontSize={"2rem"} justifyContent={"center"} color="green" ml={"0.5rem"} >+</Flex>
                            </Tooltip>
                        </Flex></Flex>

                
                {/* Add to cart button  */}
                <Flex width="15%" height={"100%"} alignItems="center" justifyContent={"center"}>
                <Button width={"80%"} colorScheme='cyan' color={"white"} fontSize={"1.2rem"}>Add To Cart</Button>
                </Flex>

                {/* Buy now button  */}
                <Flex width="15%" height={"100%"} alignItems="center" justifyContent={"center"}>
                <Button width={"80%"} colorScheme='teal' fontSize={"1.2rem"}>Buy Now</Button>
                </Flex>
            </Flex>
        </>
    )
}

export default ItemDetailsFooter