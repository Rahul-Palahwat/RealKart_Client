import { Flex } from '@chakra-ui/react'
import React from 'react'
import ItemContent from '../ItemContent/ItemContent'
import ItemDetailsFooter from '../ItemDetailsFooter/ItemDetailsFooter'
import ItemImage from '../ItemImage/ItemImage'

import './ItemDetails.css'
const ItemDetails:React.FC = () => {
  return (
    <>
    {/* main flex  */}
        <Flex direction={"column"} border={"1px solid red"} height={"88vh"} width={"100%"}>
            {/* item details flex  */}
            <Flex border={"2px solid blue"} width={"100%"} height={"76vh"} alignItems="center" justifyContent={"center"}>
                {/* image component  */}
                <Flex border={"1px solid green"} width={"30%"} height={"50vh"}>
                    <ItemImage/>
                </Flex>
                {/* details component  */}
                <Flex border={"1px solid green"} width={"40%"} height={"50vh"} ml={"2rem"}>
                    <ItemContent/>
                </Flex>
            </Flex>
            {/* bottom flex  */}
            <Flex border={"2px solid yellow"} height={"12vh"} width={"100%"}>
                <ItemDetailsFooter/>
            </Flex>
        </Flex>
    </>
  )
}

export default ItemDetails