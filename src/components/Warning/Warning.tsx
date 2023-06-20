import { WarningIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'
import React from 'react'

const Warning:React.FC = () => {
  return (
    <>
        <Flex alignItems={"center"} justifyContent="center" m="2rem">
        <WarningIcon w={10} h={10} color="red.500"/>
        <Flex fontSize={"1.2rem"} ml="1.5rem" color="grey">Login First to Checkout Cart</Flex>
        </Flex>
    </>
  )
}

export default Warning