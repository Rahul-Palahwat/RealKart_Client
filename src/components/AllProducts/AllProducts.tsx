import { Flex} from '@chakra-ui/react'
import React, { useState } from 'react'

import {MdArrowBackIosNew,MdArrowForwardIos} from 'react-icons/md'

import data from '../data.json'
import Product from '../Product/Product'

import './AllProducts.css'

const AllProducts: React.FC = () => {

    const dataItems:number[] = [1,2,3];

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

    const [itemsPerPage , setItemsPerPage] = useState<number>(4);
    console.log(setItemsPerPage);

    const [pageNumber, setPageNumber] = useState<number>(1);
    
    const indexOfLastItem:number = pageNumber* itemsPerPage;

    const indexofFirstItem:number = indexOfLastItem - itemsPerPage;

    const pageData: Data[] = data.slice(indexofFirstItem,indexOfLastItem);

    console.log("Page data",{pageData});



    return (
        <>
        {dataItems.map((item) => (
            <Flex m={2} mt={3} mb={5} className='AllProducts' direction="column" height={"auto"} borderRadius={8}>
            <Flex alignItems={"center"} justifyContent="space-between" width={"auto"} height={"7vh"} m={1} p={2}>
                <Flex fontSize={"2xl"} fontWeight="bold" >{item===1?"All Products":item===2?"Best Selling":"Most Wishlisted"}</Flex>
                <Flex pr={2}><a className='viewAll' href='/all'>VIEW ALL</a></Flex>
            </Flex>
            <hr />

            <Flex height={"auto"} alignItems="center">
                <Flex height={"100%"} className='left-right' display={pageNumber>1?"":"none"} fontSize="4xl"><MdArrowBackIosNew onClick={()=> setPageNumber(pageNumber-1)}/></Flex>
                {pageData.map((dat)=>(<Product title={dat.title} image={dat.imgLink} price={dat.newprice}/>))}
                <Flex height={"auto"} className='left-right' display={pageNumber+1===(data.length/itemsPerPage)?"none":""} fontSize={"4xl"}>
                    <MdArrowForwardIos onClick={()=> setPageNumber(pageNumber+1)}/>
                </Flex>
            </Flex>
        </Flex>
        ))}
        </>
        
    )
}

export default AllProducts