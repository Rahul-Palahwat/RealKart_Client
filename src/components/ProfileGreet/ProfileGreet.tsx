import { Flex , Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import maleDark80 from '../../assets/maleDark80.png'
import maleLight80 from '../../assets/maleLight80.png'

interface Props{
  user : any
}

const ProfileGreet:React.FC<Props> = ({user}) => {
  useEffect(() => {
    console.log('Hello useeffect')
  } ,[])
  return (
    <>
        <Flex height={"12vh"} width={"100%"} className="total">

            <Flex width={"20%"} alignItems={'center'} justifyContent="center" borderRadius={"2.5rem"} bgColor="yellow.300">
            <Image borderRadius='full' boxSize='3rem' src={maleLight80} alt='Dan Abramov'/>
            </Flex>

            <Flex direction={"column"} justifyContent="center" ml="0.5rem">
                <Flex fontSize={"1.2rem"}>Hello,</Flex>
                <Flex fontSize={"1.2rem"} fontWeight={"bold"}>{user.user.name || "-No User-"}</Flex>
            </Flex>
        </Flex>
    </>
  )
}

export default ProfileGreet