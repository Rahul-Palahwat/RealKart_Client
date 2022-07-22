import { Badge, Button, Flex, IconButton, Tooltip, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BsCartPlus, BsPerson } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
// this is to import redux store 
import { useAppSelector, useAppDispatch } from '../../redux'
import { logIn } from '../../redux/reducers/Login/index';
import ModalSignUp from '../ModalSignUp/ModalSignUp';
import './MainNav.css'

const MainNav: React.FC = () => {
	const { isLogIn } = useAppSelector((state) => state.login)
	const {items , noOfItems} = useAppSelector((state) => state.cartItem)
	const dispatch = useAppDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure()
	const navigate = useNavigate();
	return (<>
		<Flex height={"12vh"} className='footer' justifyContent='space-between' width={'100%'}>
			<Flex cursor={"pointer"} flex='2' fontSize="3xl" alignItems="center" fontWeight={"bold"} justifyContent='center'>
				<Flex onClick={() => navigate('/')} >Rajeev Kirana Store</Flex> 
			</Flex>
			<Flex flex='3' justifyContent='space-around' alignItems="center">
				<Flex cursor={"pointer"} onClick={() => navigate('/')}>Home</Flex> 
				<Flex cursor={"pointer"} onClick={() => navigate('/about')}>About Us</Flex>
				<Flex cursor={"pointer"} onClick={() => navigate('/location')}>Location</Flex>
			</Flex>
			<Flex flex='2' justifyContent='space-around' width={"100%"}>
				{!isLogIn ?
					<Flex alignItems={'center'}>
						<Button onClick={onOpen} color={"white"} bgColor={"#47B5FF"} fontSize="1.1rem" cursor={"pointer"} className="mainBtn">Sign Up</Button>
						<Button onClick={() => { dispatch(logIn(true)) }} color={"white"} bgColor={"#47B5FF"} className="mainBtn" fontSize="1.1rem" cursor={"pointer"}>Log In</Button>
					</Flex>
				: 	<Flex justifyContent='flex-end' alignItems={'center'}>
						<Button color={"white"} bgColor={"#47B5FF"} height={"6vh"} mr={5} className="mainBtn" onClick={() => { dispatch(logIn(false)) }}>Log Out</Button>
						<Flex alignItems={'center'}>
							<Flex mr={2} fontSize={"3xl"}>
								<Flex >
								<Tooltip label='Go to Cart' hasArrow arrowSize={10}>
									<Flex onClick={() => navigate('/cart')}>
									<IconButton aria-label='Search database' icon={<BsCartPlus />} />
									</Flex>
									</Tooltip>
								</Flex>
								<Flex justifyContent={"center"}>
									<Badge colorScheme='orange' zIndex={1} mt={"0.3rem"} ml={"-2.4rem"} backgroundColor={"orange.300"} borderRadius="5px 5px 20px 20px" height={"3"} width="3" display={isLogIn ? "" : "none"} fontSize="0.6rem">{noOfItems}</Badge>
								</Flex>
							</Flex>
							<Flex alignItems={'center'} mr={2} fontSize={"3xl"} onClick={() => navigate('/profile')}>
							<Tooltip label='Profile' hasArrow arrowSize={10}>
								<IconButton aria-label='Search database' icon={<BsPerson />} />
								</Tooltip>
							</Flex>
						</Flex>
					</Flex>
				}
			</Flex>
		</Flex>
		<ModalSignUp onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
	</>)
}
export default MainNav