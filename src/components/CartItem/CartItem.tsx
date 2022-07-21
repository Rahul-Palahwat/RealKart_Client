import { Badge, Flex, IconButton, Image, Tooltip } from '@chakra-ui/react'
import React from 'react'
import './CartItem.css'
// for redux
import { useAppDispatch, useAppSelector } from '../../redux'
import { removeItemCart } from '../../redux/reducers/items'
import { removeOneItemFromCart, removeAllItemFromCart, addToCart } from '../../redux/reducers/CartItems'
import { CloseIcon, WarningIcon } from '@chakra-ui/icons'
import _ from 'lodash'
interface Props {
    item: any
}
const CartItem: React.FC<Props> = ({ item }) => {
    const dispatch = useAppDispatch()
    const { items } = useAppSelector((state) => state.cartItem);
    // const {dataAllCartProducts} = useAppSelector((state) => state.items);
    const countOfItems = () => {
        let index = _.findIndex(items, function (o) { return o.id === item._id });
        if (index !== -1) {
            return items[index].count;
        }
        return 0;
    }
    const removeAll = (id: string, sellingPrice: number) => {
        dispatch(removeItemCart(id));
        dispatch(removeAllItemFromCart({ id: id, price: sellingPrice }))
        // console.log("dataAllCartProducts",dataAllCartProducts)
    }
    const removeOne = (id: string, price: number) => {
        let index = _.findIndex(items, function (o) { return o.id === id })
        if (items[index].count === 1) {
            dispatch(removeItemCart(id));
        }
        dispatch(removeOneItemFromCart({ id: id, price: price }))
    }
    return (
        <>
            <Flex height="100%" width={"100%"}>
                <Flex width={"20%"} alignItems={"center"} justifyContent="center">
                    <Image borderRadius={"0.5rem"} boxSize='6rem' objectFit='cover' src='https://imgs.search.brave.com/isdKYX7EEeNnP2ixz4e1HKCAMcviT21y9eh_DPmEuTE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/cklleG5HZEZQVDRj/M01IQXpvRmd3SGFF/OCZwaWQ9QXBp' alt='Dan Abramov' />
                </Flex>
                <Flex width={"70%"} direction={"column"}>
                    <Flex mt={"0.5rem"} fontSize={"1.3rem"}>{item.name}</Flex>
                    {/* <Flex color={"gray"} mt="0.5rem">Desc: {item.shortDescription}</Flex> */}
                    {/* <Flex color={"gray"} mt={"0.5rem"}>Manufacturer: {item.company}</Flex> */}
                    <Flex mt={"0.5rem"}>
                        <Flex color="#4167B2" fontWeight={"bold"}>&#x20B9;{item.sellingPrice}</Flex>
                        <Flex ml={2} textDecoration="line-through" fontSize={"0.8rem"} alignItems="center">&#x20B9;{item.sellingPrice}</Flex>

                    </Flex>

                    <Flex mt={"0.5rem"}>
                        <Flex color={"#388F3D"} alignItems="center">Delivery by :</Flex>
                        <Flex ml={1} fontSize="0.8rem" alignItems={"center"}>27 July</Flex>
                        <Flex ml={"1rem"} alignItems="center">Qty:<Flex ml={"0.5rem"} alignItems={"center"} justifyContent="center">
                            <Tooltip label='Remove' hasArrow arrowSize={10}>
                                <Flex ml={"1rem"} cursor={"pointer"} alignItems="center" mb="0.2rem" justifyContent={"center"} color="red" fontSize={"2rem"} onClick={() => removeOne(item._id, item.sellingPrice)} >-</Flex>
                            </Tooltip>
                            <Badge cursor={"pointer"} ml="0.3rem" variant="outline" alignItems={"center"} >{countOfItems()}</Badge>
                            <Tooltip label='Add' hasArrow arrowSize={10}>
                                <Flex cursor={"pointer"} alignItems="center" mb="0.2rem" justifyContent={"center"} color="green" fontSize={"1.5rem"} ml={"0.3rem"} onClick={() => dispatch(addToCart({ id: item._id, price: item.sellingPrice }))} >+</Flex>
                            </Tooltip>
                        </Flex></Flex>
                    </Flex>
                </Flex>
                <Flex width={"10%"} justifyContent={"flex-end"} m={"0.2rem"}>
                    <Tooltip label='Remove Item' hasArrow arrowSize={10}>
                        <IconButton onClick={() => removeAll(item._id, item.sellingPrice)} aria-label='Call Segun' size={"xs"} fontSize={"0.8rem"} icon={<WarningIcon />} />
                    </Tooltip>
                    <Tooltip label='Remove Item' hasArrow arrowSize={10}>
                        <IconButton ml={3} onClick={() => removeAll(item._id, item.sellingPrice)} aria-label='Call Segun' size='xs' fontSize={"0.5rem"} icon={<CloseIcon />} />
                    </Tooltip>
                </Flex>
            </Flex>
        </>
    )
}
export default CartItem