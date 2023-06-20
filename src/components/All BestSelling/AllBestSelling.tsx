import { Checkbox, Flex, Grid, GridItem, RadioGroup, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import { useBreakpointValue } from '@chakra-ui/react'
// for reducer 
import { useAppDispatch, useAppSelector } from '../../redux'
import { getTotalItems } from '../../redux/reducers/items'
// Css files 
import './AllBestSelling.css'
import '../../index.css'
const AllBestSelling: React.FC = () => {
    const dispatch = useAppDispatch();
    const { getAllProductsStatus, dataAllProducts } = useAppSelector((state) => state.items);
    const [items, setItems] = useState<any>([])
    const itemsInSlider = useBreakpointValue({ base: 2, md: 4, lg: 5, xl: 7 })
    const [itemsPerPage, setItemsPerPage] = useState<number>(20);
    const [pageNumber, setPageNumber] = useState<number>(1);
    useEffect(() => {
        dispatch(getTotalItems({}));
    }, [pageNumber])
    useEffect(() => {
        if (getAllProductsStatus === "SUCCESS") {
            setItems(dataAllProducts.docs)
            console.log("total",dataAllProducts.total)
            setItemsPerPage(dataAllProducts.total)
        }
    }, [getAllProductsStatus])
    useEffect(() => {
        // console.log("I am in")
        dispatch(getTotalItems({}));
    }, [itemsPerPage])
    console.log(items)
    return (<>
        <Flex width={"100vw"} height={"auto"}>
            <Flex direction={"column"}>
                <Flex m={2} mt={3} mb={2} className='AllProducts' direction="column" height={"38vh"} borderRadius={8} width={"20vw"}>
                    <Flex width={"auto"} height={"7vh"} m={1} p={2} direction="column">
                        <Flex fontSize={"1.2rem"} fontWeight="bold" alignItems={"center"}>Shop by Category</Flex>
                    </Flex>
                    <hr />
                    <Flex height={"auto"} alignItems="center">
                        <RadioGroup>
                            <Flex direction={"column"} ml={3} mt={5}>
                                <Checkbox value='1' mb={5} > <p>Electronic Items</p> </Checkbox>
                                <Checkbox value='2' mb={5} > <p>Vehicles</p> </Checkbox>
                                <Checkbox value='3' mb={5} > <p>Home Accessories</p> </Checkbox>
                                <Checkbox value='4' mb={5} > <p>General Fitness</p> </Checkbox>
                            </Flex>
                        </RadioGroup>
                    </Flex>
                </Flex>
                <Flex m={2} mb={5} className='AllProducts' direction="column" height={"42vh"} borderRadius={8} width={"20vw"}>
                    <Flex width={"auto"} height={"7vh"} m={1} p={2} direction="column">
                        <Flex fontSize={"1.2rem"} fontWeight="bold" alignItems={"center"}>Shop by Percentage Off</Flex>
                    </Flex>
                    <hr />
                    <Flex height={"auto"} alignItems="center">
                        <RadioGroup>
                            <Flex direction={"column"} ml={3} mt={5}>
                                <Checkbox value='1' mb={5} > <p>5% & Above</p> </Checkbox>
                                <Checkbox value='2' mb={5} > <p>10% & Above</p> </Checkbox>
                                <Checkbox value='3' mb={5} > <p>25% & Above</p> </Checkbox>
                                <Checkbox value='4' mb={5} > <p>40% & Above</p> </Checkbox>
                                <Checkbox value='4' mb={5} > <p>60% & Above</p> </Checkbox>
                            </Flex>
                        </RadioGroup>
                    </Flex>
                </Flex>
            </Flex>
            <Flex m={2} mt={3} mb={5} className='AllProducts Items' direction="column" borderRadius={8} width={"77.5vw"} height={"auto"}>
                <Flex alignItems={"center"} justifyContent="center" width={"auto"} height={"7vh"} m={1} p={2}>
                    <Flex fontSize={"2xl"} fontWeight="bold" >All BestSelling Products</Flex>
                </Flex>
                <hr />
                {getAllProductsStatus === "FETCHING" ||  getAllProductsStatus === "NOT_STARTED" 
                ?<Flex alignItems={"center"} justifyContent={"center"} width={"100vw"} height={"46.7vh"}><Spinner size={"xl"} /></Flex>
                :<Flex height={"auto"} wrap="wrap" width={"100%"} direction="column">
                    <Grid templateColumns='repeat(4, 1fr)'>
                        {items.map((dat: any) =>
                            <GridItem
                                w='95%' h='auto' bg='pink.50'
                                color={"black"} m={2}
                                borderRadius={"2rem"}
                                key={dat._id}>
                                <Product id={dat._id} desc = {dat.shortDescription || ""} minStock={dat.minStock || ""} stock = {dat.stock || ""} title={dat.name || ""} company={dat.company || ""} image={['https://imgs.search.brave.com/isdKYX7EEeNnP2ixz4e1HKCAMcviT21y9eh_DPmEuTE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/cklleG5HZEZQVDRj/M01IQXpvRmd3SGFF/OCZwaWQ9QXBp']} price={dat.sellingPrice || ""} key={dat._id} />
                            </GridItem>
                        )}
                    </Grid>
                </Flex>
                }
            </Flex>
        </Flex>
    </>)
}
export default AllBestSelling