import './styling.css'
import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { CatApp } from './CatApp';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="center" hidden/>
          <div></div>
          <VStack spacing={3}>
            <h1 id='heading-main'>CATS4LYFE<span id='heading-split'><span className='letters-b'>.b</span><span><ColorModeSwitcher className="color-switcher" justifySelf="center"/></span>nk</span></h1>
            <p id='paragraph-main'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
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
