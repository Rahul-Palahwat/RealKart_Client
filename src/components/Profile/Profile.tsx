import { Flex } from '@chakra-ui/react'
import React from 'react'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import ProfileGreet from '../ProfileGreet/ProfileGreet'
import ProfileNav from '../ProfileNav/ProfileNav'

const Profile:React.FC = () => {
  return (
    <>
    <Flex border={"2px solid red"} height={"100vh"} justifyContent="center" mt="2rem">
        {/* Greet and Nav Flex  */}
        <Flex width={"25%"} border="1px solid blue" direction={"column"}>
            {/* Greet flex  */}
            <Flex>
                <ProfileGreet/>
            </Flex>
            {/* Nav Flex  */}
            <Flex>
                <ProfileNav/>
            </Flex>
        </Flex>

        {/* Profile Details flex  */}
        <Flex width={"60%"} border="1px solid green" ml="3rem">
            <ProfileDetails/>
        </Flex>
    </Flex>
    </>
  )
}

export default Profile