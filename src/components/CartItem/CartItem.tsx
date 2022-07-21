import { Badge, Flex, IconButton, Image, Tooltip } from '@chakra-ui/react'
import React from 'react'
import './CartItem.css'
// for redux
import { useAppDispatch, useAppSelector } from '../../redux'
import { removeItemCart } from '../../redux/reducers/items'
import {removeOneItemFromCart, removeAllItemFromCart , addToCart} from '../../redux/reducers/CartItems'
import { CloseIcon } from '@chakra-ui/icons'
import _ from 'lodash'
interface Props {
    item: any
}
const CartItem: React.FC<Props> = ({item}) => {
    const dispatch = useAppDispatch()
    const {items} = useAppSelector((state) => state.cartItem);
    // const {dataAllCartProducts} = useAppSelector((state) => state.items);
    const countOfItems = () => {
        let index = _.findIndex(items , function(o) { return o.id === item._id});
        if(index !== -1){
            return items[index].count;
        }
        return 0; 
    }
    const removeAll = (id:string,sellingPrice:number) => {
        dispatch(removeItemCart(id));
        dispatch(removeAllItemFromCart({id:id , price:sellingPrice}))
        // console.log("dataAllCartProducts",dataAllCartProducts)
    }
    const removeOne = (id: string, price: number) => {
        let index = _.findIndex(items , function(o) { return o.id === id})
        if(items[index].count === 1){
            dispatch(removeItemCart(id));
        }
        dispatch(removeOneItemFromCart({id: id , price: price}))
    }
    return (
        <>
            <Flex border={"2px solid pink"} height="100%" width={"100%"}>
                <Flex width={"25%"} alignItems={"center"} justifyContent="center">
                    <Image borderRadius={"1.2rem"} boxSize='8rem' objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                </Flex>
                <Flex width={"65%"} direction={"column"}>
                    <Flex mt={"0.5rem"} fontWeight="bold">{item.name}</Flex>
                    {/* <Flex color={"gray"} mt="0.5rem">Desc: {item.shortDescription}</Flex> */}
                    {/* <Flex color={"gray"} mt={"0.5rem"}>Manufacturer: {item.company}</Flex> */}
                    <Flex mt={"0.5rem"}>
                        <Flex color="#4167B2" fontWeight={"bold"}>&#x20B9;{item.sellingPrice}</Flex>
                        <Flex ml={2} textDecoration="line-through" fontSize={"0.8rem"} alignItems="center">&#x20B9;{item.sellingPrice}</Flex>
                    </Flex>
                    <Flex mt={"0.5rem"}>Qty:<Flex ml={"0.5rem"} alignItems={"center"} justifyContent="center">
                    <Tooltip label='Remove' hasArrow arrowSize={10}>
                        <Badge cursor={"pointer"} colorScheme='green' onClick={() => removeOne(item._id , item.sellingPrice)} >-</Badge>
                        </Tooltip>
                        <Badge cursor={"pointer"} colorScheme='green'>{countOfItems()}</Badge>
                        <Tooltip label='Add' hasArrow arrowSize={10}>
                        <Badge cursor={"pointer"} colorScheme='green' onClick={() => dispatch(addToCart({id: item._id , price: item.sellingPrice}))} >+</Badge>
                        </Tooltip>
                        </Flex></Flex>
                    <Flex mt={"0.5rem"} mb={"0.5rem"}><Flex color={"#388F3D"}>Delivery by: </Flex><Flex fontWeight={"bold"}>27 July 2022</Flex></Flex>
                </Flex>
                <Flex width={"10%"} justifyContent={"flex-end"} m={"0.2rem"}>
                <Tooltip label='Remove Item' hasArrow arrowSize={10}>
                    <IconButton onClick={() => removeAll(item._id , item.sellingPrice)} aria-label='Call Segun' size='lg' icon={<CloseIcon />} />
                    </Tooltip>
                    </Flex>
            </Flex>
        </>
    )
}
export default CartItem