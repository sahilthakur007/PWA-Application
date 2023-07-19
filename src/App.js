import React, { useEffect } from "react"
import Navbar from "./Components/Navbar"
import {Route,Routes} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Users from "./Components/Users"
// import firebase from "./firebase"
export default () => {
  // useEffect(() => {
  //   const msg = firebase.messaging()
  //   msg.requestPermission().then(() => {
  //     return msg.getToken()
  //   }).then((data) => {
  //     console.warn("token",data)
  //   })
  // },[])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}