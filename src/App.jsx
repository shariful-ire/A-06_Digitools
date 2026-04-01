import { Suspense, useState } from 'react'
import './App.css'

import NavBar from './components/NavBar'


const packages = async () => {
  const response = await fetch('/packages.json');
  const data = await response.json();
  return data;
}

const prices = async () => {
  const response = await fetch('/pricing.json');
  const data = await response.json();
  return data;
}

const packagePromise = packages();
const pricesPromise = prices();

function App() {

  const [cartItems, setCartItems] = useState([]);


  return (
    <>
      <NavBar cartItems={cartItems} />
      <Banner />
      <Info />

      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <ToolCards packagePromise={packagePromise} cartItems={cartItems} setCartItems={setCartItems} />
      </Suspense>

      <GetStarted/>
      <Pricing pricesPromise={pricesPromise}/>

      <Transform />
      <Footer/>

      <ToastContainer/>
    </>
  )
}

export default App
