import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ref from './Ref.jsx'; 
import Memo from './Move.jsx';
import Callback from './Callback.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Ref/>
     <Memo/>
     <Callback/>
  </StrictMode>,
)
