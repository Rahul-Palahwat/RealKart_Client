import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

import logOut from '../../assets/logOut.png'

const Logout: React.FC = () => {
    return (
        <>
            <Flex height={"10vh"} width={"100%"} className="total" mt={"1rem"} cursor="pointer">
                <Flex alignItems={'center'} justifyContent='center' width={"20%"}>
                    <Image boxSize='1.3rem' src={logOut} alt='Account Setting' />
                </Flex>
                <Flex alignItems={"flex-start"} width="85%" justifyContent={"center"} direction="column">
                    <Flex fontSize={"1.3rem"} color="gray" fontWeight={"bold"}>Logout</Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Logout