import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { products } from './_data'
import { ProductCard } from './ProductCard'
import { ProductGrid } from './ProductGrid'
import { CatGen, cats} from './CatGen'

export const CatApp = () => (
  
  <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '1',
    }}
    py={{
      base: '6',
      md: '8',
      lg: '12',
    }}
  >
    <ProductGrid>
      {products.map((cats) => (
        <ProductCard product={cats} />
      ))}
    </ProductGrid>
  </Box>
)

export default CatApp;
