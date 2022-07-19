import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './CartItem.css'
// for redux
import {useAppDispatch , useAppSelector} from '../../redux'
import { getSingleProduct } from '../../redux/reducers/items'

interface Props{
  id: string,
}

const CartItem:React.FC<Props> = ({id}) => {
  const {getSingleProductStatus , dataSingleProduct} = useAppSelector((state) => state.items)
  const dispatch = useAppDispatch()
  const [item , setItem] = useState<any>([])

  useEffect(() => {
    dispatch(getSingleProduct({ 'store': '6232a2a4cd65fb954ebd83a5', 'id': id}))
  },[])
  useEffect(() => {
    if (getSingleProductStatus === "SUCCESS") {
      setItem(dataSingleProduct)
    }
}, [getSingleProductStatus])

  return (
    <>
    <Flex border={"2px solid pink"} height="100%" width={"100%"}>{item.name}</Flex>
    </>
  )
}

export default CartItem