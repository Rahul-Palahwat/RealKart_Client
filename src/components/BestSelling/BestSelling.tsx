import { Flex, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import Product from '../Product/Product'
import { useBreakpointValue } from '@chakra-ui/react'
// for reducer 
import { useAppDispatch, useAppSelector } from '../../redux'
import { getBestSellingItems } from '../../redux/reducers/items'
import './BestSelling.css'
const BestSelling:React.FC = () => {
    const dispatch = useAppDispatch();
    const {getBestSellingProductsStatus , dataBestSellingProducts} = useAppSelector((state) => state.items)
    const [items, setItems] = useState<any>([])
    const itemsInSlider = useBreakpointValue({ base: 2, md: 4, lg: 5, xl: 7 })
    const [itemsPerPage, setItemsPerPage] = useState<number>(7);
    const [pageNumber, setPageNumber] = useState<number>(1);
    useEffect(() => {
        dispatch(getBestSellingItems({ 'store': '6232a2a4cd65fb954ebd83a5', 'limit': itemsPerPage, 'page': pageNumber }));
    }, [pageNumber])
    useEffect(() => {
        if (getBestSellingProductsStatus === "SUCCESS") {
            setItems(dataBestSellingProducts.docs)
        }
    }, [getBestSellingProductsStatus])
    useEffect(() => {
        if (itemsInSlider) {
            setItemsPerPage(itemsInSlider)
        }
    }, [itemsInSlider])
  return (
    <>
        <Flex m={2} mt={2} mb={1} className='AllProducts' direction="column" height={"auto"} borderRadius={8}>
            <Flex alignItems={"center"} justifyContent="space-between" width={"auto"} height={"10vh"} m={1} p={2}>
                <Flex fontSize={"2xl"} fontWeight="bold" ml={4}>
                    Best Selling
                </Flex>
                <Flex pr={5} pt={"2.5rem"}>
                    <a className='viewAll' href='/all'><Flex fontSize={"1.1rem"}>View All</Flex></a>
                </Flex>
            </Flex>
            <Flex height={"auto"} alignItems="center">
                {getBestSellingProductsStatus === "NOT_STARTED" || getBestSellingProductsStatus === "FETCHING" ? <Flex alignItems={"center"} justifyContent={"center"} width={"100vw"} height={"46.7vh"}><Spinner size={"xl"} /></Flex> : <>
                    <Flex width={"0%"} height={"100%"} display={pageNumber > 1 ? "" : "none"} fontSize="4xl">
                        <MdArrowBackIosNew className='pos_left' onClick={() => setPageNumber(pageNumber - 1)} />
                    </Flex>
                    {items.map((dat: any) => (<Product title={dat.name} image={['https://imgs.search.brave.com/isdKYX7EEeNnP2ixz4e1HKCAMcviT21y9eh_DPmEuTE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/cklleG5HZEZQVDRj/M01IQXpvRmd3SGFF/OCZwaWQ9QXBp']} price={dat.sellingPrice} key={dat._id} />))}
                    <Flex width={"0%"} height={"100"} display={pageNumber >= (dataBestSellingProducts.total.length / itemsPerPage) ? "none" : ""} fontSize={"4xl"}>
                        <MdArrowForwardIos className="pos_right" onClick={() => setPageNumber(pageNumber + 1)} />
                    </Flex></>}
            </Flex>
        </Flex>
    </>
  )
}
export default BestSelling