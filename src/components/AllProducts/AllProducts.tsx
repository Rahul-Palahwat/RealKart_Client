import { Flex, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

import Product from '../Product/Product'
import './AllProducts.css'
import { useBreakpointValue } from '@chakra-ui/react'


// for reducer 
import { useAppDispatch , useAppSelector } from '../../redux'
import { getItems } from '../../redux/reducers/items'
// import _ from 'lodash'


interface Data {
    itemCode: number
    category?: string
    imgLink: string[]
    title: string
    location?: string
    owner?: string
    used?: string
    newprice: number
    description?: any
}



const AllProducts: React.FC = () => {
    const dispatch = useAppDispatch();
    const {loading , data , error} = useAppSelector((state) => state.items);
    console.log(error);
    const [items , setItems] = useState<any>([])
    const dataItems: number[] = [1, 2, 3];
    const itemsInSlider = useBreakpointValue({base:2, md:4, lg:5, xl:7 })
    const [itemsPerPage, setItemsPerPage] = useState<number>(7);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const indexOfLastItem: number = pageNumber * itemsPerPage;
    const indexofFirstItem: number = indexOfLastItem - itemsPerPage;

    useEffect(() => {
        dispatch(getItems({'store':'6232a2a4cd65fb954ebd83a5','limit':itemsPerPage, 'page': pageNumber}));
    },[pageNumber])

    useEffect(() => {
      if(loading === false) {
        setItems(data.docs)
      }
    }, [loading])
    useEffect(() => {
      if(itemsInSlider) {
        setItemsPerPage(itemsInSlider)
      }
    }, [])
    
    return (<>
        {loading ? 
            <Flex height={"80vh"}><Spinner /></Flex>
        : dataItems.map((item) => (  
                <Flex key={item} m={2} mt={5} mb={5} className='AllProducts' direction="column" height={"auto"} borderRadius={8}>
                    <Flex alignItems={"center"} justifyContent="space-between" width={"auto"} height={"7vh"} m={1} p={2}>
                        <Flex fontSize={"2xl"} fontWeight="bold" ml={4}>
                            {item === 1 ? "All Products" : item === 2 ? "Best Selling" : "Most Wishlisted"}
                        </Flex>
                        <Flex pr={5}>
                            <a className='viewAll' href='/all'>VIEW ALL</a>
                        </Flex>
                    </Flex>
                    <Flex height={"auto"} alignItems="center">
                        <Flex width={"0%"} height={"100%"} className='left-right' display={pageNumber > 1 ? "" : "none"}fontSize="4xl">
                            <MdArrowBackIosNew className='pos_left' onClick={() => setPageNumber(pageNumber - 1)} />
                        </Flex>
                        {items.map((dat:any) => (<Product title={dat.name} image={['https://imgs.search.brave.com/isdKYX7EEeNnP2ixz4e1HKCAMcviT21y9eh_DPmEuTE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/cklleG5HZEZQVDRj/M01IQXpvRmd3SGFF/OCZwaWQ9QXBp']} price={dat.sellingPrice} key={dat._id}/>))}
                        <Flex width={"0%"} height={"100"} className='left-right' display={pageNumber >= (data.total.length / itemsPerPage) ? "none" : ""} fontSize={"4xl"}>
                            <MdArrowForwardIos className="pos_right"  onClick={() => setPageNumber(pageNumber + 1)}/>
                        </Flex>
                    </Flex>
                </Flex>
        ))}
    </>)
}

export default AllProducts