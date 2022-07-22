import { Flex } from '@chakra-ui/react'
import React from 'react'
import Logout from '../Logout/Logout'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import ProfileGreet from '../ProfileGreet/ProfileGreet'
import ProfileNav from '../ProfileNav/ProfileNav'
const Profile:React.FC = () => {
  return (
    <>
    <Flex height={"auto"} justifyContent="center" mt="2rem" mb={"2rem"}>
        {/* Profile Details flex  */}
        <Flex width={"60%"} height={"auto"} className="total">
            <ProfileDetails/>
        </Flex>
        {/* Greet and Nav Flex  */}
        <Flex width={"25%"} direction={"column"} ml="3rem">
            {/* Greet flex  */}
            <Flex>
                <ProfileGreet/>
            </Flex>
            {/* Nav Flex  */}
            <Flex>
                <ProfileNav/>
            </Flex>
            {/* logout flex  */}
            <Flex>
                <Logout/>
            </Flex>
        </Flex>
    </Flex>
    </>
  )
}
export default Profile