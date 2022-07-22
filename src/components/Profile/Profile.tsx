import { Flex } from '@chakra-ui/react'
import React from 'react'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import ProfileGreet from '../ProfileGreet/ProfileGreet'
import ProfileNav from '../ProfileNav/ProfileNav'

const Profile:React.FC = () => {
  return (
    <>
    <Flex height={"auto"} justifyContent="center" mt="2rem" mb={"2rem"}>
        {/* Greet and Nav Flex  */}
        <Flex width={"25%"} direction={"column"}>
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
        <Flex width={"60%"} ml="3rem" height={"auto"} className="total">
            <ProfileDetails/>
        </Flex>
    </Flex>
    </>
  )
}

export default Profile