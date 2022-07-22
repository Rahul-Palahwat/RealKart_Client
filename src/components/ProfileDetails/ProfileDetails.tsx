import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

const ProfileDetails: React.FC = () => {
    return (
        <>
            <Flex width={"100%"} alignItems={"center"} direction="column">

                <Flex mt="2rem" width={'70%'} ml="2rem" alignItems='center' justifyContent={"center"} fontSize={"1.4rem"} color='grey'>Profile Details</Flex>

                <Flex mt="2rem" width={'70%'} alignItems='flex-start' color='grey'><hr /></Flex>

                <Flex width={"90%"} justifyContent="center" ml="2rem" fontSize={"1.2rem"} mt="2rem">
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                        <Flex>Name</Flex>
                        <Flex width={"35%"} justifyContent="flex-start">Rahul Kumar</Flex>
                    </Flex>
                </Flex>
                <Flex width={"90%"} justifyContent="center" ml="2rem" fontSize={"1.2rem"}>
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                        <Flex>Gender</Flex>
                        <Flex width={"35%"} justifyContent="flex-start">Male</Flex>
                    </Flex>
                </Flex>
                <Flex width={"90%"} justifyContent="center" ml="2rem" fontSize={"1.2rem"}>
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                        <Flex>Email I'd</Flex>
                        <Flex width={"35%"} justifyContent="flex-start">rahul@gmail.com</Flex>
                    </Flex>
                </Flex>
                <Flex width={"90%"} justifyContent="center" ml="2rem" fontSize={"1.2rem"}>
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                        <Flex>Contact 1</Flex>
                        <Flex width={"35%"} justifyContent="flex-start">8877665544</Flex>
                    </Flex>
                </Flex>
                <Flex width={"90%"} justifyContent="center" ml="2rem" fontSize={"1.2rem"}>
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                        <Flex>Contact 2</Flex>
                        <Flex width={"35%"} justifyContent="flex-start">8877660044</Flex>
                    </Flex>
                </Flex>
                <Flex width={"90%"} justifyContent="center" ml="2rem" fontSize={"1.2rem"}>
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                        <Flex>DOB</Flex>
                        <Flex width={"35%"} justifyContent="flex-start">16th-Oct-2002</Flex>
                    </Flex>
                </Flex>

                <Flex width={"90%"} justifyContent="center" ml="2rem" fontSize={"1.2rem"}>
                    <Flex width={"50%"} justifyContent="space-between" mt="0.8rem">
                        <Flex>Aadhar</Flex>
                        <Flex width={"35%"} justifyContent="flex-start">8877665544</Flex>
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