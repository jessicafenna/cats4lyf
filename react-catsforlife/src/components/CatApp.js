import {
  AspectRatio,
  Box, 
  Image,
  Skeleton,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Link
} from '@chakra-ui/react'
import { FaShoppingBasket } from "react-icons/fa"
import React, { useEffect, useState } from 'react'
import { ProductGrid } from './ProductGrid'
import '../styling.css'

const { faker } = require('@faker-js/faker');

const CatApp = () => {
  const [cat, setCat] = useState([]);
  const [basket, setBasket] = useState([]);

  cat.name = faker.name.firstName();
  cat.price = faker.commerce.price();

  // asynchronous function so we can wait for data to be fetched
  const fetchImageData = async () => {
    // try code in the 'try' block and if error occurs/is thrown then run catch block
    try {
      // wait for fetch request from API endpoint and store rsponse in variable
      const apiKey = '';
      const url = 'https://api.thecatapi.com/v1/images/search?limit=40&?category_ids=5'; // .../limit=10'

      const response = await fetch(url);

      // check to see if the response was successful otherwise throw error
      if(!response.ok){
        throw new Error(response.statusText)
      }
      // parse JSON response into normal javascript
      const data = await response.json();

      // see returned data in console and set that data as new state value
      console.log(data)
      return (data)
    } catch (err) {
      // catch an error that occurs in the try block
      // console log the error
      console.log(err)
    }
  }

  // useEffect only runs once when component is first rendered
  useEffect(() => {
    const fetchData = async () =>{ 
      
        let catList = await fetchImageData();
           catList.map((cat)=>{ 
              
              cat.name = faker.name.firstName();
              cat.price = faker.commerce.price();
             
      })        
      setCat(catList);
      console.log(cat)
  }
  fetchData();
  }, []) ;

  const removeFromBasket = (removeCat) => {
      setBasket(basket.filter((cat) => cat !== removeCat))
    }


  const addToBasket = (cat) => {
    console.log('Cat in the basket')
    setBasket([...basket, cat]);
    console.log(cat)
  }

    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    let total = basket.reduce((accumulator,cat) => accumulator + parseInt(cat.price), 0)
  
  // const initialAmount = {
  //   totalAmount: 0,
  // }

  return (

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
    
    <Button
          className='my-basket'
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
          position="fixed"
          justifySelf="end"
        ><FaShoppingBasket />
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>CatPak</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <div className="basket-header">
                    <h3 className='basket-heading'>Basket ({basket.length})</h3>
                </div>
            {basket.map((cat, index) => {
            return (
                <div className='basket-cat-card' key={index}>
                    <h3>{cat.name}</h3>
                    <p>£{cat.price}</p>
                    <Button onClick={() => removeFromBasket(cat)}>❌</Button>            
                </div>
            )
        })}
            </ModalBody>
                <div>
                  <h1 className='total-spacing-1'>Total: <span className='total-spacing-2'>£{total}.00</span></h1>
                </div>
            <ModalFooter>
              <Button className='button-spacing-1' onClick={onClose}>
                  Checkout
                </Button>
                <Button>
                  Clear Basket
                </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

    <ProductGrid>
    {cat.map((cat, index)=>(
            <div id={cat.id} key={index}>
              <AspectRatio ratio={1 / 1}>
              <Image
                src={cat.url}
                alt="Catto"
                draggable="false"
                fallback={<Skeleton />}
                borderRadius={{
                  base: 'md',
                  md: 'xl',
                }}
                />
              </AspectRatio>
              <h3 id='cat-name'>{cat.name}</h3>
              <p>£{cat.price}</p>
              <Button onClick={() => addToBasket(cat)} rightIcon={<FaShoppingBasket />} colorScheme='blue' variant='outline' marginTop="5px" marginBottom="5px">
                Add To Basket
              </Button>            
          </div>
        ))}
    </ProductGrid>
  </Box>

  );
}

export default CatApp;
