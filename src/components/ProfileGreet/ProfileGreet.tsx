import { Flex , Image } from '@chakra-ui/react'
import React from 'react'

import maleDark80 from '../../assets/maleDark80.png'
import maleLight80 from '../../assets/maleLight80.png'

const ProfileGreet:React.FC = () => {
  return (
    <>
        <Flex height={"12vh"} width={"100%"} className="total">

            <Flex width={"20%"} alignItems={'center'} justifyContent="center" borderRadius={"2.5rem"} bgColor="yellow.300">
            <Image borderRadius='full' boxSize='3rem' src={maleLight80} alt='Dan Abramov'/>
            </Flex>

            <Flex direction={"column"} justifyContent="center" ml="0.5rem">
                <Flex fontSize={"1.2rem"}>Hello,</Flex>
                <Flex fontSize={"1.2rem"} fontWeight={"bold"}>Rahul Kumar</Flex>
            </Flex>
        </Flex>
    </>
  )
}

export default ProfileGreet