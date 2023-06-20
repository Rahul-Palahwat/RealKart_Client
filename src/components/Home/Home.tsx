import { Flex } from '@chakra-ui/react'
import AllProducts from '../AllProducts/AllProducts'
import BestSelling from '../BestSelling/BestSelling'
import MostWishlisted from '../MostWishlisted/MostWishlisted'

const Home = () => {
  return (
    <Flex direction={"column"}>
		<AllProducts/>
		<BestSelling/>
		<MostWishlisted/>
	</Flex>
  )
}

export default Home