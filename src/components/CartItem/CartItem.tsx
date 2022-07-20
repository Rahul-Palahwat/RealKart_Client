import { Badge, Flex, IconButton, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './CartItem.css'
// for redux
import { useAppDispatch, useAppSelector } from '../../redux'
import { getSingleProduct } from '../../redux/reducers/items'
import { CloseIcon } from '@chakra-ui/icons'

interface Props {
  id: string,
}

const CartItem: React.FC<Props> = ({ id }) => {


  const [count , setCount] = useState<number>(0);

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
          <Flex mt={"0.5rem"} fontWeight="bold">{item.name}</Flex>
          <Flex color={"gray"} mt="0.5rem">Desc: {item.shortDescription}</Flex>
          <Flex color={"gray"} mt={"0.5rem"}>Manufacturer: {item.company}</Flex>
          <Flex mt={"0.5rem"}>
            <Flex color="#4167B2" fontWeight={"bold"}>&#x20B9;{item.sellingPrice}</Flex>
            <Flex ml={2} textDecoration="line-through" fontSize={"0.8rem"} alignItems="center">&#x20B9;{item.sellingPrice}</Flex>
          </Flex>
          <Flex mt={"0.5rem"}>Qty:<Flex ml={"0.5rem"} alignItems={"center"} justifyContent="center"><Badge cursor={"pointer"} colorScheme='green' onClick={() => (count>0?setCount(count-1):"")}>-</Badge><Badge cursor={"pointer"} colorScheme='green'>{count}</Badge><Badge cursor={"pointer"} colorScheme='green' onClick={() => setCount(count+1)}>+</Badge></Flex></Flex>
          <Flex mt={"0.5rem"}><Flex color={"#388F3D"}>Delivery by: </Flex><Flex fontWeight={"bold"}>27 July 2022</Flex></Flex>
        </Flex>

        <Flex width={"10%"} border="1px solid green" justifyContent={"flex-end"} m={"0.2rem"}><IconButton aria-label='Call Segun' size='lg' icon={<CloseIcon />}/></Flex>
      </Flex>
    </>
  )
}

export default CartItem