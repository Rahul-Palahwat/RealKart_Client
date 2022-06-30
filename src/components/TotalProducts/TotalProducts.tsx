import { Checkbox, Flex, Grid, GridItem, RadioGroup } from '@chakra-ui/react'
import React from 'react'

import './TotalProducts.css'

import data from '../data.json'
import Product from '../Product/Product'

const TotalProducts: React.FC = () => {
    return (
        <Flex width={"100vw"} height={"auto"}>


            <Flex m={2} mt={3} mb={5} className='AllProducts' direction="column" height={"50vh"} borderRadius={8} width={"20vw"}>
                <Flex width={"auto"} height={"7vh"} m={1} p={2} direction="column">
                    <Flex fontSize={"1.2rem"} fontWeight="bold" alignItems={"center"}>Shop by Category</Flex>

                </Flex>
                <hr />
                <Flex height={"auto"} alignItems="center">
                <RadioGroup>
                        <Flex direction={"column"} ml={3} mt={4}>

                            <Checkbox value='1' mb={5} > <p>Electronic Items</p> </Checkbox>
                            <Checkbox value='2' mb={5} > <p>Vehicles</p> </Checkbox>
                            <Checkbox value='3' mb={5} > <p>Home Accessories</p> </Checkbox>
                            <Checkbox value='4' mb={5} > <p>General Fitness</p> </Checkbox>

                        </Flex>
                    </RadioGroup>
                </Flex>
            </Flex>


            <Flex m={2} mt={3} mb={5} className='AllProducts Items' direction="column" borderRadius={8} width={"77.5vw"} height={"auto"}>
                <Flex alignItems={"center"} justifyContent="center" width={"auto"} height={"7vh"} m={1} p={2}>
                    <Flex fontSize={"2xl"} fontWeight="bold" >All Products</Flex>
                </Flex>
                <hr />
                <Flex height={"auto"} wrap="wrap" width={"100%"} direction="column">
                    {/* {data.map(() => (<Flex height={"20vh"} m={2} border="2px solid blue">Hello</Flex>))} */}

                    <Grid templateColumns='repeat(4, 1fr)'>
                        {data.map(newdat =>
                            <GridItem
                                w='95%' h='auto' bg='pink.50'
                                color={"black"} m={2}
                                borderRadius={"5"}
                                key={newdat.itemCode}>
                                <Product title={newdat.title}
                                    image={newdat.imgLink}
                                    price={!newdat.newprice ? newdat.newprice : newdat.newprice}
                                />
                            </GridItem>

                        )}

                    </Grid>




                </Flex>
            </Flex>


        </Flex>
    )
}

export default TotalProducts