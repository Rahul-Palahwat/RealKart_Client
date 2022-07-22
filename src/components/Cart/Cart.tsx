import { Button, Flex , Image } from '@chakra-ui/react'
import CartItem from '../CartItem/CartItem'
import PriceDetails from '../PriceDetails/PriceDetails'
// for redux 
import { useAppSelector } from '../../redux'
import './Cart.css'

import emptyCart from '../../assets/emptyCart.png'
const Cart: React.FC = () => {
    const { noOfItems } = useAppSelector((state) => state.cartItem)
    // const dispatch = useAppDispatch();
    const { dataAllCartProducts } = useAppSelector((state) => state.items)
    // console.log("Cart wala", dataAllCartProducts)
    return (
        <>
            <Flex height="auto" justifyContent={"center"} wrap='wrap' mb={"2rem"} direction="column">
                <Flex height="8vh" alignItems='flex-end' justifyContent={"center"} fontSize={"1.2rem"}>
                <Flex fontWeight={'bold'}>My Cart&nbsp;</Flex>
                    ({noOfItems<=9 ? noOfItems === 0 ? 0 : `0${noOfItems}` : noOfItems})
                    
                    {/* <Flex ml={"2rem"} width="100%" alignItems={'center'} fontSize='1.2rem' height={"100%"} fontWeight="bold">MyCart({noOfItems})</Flex> */}
                </Flex>
                <Flex width={"100%"} justifyContent="center">
                {noOfItems === 0 
                ? 
                <Flex width={"60%"} alignItems="center" justifyContent={"center"} direction="column">
                    
                    <Flex><Image boxSize='4rem' src={emptyCart} alt='Account Setting'/></Flex>
                    <Flex fontSize={"1.4rem"} mt={"1rem"}>Cart Is Empty</Flex>
                </Flex>
                :
                <Flex width={"60%"} direction="column">
                    {/* CartItem component  */}
                    <Flex height="100%" direction={"column"}>
                        {dataAllCartProducts.map((data: any, index: number) => {
                            // console.log({item})
                            return (
                                <Flex key={index} height={"auto"} width="auto" m="1rem">
                                    <CartItem item={data} />
                                </Flex>
                            )
                        })}
                    </Flex>
                </Flex>
                }
                {/* Price Details component  */}
                <Flex width="30%" ml={"2rem"} height="auto">
                    <PriceDetails />
                </Flex>
                </Flex>
            </Flex>
        </>
    )
}
export default Cart