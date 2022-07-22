import { ChevronRightIcon } from '@chakra-ui/icons'
import { Flex , Image } from '@chakra-ui/react'
import React from 'react'

import orders from '../../assets/orders.png'

import accountSetting from '../../assets/accountSetting.png'

import paymentMethod from '../../assets/paymentMethod.png'

import coupon from '../../assets/coupon.png'

import logOut from '../../assets/logOut.png'

import logout from '../../assets/log-out.png'

// css import 
import '../ProfileNav/ProfileNav.css'

const ProfileNav:React.FC = () => {
  return (
    <>
        <Flex mt={"1rem"} width={"100%"} height="auto" className='total' direction={"column"}>

            {/* My orders */}
            <Flex justifyContent={"space-between"} mt="1rem">
                <Flex alignItems={'center'} justifyContent='center' width={"20%"}>
                <Image boxSize='2rem' src={orders} alt='My Orders'/>
                </Flex>
                <Flex alignItems={"center"} width="75%" justifyContent={"space-between"}>
                    <Flex fontSize={"1.3rem"} color="gray" fontWeight={"bold"}>My Orders</Flex>
                    <Flex fontSize={"2rem"}><ChevronRightIcon/></Flex>
                </Flex>
            </Flex>
            
            <Flex width={"100%"} mt="1rem"><hr /></Flex>

            {/* Account setting  */}
            <Flex justifyContent={"space-between"} mt="1rem">
                <Flex alignItems={'center'} justifyContent='center' width={"20%"}>
                <Image boxSize='1.5rem' src={accountSetting} alt='Account Setting'/>
                </Flex>
                <Flex alignItems={"flex-start"} width="75%" justifyContent={"flex-start"} direction="column">
                    <Flex fontSize={"1.3rem"} color="gray" fontWeight={"bold"}>Account Setting</Flex>
                    {/* <Flex>Hello world</Flex> */}
                </Flex>
            </Flex>
            <Flex width={"100%"} mt="1rem" justifyContent={"flex-end"}>
                <Flex fontSize={"1.1rem"} width={"75%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Profile Information</Flex>
            </Flex>
            <Flex width={"100%"} mt="1rem" justifyContent={"flex-end"}>
                <Flex fontSize={"1.1rem"} width={"75%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Manage Address</Flex>
            </Flex>

            
            <Flex width={"100%"} mt="1rem"><hr /></Flex>
            {/* Payment  */}
            <Flex justifyContent={"space-between"} mt="1rem">
                <Flex alignItems={'center'} justifyContent='center' width={"20%"}>
                <Image boxSize='1.5rem' src={paymentMethod} alt='Account Setting'/>
                </Flex>
                <Flex alignItems={"flex-start"} width="75%" justifyContent={"flex-start"} direction="column">
                    <Flex fontSize={"1.3rem"} color="gray" fontWeight={"bold"}>Payment Methods</Flex>
                    {/* <Flex>Hello world</Flex> */}
                </Flex>
            </Flex>
            <Flex width={"100%"} mt="1rem" justifyContent={"flex-end"}>
                <Flex fontSize={"1.1rem"} width={"75%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Saved UPI</Flex>
            </Flex>
            <Flex width={"100%"} mt="1rem" justifyContent={"flex-end"}>
                <Flex fontSize={"1.1rem"} width={"75%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Saved Cards</Flex>
            </Flex>

            
            <Flex width={"100%"} mt="1rem"><hr /></Flex>
            {/* My Stuffs  */}
            <Flex justifyContent={"space-between"} mt="1rem">
                <Flex alignItems={'center'} justifyContent='center' width={"20%"}>
                <Image boxSize='1.5rem' src={coupon} alt='Account Setting'/>
                </Flex>
                <Flex alignItems={"flex-start"} width="75%" justifyContent={"flex-start"} direction="column">
                    <Flex fontSize={"1.3rem"} color="gray" fontWeight={"bold"}>My Stuffs</Flex>
                    {/* <Flex>Hello world</Flex> */}
                </Flex>
            </Flex>
            <Flex width={"100%"} mt="1rem" justifyContent={"flex-end"}>
                <Flex fontSize={"1.1rem"} width={"75%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Coupons and Offers</Flex>
            </Flex>
            <Flex width={"100%"} mt="1rem" justifyContent={"flex-end"}>
                <Flex fontSize={"1.1rem"} width={"75%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Reviews and Ratings</Flex>
            </Flex>
            <Flex width={"100%"} mt="1rem" justifyContent={"flex-end"}>
                <Flex fontSize={"1.1rem"} width={"75%"} justifyContent="flex-start" cursor={"pointer"} className='Link'>Wishlisted Items</Flex>
            </Flex>

            
            <Flex width={"100%"} mt="1rem"><hr /></Flex>
            {/* Logout  */}
            <Flex justifyContent={"space-between"} mt="1rem" mb="1rem" cursor={"pointer"}>
                <Flex alignItems={'center'} justifyContent='center' width={"20%"}>
                <Image boxSize='1.8rem' src={logout} alt='Account Setting'/>
                </Flex>
                <Flex alignItems={"flex-start"} width="75%" justifyContent={"flex-start"} direction="column">
                    <Flex fontSize={"1.3rem"} color="gray" fontWeight={"bold"}>Logout</Flex>
                    {/* <Flex>Hello world</Flex> */}
                </Flex>
            </Flex>

        </Flex>
    </>
  )
}

export default ProfileNav