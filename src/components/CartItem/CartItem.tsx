import { Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './CartItem.css'
// for redux
import { useAppDispatch, useAppSelector } from '../../redux'
import { getSingleProduct } from '../../redux/reducers/items'

interface Props {
  id: string,
}

const CartItem: React.FC<Props> = ({ id }) => {
  const { getSingleProductStatus, dataSingleProduct } = useAppSelector((state) => state.items)
  const dispatch = useAppDispatch()
  const [item, setItem] = useState<any>([])

  useEffect(() => {
    dispatch(getSingleProduct({ 'store': '6232a2a4cd65fb954ebd83a5', 'id': id }))
  }, [])
  useEffect(() => {
    if (getSingleProductStatus === "SUCCESS") {
      setItem(dataSingleProduct)
    }
  }, [getSingleProductStatus])

  return (
    <>
      <Flex border={"2px solid pink"} height="100%" width={"100%"}>

        <Flex width={"25%"} border='1px solid green' alignItems={"center"} justifyContent="center">
          <Image borderRadius={"1.2rem"} boxSize='11rem' objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Flex>

        <Flex width={"65%"} border="1px solid red" direction={"column"}>
          <Flex>{item.name}</Flex>
          <Flex>Desc: {item.shortDescription}</Flex>
          <Flex>Manufacturer: {item.company}</Flex>
          <Flex>
            <Flex color="#4167B2" fontWeight={"bold"}>&#x20B9;{item.sellingPrice}</Flex>
            <Flex ml={2} textDecoration="line-through" fontSize={"0.8rem"} alignItems="center">&#x20B9;{item.sellingPrice}</Flex>
          </Flex>
          <Flex>Delivery by: <Flex fontWeight={"bold"}>27 July 2022</Flex></Flex>
        </Flex>

        <Flex width={"10%"} border="1px solid green">Remove Icon</Flex>
      </Flex>
    </>
  )
}

export default CartItem