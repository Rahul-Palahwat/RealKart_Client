import { Badge, Button, Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BsCartPlus, BsPerson } from 'react-icons/bs'

// import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

// this is to import redux store 
import { useAppSelector, useAppDispatch } from '../../redux'

import { logIn } from '../../redux/reducers/Login/index';

import './MainNav.css'

const MainNav: React.FC = () => {

	const { isLogIn } = useAppSelector((state) => state.login)
	const dispatch = useAppDispatch();


	return (
	<>
				<Flex height={"12vh"} className='Footer' justifyContent="space-between" width={"100%"} alignItems="flex-end">

					<Flex width={"25%"} height="100%">
						<Flex cursor={"pointer"} fontSize="3xl" alignItems="center" fontWeight={"bold"} ml={7}> <a href="/">Rajeev Kirana Store</a> </Flex>
					</Flex>

					<Flex width={"30%"} height="100%" alignItems={"center"} pt={7}>
						<Flex alignItems={"center"} width={"33%"}><Flex justifyContent={"center"} height={"100%"} width={"100%"}> <a href="\">Home</a> </Flex></Flex>



						<Flex justifyContent={"center"} width={"33%"}><Flex><a href="\about">About Us</a></Flex></Flex>



						<Flex justifyContent={"center"} width={"33%"}><Flex><a href="\location">Location</a></Flex></Flex>
					</Flex>


					<Flex height={"100%"} alignItems="center" justifyContent={"flex-end"} pr={6} width={"25%"} pt={7}>
						<Flex alignItems={"center"} justifyContent="flex-end" width={"100%"}>
							{!isLogIn ?
								<Flex alignItems={"flex-end"} justifyContent={"space-between"}>
									<Button color={"white"} bgColor={"#47B5FF"} mr={8} height={"6vh"} fontSize="1.1rem" cursor={"pointer"}> <a href="/">Sign Up</a> </Button>
									<Button color={"white"} bgColor={"#47B5FF"} mr={8} height={"6vh"} fontSize="1.1rem" cursor={"pointer"} onClick={() => { dispatch(logIn(true)) }}>Log In</Button>
								</Flex>
								: <Flex>
									<Button color={"white"} bgColor={"#47B5FF"} height={"6vh"} mr={5} onClick={() => { dispatch(logIn(false)) }}>Log Out</Button>
									<Flex justifyContent={"center"} height="5vh" alignItems={"center"} borderRadius={5}>
										<Flex fontSize={"3xl"} mr={5}>
											<Flex mt={1}><IconButton aria-label='Search database' icon={<BsCartPlus />} /></Flex>
											<Flex justifyContent={"center"}>
												<Badge colorScheme='orange' zIndex={1} mt={"0.5rem"} ml={"-2.4rem"} backgroundColor={"red.500"} borderRadius="5px 5px 20px 20px" height={"3"} width="3" display={isLogIn ? "" : "none"} fontSize="0.6rem">0</Badge>
											</Flex>
										</Flex>
										<Flex fontSize={"3xl"} mr={2}><IconButton aria-label='Search database' icon={<BsPerson />} /></Flex>
									</Flex>
								</Flex>
							}
						</Flex>
					</Flex>



				</Flex>
		</>
	)
}

export default MainNav