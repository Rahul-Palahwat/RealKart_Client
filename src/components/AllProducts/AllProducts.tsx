import { Button, Flex} from '@chakra-ui/react'
import React, { useState } from 'react'

import {MdArrowBackIosNew,MdArrowForwardIos} from 'react-icons/md'

import data from '../data.json'
import Product from '../Product/Product'

import './AllProducts.css'

const AllProducts: React.FC = () => {

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

    const [itemsPerPage , setItemsPerPage] = useState<number>(5);

    const [pageNumber, setPageNumber] = useState<number>(1);
    
    const indexOfLastItem:number = pageNumber* itemsPerPage;

    const indexofFirstItem:number = indexOfLastItem - itemsPerPage;

    const pageData: Data[] = data.slice(indexofFirstItem,indexOfLastItem);

    console.log("Page data",{pageData});



    return (
        <Flex m={2} mt={5} border="1px solid red" className='AllProducts' direction="column" height={"auto"}>
            <Flex alignItems={"center"} justifyContent="space-between" width={"auto"} height={"7vh"} border="1px solid blue" m={1} p={2}>
                <Flex fontSize={"2xl"} fontWeight="bold" >All Products</Flex>
                <Flex pr={2}><Button colorScheme='green'>VIEW ALL</Button></Flex>
            </Flex>
            <hr />

            <Flex height={"auto"} alignItems="center">
                <Flex display={pageNumber>1?"":"none"} fontSize="4xl"><MdArrowBackIosNew onClick={()=> setPageNumber(pageNumber-1)}/></Flex>
                {pageData.map((dat)=>(<Product title={dat.title} image={dat.imgLink} price={dat.newprice}/>))}
                <Flex display={pageNumber+1===(data.length/itemsPerPage)?"none":""} fontSize={"4xl"}><MdArrowForwardIos onClick={()=> setPageNumber(pageNumber+1)}/></Flex>
            </Flex>
        </Flex>
    )
}

export default AllProducts