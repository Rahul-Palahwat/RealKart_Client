import { Button, Flex } from '@chakra-ui/react'
import CartItem from '../CartItem/CartItem'
import PriceDetails from '../PriceDetails/PriceDetails'
// for redux 
import { useAppSelector} from '../../redux'
import './Cart.css'
const Cart: React.FC = () => {
    const { noOfItems} = useAppSelector((state) => state.cartItem)
    // const dispatch = useAppDispatch();
    const { dataAllCartProducts} = useAppSelector((state) => state.items)
    // console.log("Cart wala", dataAllCartProducts)
    return (
        <>
            <Flex height="auto" justifyContent={"center"} mt={"2.2rem"} wrap='wrap' mb={"2rem"}>
                <Flex width={"60%"} direction="column" className="cartComponents">
                    {/* address component  */}
                    <Flex height="15vh" justifyContent={"center"} alignItems='flex-end'>
                        <Flex p={2} width="20%" alignItems={'center'} fontSize='1.3rem' height={"100%"} fontWeight="bold">MyCart({noOfItems})</Flex>
                        <Flex border={"1px solid grey"} width="73%" ml="2rem" height={"95%"} justifyContent="space-between">
                            {/* Address  */}
                            <Flex direction={"column"} justifyContent="center">
                                <Flex m="0.2rem" ml="1rem">Deliver to: <Flex fontWeight={"bold"}>Rahul kumar, 204213</Flex></Flex>
                                <Flex m="0.2rem" ml="1rem" color={"grey"}>Village- Nagla Anta, Post- Kota, Uttar Pradesh</Flex>
                            </Flex>
                            <Flex alignItems={"center"} mr="1rem">
                                <Button colorScheme='blue' variant='outline'>
                                    Change
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                    {/* CartItem component  */}
                    <Flex height="100%" direction={"column"}>
                        {dataAllCartProducts.map((data:any,index:number) => {
                            // console.log({item})
                            return (
                                <Flex key={index} height={"auto"} width="auto" m="1rem">
                                    <CartItem item={data}/>
                                </Flex>
                            )
                        })}
                    </Flex>
                </Flex>
                {/* Price Details component  */}
                <Flex width="30%" ml={"2rem"} height="auto">
                    <PriceDetails />
                </Flex>
            </Flex>
        </>
    )
}
export default Cart