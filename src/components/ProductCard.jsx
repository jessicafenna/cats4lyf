import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag'

export const ProductCard = (props) => {
  const { product, rootProps } = props
  const { name, imageUrl, price, salePrice } = product
  return (
    <Stack
      spacing={useBreakpointValue({
        base: '4',
        md: '5',
      })}
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: 'md',
              md: 'xl',
            })}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="-2">
          <Text marginRight="-50%" fontWeight="light" color={useColorModeValue('gray.700', 'gray.400')}>
            {name}
          </Text>
          <PriceTag price={price} salePrice={salePrice} currency="GBP"/>
        </Stack>
        <HStack>
        </HStack>
      </Stack>
      <Stack>
        <Button colorScheme="blue" isFullWidth>
          Add To Basket
        </Button>
      </Stack>
    </Stack>
  )
}