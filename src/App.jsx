
import React from 'react';
import Contextcomponent from './Contextcomponent';
import { ThemeProvider } from './ThemeProvider';

function App() {
  return(
    <>
    <h1>Hey</h1>
   <ThemeProvider>
    <Contextcomponent />
   </ThemeProvider>
    </>
  )
}

export default App;
