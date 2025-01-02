import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import book from "./book.json"
import Home from './components/Home'
function App() {
  const [searchTerm,setSearchTerm] = useState("")

  return (
    
      <div>
           <Home books={book} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
    
    
  )
}

export default App