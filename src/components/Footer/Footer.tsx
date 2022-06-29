import { Flex } from '@chakra-ui/react'
import React from 'react'

import {FaInstagram,FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'

import './Footer.css'

const Footer:React.FC = () => {
  return (
    <Flex height={"auto"} className="Footer" alignItems="center" justifyContent={"center"} direction="column">
        <Flex height={"5vh"} width={"100%"} justifyContent="center" alignItems={"center"}>
			<Flex>
			<a href="/" style={{"color":"blue","textDecoration":"underline"}}>Visit Here </a>&nbsp; to get your shop registered here
			</Flex>
        </Flex>
		<hr/>


		<Flex height={"20vh"} width={'100%'} alignItems={"center"} justifyContent="space-between" m={2}>
			<Flex height={"100%"} width={"100%"} alignItems="center" justifyContent={"center"}>
				<ul style={{"listStyle":"none"}}>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Location</li>
					<li>Home</li>
				</ul>
			</Flex>
			<Flex height={"100%"} width={"100%"} alignItems="center" justifyContent={"center"} direction="column">
				<Flex fontSize={"3xl"} className="onestore">One Store for all your products</Flex>
				<Flex fontSize={"5xl"} className="info">Warement House</Flex>
			</Flex>
			<Flex height={"100%"} width={"100%"} alignItems="center" justifyContent={"center"}>
				<ul style={{"listStyle":"none"}}>
					<li>Services</li>
					<li>Registration</li>
					<li>Users</li>
					<li>Visit</li>
				</ul>
			</Flex>
			
			
		</Flex>
		<hr />


        <Flex height={"12vh"}  width={"100%"} direction={"column"}>
          <Flex height={"5vh"} width={"100%"} justifyContent="center" alignItems={"center"}>
			Follow Us Here
		  </Flex>
          <Flex height={"7vh"} width={'100%'} justifyContent="center" alignItems={"center"}>
            <Flex width={"60%"} justifyContent="space-around" fontSize={"2xl"}>
            <Flex><FaLinkedin/></Flex>
            <Flex><FaGithub/></Flex>
            <Flex><FaInstagram/></Flex>
            <Flex><FaFacebook/></Flex>
            </Flex>
          </Flex>
        </Flex>
		<hr />

        <Flex height={"5vh"} width={"100%"} justifyContent="center" alignItems={"center"}>All Rights Reserved &copy;Pensive2022</Flex>
    </Flex>
  )
}

export default Footer