import { Flex } from '@chakra-ui/react'
import React from 'react'

const Searchbar:React.FC = () => {
  return (
    <Flex alignItems={"center"} justifyContent="center" height={"100%"} width={"100%"}>
        <Flex>
            <input type="text" />
        </Flex>
        <Flex>
            Cart
        </Flex>
    </Flex>
  )
}

export default Searchbar