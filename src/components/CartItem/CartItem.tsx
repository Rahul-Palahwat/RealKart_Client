import { Badge, Flex, IconButton, Image, Tooltip } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './CartItem.css'
// for redux
import { useAppDispatch, useAppSelector } from '../../redux'
import { getSingleProduct } from '../../redux/reducers/items'
import { CloseIcon } from '@chakra-ui/icons'

interface Props {
    item: any
}

const CartItem: React.FC<Props> = ({item}) => {

    // const {id , count} = props.item;
    // console.log(props. )


    // const [count, setCount] = useState<number>(0);

    const { getSingleProductStatus, dataSingleProduct } = useAppSelector((state) => state.items)
    const dispatch = useAppDispatch()
    const [itemData, setItemData] = useState<any>(item)

    useEffect(() => {
        dispatch(getSingleProduct({ 'store': '6232a2a4cd65fb954ebd83a5', 'id': item.id }))
    }, [item])
    useEffect(() => {
        if (getSingleProductStatus === "SUCCESS") {
            console.log({dataSingleProduct})
            setItemData(dataSingleProduct)
        }
    }, [getSingleProductStatus])

    return (
        <>
            <Flex border={"2px solid pink"} height="100%" width={"100%"}>

                <Flex width={"25%"} border='1px solid green' alignItems={"center"} justifyContent="center">
                    <Image borderRadius={"1.2rem"} boxSize='11rem' objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                </Flex>

                <Flex width={"65%"} border="1px solid red" direction={"column"}>
                    <Flex mt={"0.5rem"} fontWeight="bold">{itemData.name}</Flex>
                    <Flex color={"gray"} mt="0.5rem">Desc: {itemData.shortDescription}</Flex>
                    <Flex color={"gray"} mt={"0.5rem"}>Manufacturer: {itemData.company}</Flex>
                    <Flex mt={"0.5rem"}>
                        <Flex color="#4167B2" fontWeight={"bold"}>&#x20B9;{itemData.sellingPrice}</Flex>
                        <Flex ml={2} textDecoration="line-through" fontSize={"0.8rem"} alignItems="center">&#x20B9;{itemData.sellingPrice}</Flex>
                    </Flex>
                    <Flex mt={"0.5rem"}>Qty:<Flex ml={"0.5rem"} alignItems={"center"} justifyContent="center">
                    <Tooltip label='Remove' hasArrow arrowSize={10}>
                        <Badge cursor={"pointer"} colorScheme='green' >-</Badge>
                        </Tooltip>
                        <Badge cursor={"pointer"} colorScheme='green'>{item.count}</Badge>
                        <Tooltip label='Add' hasArrow arrowSize={10}>
                        <Badge cursor={"pointer"} colorScheme='green' >+</Badge>
                        </Tooltip>
                        </Flex></Flex>
                    <Flex mt={"0.5rem"}><Flex color={"#388F3D"}>Delivery by: </Flex><Flex fontWeight={"bold"}>27 July 2022</Flex></Flex>
                </Flex>

                <Flex width={"10%"} border="1px solid green" justifyContent={"flex-end"} m={"0.2rem"}>
                <Tooltip label='Remove Item' hasArrow arrowSize={10}>
                    <IconButton aria-label='Call Segun' size='lg' icon={<CloseIcon />} />
                    </Tooltip>
                    </Flex>
            </Flex>
        </>
    )
}

export default CartItem