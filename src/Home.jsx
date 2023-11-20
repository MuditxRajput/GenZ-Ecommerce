import React from 'react'
// const dispatch = useDispatch
// import Home from './'
import Category from './components/Category'
import Hero from './components/Hero'
const Home = () => {
  const name ={
    name :"Genz Store"
  }
  return (
    <>
    <Hero name= {name}/>
    <Category/>
     {/* <NavLink to='/men'>
      card
     </NavLink> */}
    {/* </Home> */}
    </>

  )
}

export default Home