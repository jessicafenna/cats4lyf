import './styling.css';
import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import CatApp from './components/CatApp';
import {FaShoppingBasket} from 'react-icons/fa';
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";


function App() {
  
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="center" hidden/>          
          <VStack spacing={3}>
          <div className='main-text'>
            <h1 id='heading-main'>CATS4LYFE<span id='heading-split'><span className='letters-b'>.b</span><span><ColorModeSwitcher className="color-switcher" justifySelf="center"/></span>nk</span></h1>
            <p id='paragraph-main'>Blessings of the moons upon you, traveller! Thanks for stopping by at <span className='paragraph-split'>CATS4LYFE</span>. We all know why you are here, your obsession for cats has proven yourself worthy? These creatures of the Desert are looking for a home. They however <span className='paragraph-split'>DO NOT</span> come with warranty so feel free to peel of the sticker when you recieve said Feline. I want to wish you the best on your choice of <code className='code-bit'>KHAJIIT</code>, I hope you will find a warmer welcome in your travels than we have found in ours.</p>
          </div>

            <div></div>
            <div></div>

            <div className='cat-app'>

              <CatApp />

            </div>

          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
