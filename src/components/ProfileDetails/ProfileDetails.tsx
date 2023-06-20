import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

interface Props{
    user : any
}

const ProfileDetails: React.FC<Props> = ({user}) => {
    return (
        <>
            <Flex width={"100%"} alignItems={"center"} direction="column">

                <Flex mt="2rem" width={'70%'} ml="2rem" alignItems='center' justifyContent={"center"} fontSize={"1.4rem"} color='grey'>Profile Details</Flex>

                <Flex mt="2rem" width={'70%'} alignItems='flex-start' color='grey'><hr /></Flex>

                <Flex width={"90%"} justifyContent="center" ml="2rem" fontSize={"1.2rem"} mt="2rem">
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                        <Flex>Name</Flex>
                        <Flex width={"35%"} justifyContent="flex-start">{user.user.name || "-No User-"}</Flex>
                    </Flex>
                </Flex>
                <Flex width={"90%"} justifyContent="center" ml="2rem" fontSize={"1.2rem"}>
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                        <Flex>Gender</Flex>
                        <Flex width={"35%"} justifyContent="flex-start">{user.user.gender || "-Not saved-"}</Flex>
                    </Flex>
                </Flex>
                <Flex width={"90%"} justifyContent="center" ml="2rem" fontSize={"1.2rem"}>
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                        <Flex>Email I'd</Flex>
                        <Flex width={"35%"} justifyContent="flex-start">{user.user.email || "-Not saved-"}</Flex>
                    </Flex>
                </Flex>
                <Flex width={"90%"} justifyContent="center" ml="2rem" fontSize={"1.2rem"}>
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                        <Flex>Contact 1</Flex>
                        <Flex width={"35%"} justifyContent="flex-start">{user.user.contact || "-Not saved-"}</Flex>
                    </Flex>
                </Flex>
                <Flex width={"90%"} justifyContent="center" ml="2rem" fontSize={"1.2rem"}>
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                        <Flex>Contact 2</Flex>
                        <Flex width={"35%"} justifyContent="flex-start">{"-Not saved-"}</Flex>
                    </Flex>
                </Flex>
                <Flex width={"90%"} justifyContent="center" ml="2rem" fontSize={"1.2rem"}>
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                        <Flex>DOB</Flex>
                        <Flex width={"35%"} justifyContent="flex-start">{user.user.dob || "-Not saved-"}</Flex>
                    </Flex>
                </Flex>

                <Flex width={"90%"} justifyContent="center" ml="2rem" fontSize={"1.2rem"}>
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                        <Flex>Aadhar</Flex>
                        <Flex width={"35%"} justifyContent="flex-start">{user.user.aadhar || "-Not saved-"}</Flex>
                    </Flex>
                </Flex>

                <Flex mt="2rem" width={'70%'} alignItems='flex-start' color='grey'><hr /></Flex>

                {/* <Flex mt="2rem" width={"80%"} justifyContent="center">
                <Button colorScheme='orange' width={"60%"}>Orange</Button>
                </Flex> */}
                <Flex width={"90%"} justifyContent="center" mt="2rem" ml="2rem" fontSize={"1.2rem"} mb={"2rem"}>
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                    <Button colorScheme='orange' width={"100%"}>Edit Details</Button>
                    </Flex>
                </Flex>

            </Flex>
        </>
    )
}

export default ProfileDetails