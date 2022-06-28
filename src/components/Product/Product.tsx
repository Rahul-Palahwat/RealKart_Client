import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

import './Product.css'

interface Props{
    title: string
    image: string[]
    price: number
}

const Product:React.FC<Props> = (props) => {
    const {title , image, price} = props;
  return (
    <div className='total' style={{"width":"100%","height":"100%","margin":"2rem"}}>
    <Flex alignItems={"center"} justifyContent="center" width={"100%"} height="100%">
    <Flex direction={"column"} alignItems="center" className='add' height="100%" width="100%">
        <Flex mt={2}><img src={image[0]} alt="Hello" style={{"height":"20vh","width":"20vh"}}/></Flex>
        <Flex mt={2}>{title}</Flex>
        <Flex>
        <Flex mt={2}>&#x20B9;{price}</Flex>
        <Flex mt={2} ml={4} textDecoration="line-through">&#x20B9;{price}</Flex>
        </Flex>
        <Flex id="cart" width="100%" height={"100%"} alignItems={"flex-end"} mt={5}>
            
            <Flex mb={2} width="100%" justifyContent={"center"}>
                <Button className='items' width="80%" colorScheme='orange'>Add to Cart</Button>
            </Flex>

        </Flex>
        
        
    </Flex>
    </Flex>
  
</div>
  )
}

export default Product