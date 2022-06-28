import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

import './AllProducts.css'

const AllProducts:React.FC = () => {
  return (
    <Flex m={2} mt={5} border="1px solid red" className='AllProducts' direction="column">

       <Flex alignItems={"center"} justifyContent="space-between" width={"auto"} height={"7vh"} border="1px solid blue" m={1} p={2}>
            <Flex fontSize={"2xl"} fontWeight="bold" >All Products</Flex>
            <Flex pr={2}><Button colorScheme='green'>VIEW ALL</Button></Flex>
       </Flex>
       <hr />


       <Flex>Hello</Flex>

    </Flex>
  )
}

export default AllProducts