import { Checkbox, Flex, Grid, GridItem, RadioGroup, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import { useBreakpointValue } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../redux'
import { getTotalItems } from '../../redux/reducers/items'
import './TotalProducts.css'
import '../../index.css'
import _ from 'lodash'
import { filterData } from './data'

const TotalProducts: React.FC = () => {
    const dispatch = useAppDispatch();
    const { getAllProductsStatus, dataAllProducts } = useAppSelector((state) => state.items);
    const [items, setItems] = useState<any>([])
    const itemsInSlider = useBreakpointValue({ base: 2, md: 4, lg: 5, xl: 7 })
    const [itemsPerPage, setItemsPerPage] = useState<number>(40);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const productImageLink = 'https://imgs.search.brave.com/isdKYX7EEeNnP2ixz4e1HKCAMcviT21y9eh_DPmEuTE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/cklleG5HZEZQVDRj/M01IQXpvRmd3SGFF/OCZwaWQ9QXBp'
    
    useEffect(() => {
        dispatch(getTotalItems({  }));
        // dispatch(getTotalItems({ 'store': '6232a2a4cd65fb954ebd83a5', 'limit': itemsPerPage, 'page': pageNumber }));
    }, [])
    useEffect(() => {
        if (getAllProductsStatus === "SUCCESS") {
            setItems(dataAllProducts.docs)
            // setItemsPerPage(dataAllProducts.total)
        }
    }, [getAllProductsStatus])
    // useEffect(() => {
    //     dispatch(getTotalItems({ 'store': '6232a2a4cd65fb954ebd83a5', 'limit': itemsPerPage, 'page': pageNumber }));
    // }, [itemsPerPage])
    
    return (<>
        <Flex width={"100vw"} height={"auto"}>
            <Flex direction={"column"}>
                {_.map(filterData, (arr, head) => {
                    return <Flex key={head} m={2} mt={3} mb={2} className='AllProducts' direction="column" height={"38vh"} borderRadius={8} width={"20vw"}>
                        <Flex fontSize={"1.2rem"} fontWeight="bold" width={"auto"} height={"7vh"} m={1} p={2}>
                            {head}
                        </Flex>
                        <hr />
                        <RadioGroup style={{display:'flex', flexDirection:'column'}} ml={3} mt={5}>
                            {_.map(arr, (obj, key) => {
                                return <Checkbox key={key} value={obj.value} mb={5}><p>{obj.text}</p></Checkbox>
                            })}
                        </RadioGroup>
                    </Flex>
                })}
            </Flex>
            <Flex m={2} mt={3} mb={5} className='AllProducts' direction="column" borderRadius={8} width={"77.5vw"} height={"auto"}>
                <Flex fontSize={"2xl"} fontWeight="bold" alignItems={"center"} justifyContent="center" width={"auto"} height={"7vh"} m={1} p={2}>
                    All Products
                </Flex>
                <hr />
                { getAllProductsStatus === "FETCHING" ?
                    <Flex alignItems={"center"} justifyContent={"center"} width={"100vw"} height={"46.7vh"}>
                        <Spinner size={"xl"} />
                    </Flex>
                :  getAllProductsStatus === "SUCCESS" ?   <Flex height={"auto"} wrap="wrap" width={"100%"} direction="column">
                        <Grid templateColumns='repeat(4, 1fr)'>
                            {items.map((dat: any) =>
                                <GridItem
                                    w='95%' h='auto' bg='pink.50'
                                    color={"black"} m={2}
                                    borderRadius={"2rem"}
                                    key={dat._id}
                                >
                                    <Product 
                                        id={dat._id}  
                                        desc = {dat.shortDescription || ""} 
                                        minStock={dat.minStock || ""} 
                                        stock = {dat.stock || ""} 
                                        title={dat.name || ""} 
                                        company={dat.company || ""} 
                                        image={[productImageLink]} 
                                        price={dat.sellingPrice || ""} 
                                        key={dat._id} 
                                    />
                                </GridItem>
                            )}
                        </Grid>
                    </Flex>
                : null}
            </Flex>
        </Flex>
    </>)
}
export default TotalProducts