import { Flex } from '@chakra-ui/react'
import React from 'react'

// import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

import './Footer.css'

const Footer: React.FC = () => {
	return (
		<Flex height={"auto"} className="Footer" alignItems="center" justifyContent={"center"} direction="column">
			<Flex height={"12vh"} width={'100%'} justifyContent="center" alignItems={"center"}>
				<Flex justifyContent="space-around" width={"100%"}>

					<Flex width={"12%"}></Flex>

					<Flex justifyContent={"center"} width={"10%"} borderRadius={"0 0 6rem 6rem"}><Flex justifyContent={"center"} height={"100%"} width={"100%"}> <a href="\">Home</a> </Flex></Flex>
					{/* <Flex justifyContent={"center"} width={"10%"} borderRadius={"0 0 6rem 6rem"}><Flex justifyContent={"center"} fontSize="1.3rem" borderRadius={"0 0 6rem 6rem"} height={"100%"} width={"100%"} bgColor={"white"}> <a href="\">Home</a> </Flex></Flex> */}

					<Flex width={"12%"}></Flex>

					<Flex justifyContent={"center"} width={"10%"}><Flex><a href="\about">About Us</a></Flex></Flex>

					<Flex width={"12%"}></Flex>

					<Flex justifyContent={"center"} width={"10%"}><Flex><a href="\location">Location</a></Flex></Flex>

					<Flex width={"12%"}></Flex>

					<Flex justifyContent={"center"} width={"10%"}><Flex><a href="\contact">Contact Us</a></Flex></Flex>

					<Flex width={"12%"}></Flex>

				</Flex>
			</Flex>
			{/* <Flex height={"5vh"} width={"100%"} justifyContent="space-around" alignItems={"center"}>
				<Flex fontSize={"2xl"}><FaLinkedin /></Flex>
				<Flex fontSize={"2xl"}><FaGithub /></Flex>
				<Flex>All Rights Reserved &copy;Pensive2022</Flex>
				<Flex fontSize={"2xl"}><FaInstagram /></Flex>
				<Flex fontSize={"2xl"}><FaFacebook /></Flex>
			</Flex> */}
		</Flex>
	)
}

export default Footer