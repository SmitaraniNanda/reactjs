import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ref from './Ref.jsx'; 
import Memo from './Move.jsx';
import Callback from './Callback.jsx';

function App() {
   return ( <>
      <Ref/>
      <Memo/>
      <Callback/>
          </>
  )
}

export default App
