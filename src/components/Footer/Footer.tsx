import { background, Flex } from '@chakra-ui/react'
import React from 'react'

const Footer:React.FC = () => {
  return (
    <Flex fontSize={"3xl"} height={"20vh"} backgroundColor="black" color={"white"} alignItems="center" justifyContent={"center"}>
        Hello from footer
    </Flex>
  )
}

export default Footer