import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

import dataTemp from '../data.json'

import Product from '../Product/Product'

import './AllProducts.css'

// for reducer 
import { useAppDispatch , useAppSelector } from '../../redux'
import { getItems } from '../../redux/reducers/FetchItems'



const AllProducts: React.FC = () => {

    const dispatch = useAppDispatch();

    const {loading , data , error} = useAppSelector((state) => state.get);


    const dataItems: number[] = [1, 2, 3];

    useEffect(() => {
        dispatch(getItems({'store':'6232a2a4cd65fb954ebd83a5'}));
    },[])

    console.log("DATA", data.docs);


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

    const [itemsPerPage, setItemsPerPage] = useState<number>(7);
    console.log(setItemsPerPage);

    const [pageNumber, setPageNumber] = useState<number>(1);

    const indexOfLastItem: number = pageNumber * itemsPerPage;

    const indexofFirstItem: number = indexOfLastItem - itemsPerPage;

    const pageData: Data[] = dataTemp.slice(indexofFirstItem, indexOfLastItem);

    // console.log("Page data", { pageData });

    



    return (
        <>
            {dataItems.map((item) => (
                <Flex m={2} mt={5} mb={5} className='AllProducts' direction="column" height={"auto"} borderRadius={8}>
                    <Flex alignItems={"center"} justifyContent="space-between" width={"auto"} height={"7vh"} m={1} p={2}>
                        <Flex fontSize={"2xl"} fontWeight="bold" ml={4}>{item === 1 ? "All Products" : item === 2 ? "Best Selling" : "Most Wishlisted"}</Flex>
                        <Flex pr={5}><a className='viewAll' href='/all'>VIEW ALL</a></Flex>
                    </Flex>

                    <Flex height={"auto"} alignItems="center">
                        <Flex width={"0%"} height={"100%"} className='left-right' display={pageNumber > 1 ? "" : "none"} fontSize="4xl">
                            <MdArrowBackIosNew className='pos_left' onClick={() => setPageNumber(pageNumber - 1)} />
                        </Flex>
                        {pageData.map((dat) => (<Product title={dat.title} image={dat.imgLink} price={dat.newprice} key={dat.itemCode}/>))}
                        <Flex width={"0%"} height={"100"} className='left-right' display={pageNumber >= (dataTemp.length / itemsPerPage) ? "none" : ""} fontSize={"4xl"}>
                            <MdArrowForwardIos className="pos_right"  onClick={() => setPageNumber(pageNumber + 1)}/>
                        </Flex>
                    </Flex>
                </Flex>
            ))}
        </>

    )
}

export default AllProducts