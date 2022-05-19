import { SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'

export const ProductGrid = (props) => {
  const columns = React.useMemo(() => {
    const count = React.Children.toArray(props.children).filter(React.isValidElement).length
    return {
      base: Math.min(2, count),
      md: Math.min(3, count),
      lg: Math.min(4, count),
      xl: Math.min(5, count),
    }
  }, [props.children])
  return (
    <SimpleGrid
      columns={columns}
      columnGap={{
        base: '10',
        md: '20',
      }}
      rowGap={{
        base: '10',
        md: '40',
      }}
      {...props}
    />
  )
}
