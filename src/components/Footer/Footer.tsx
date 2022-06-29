import { Flex } from '@chakra-ui/react'
import React from 'react'

import {FaInstagram,FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'

import './Footer.css'

const Footer:React.FC = () => {
  return (
    <Flex height={"auto"} backgroundColor="grey" color={"white"} alignItems="center" justifyContent={"center"} direction="column">
        <Flex height={"5vh"} border="1px solid white" width={"100%"} justifyContent="center" alignItems={"center"}>
			<Flex>
			<a href="/" style={{"color":"blue","textDecoration":"underline"}}>Visit Here </a>&nbsp; to get yourself registered here
			</Flex>
        </Flex>


		<Flex height={"20vh"} width={'100%'} border="1px solid orange" alignItems={"center"} justifyContent="space-between">
			<Flex border={"1px solid green"} height={"100%"} width={"100%"} alignItems="center" justifyContent={"center"}>
				<ul style={{"listStyle":"none"}}>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Location</li>
					<li>Home</li>
				</ul>
			</Flex>
			<Flex border={"1px solid green"} height={"100%"} width={"100%"} alignItems="center" justifyContent={"center"} direction="column">
				<Flex fontSize={"3xl"} className="onestore">One Store for all your products</Flex>
				<Flex fontSize={"5xl"} className="info">Warement House</Flex>
			</Flex>
			<Flex border={"1px solid green"} height={"100%"} width={"100%"} alignItems="center" justifyContent={"center"}>
				<ul style={{"listStyle":"none"}}>
					<li>Services</li>
					<li>Registration</li>
					<li>Users</li>
					<li>Visit</li>
				</ul>
			</Flex>
			
			
		</Flex>


        <Flex height={"12vh"} border="1px solid white" width={"100%"} direction={"column"}>
          <Flex height={"5vh"} border="1px solid red" width={"100%"} justifyContent="center" alignItems={"center"}>Follow Us Here</Flex>
          <Flex height={"7vh"} border="1px solid blue" width={'100%'} justifyContent="center" alignItems={"center"}>
            <Flex width={"60%"} justifyContent="space-around" fontSize={"2xl"}>
            <Flex><FaLinkedin/></Flex>
            <Flex><FaGithub/></Flex>
            <Flex><FaInstagram/></Flex>
            <Flex><FaFacebook/></Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex height={"5vh"} border="1px solid white" width={"100%"} justifyContent="center" alignItems={"center"}>All Rights Reserved &copy;Pensive2022</Flex>
    </Flex>
  )
}

export default Footer