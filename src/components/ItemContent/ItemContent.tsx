import { StarIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'
import React from 'react'

const ItemContent:React.FC = () => {
  return (
    <Flex width={"100%"} direction='column'>
        {/* company  */}
        <Flex fontSize="1.2rem" color="gray" fontWeight={"bold"}>coromandel ltd</Flex>
        {/* name  */}
        <Flex fontSize="1.4rem" fontWeight={"bold"}>abda plant vitaliser 4kg</Flex>
        {/* rating and reviews  */}
        <Flex height={"4vh"} mt={"0.4rem"}>
            <Flex alignItems={"center"} justifyContent="center" bgColor={"green"} width="15%" color={"white"} height="4vh" borderRadius={"0.3rem"}>
            <Flex mr={"0.5rem"} fontSize="1.1rem">4.3</Flex>
            <StarIcon/>
            </Flex>
            <Flex color={"gray"} ml="1rem" fontSize="0.9rem" alignItems={"center"}>22,748 Ratings & 1,194 Reviews</Flex>
        </Flex>
        <Flex fontSize="1.1rem" mt={"1rem"}>Weight : 4kg</Flex>
        <Flex fontSize="1.1rem" mt={"0.2rem"}>Unit : PCS/BAG</Flex>
        <Flex fontSize="1.3rem" mt={"1rem"}>Description</Flex>
        <Flex fontSize="1rem" ml="1rem" mt={"1rem"}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a iure quasi magnam facilis totam aperiam voluptatum, saepe labore nesciunt voluptates nemo veniam non error ipsum placeat voluptatibus expedita odit?</Flex>

        
    </Flex>
  )
}

export default ItemContent