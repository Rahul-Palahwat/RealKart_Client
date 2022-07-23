import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Logout from '../Logout/Logout'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import ProfileGreet from '../ProfileGreet/ProfileGreet'
import ProfileNav from '../ProfileNav/ProfileNav'
const Profile:React.FC = () => {
    let user:any = JSON.parse(localStorage.getItem("user") || "") || ""
    useEffect(() => {
        user = JSON.parse(localStorage.getItem("user") || "") || ""
    },[])
    
  return (
    <>
    <Flex height={"auto"} justifyContent="center" mt="2rem" mb={"2rem"}>
        {/* Profile Details flex  */}
        <Flex width={"60%"} height={"auto"} className="total">
            <ProfileDetails user ={user || ""}/>
        </Flex>
        {/* Greet and Nav Flex  */}
        <Flex width={"25%"} direction={"column"} ml="3rem">
            {/* Greet flex  */}
            <Flex>
                <ProfileGreet user ={user || ""}/>
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