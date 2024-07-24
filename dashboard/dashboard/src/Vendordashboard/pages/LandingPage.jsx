import React ,{useState} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProducts from '../components/forms/AddProducts'
import Welcome from '../components/Welcome'

const LandingPage = () => {
  const[showlogin,setShowlogin]=useState(false)
  const[showregister,setShowregister]=useState(false)
  const[showfirm,setShowfirm]=useState(false)
  const[showproduct,setShowproduct]=useState(false)
  const[showwelcome,setShowwelcome]=useState(false)

  const showloginhandler =()=>{
    setShowlogin(true)
    setShowregister(false)
    setShowfirm(false)
    setShowproduct(false)
    setShowwelcome(false)
  }
  const showregisterhandler =()=>{
    setShowregister(true)
    setShowlogin(false)
    setShowfirm(false)
    setShowproduct(false)
    setShowwelcome(false)
  }
  const showfirmhandler=()=>{
    setShowlogin(false)
    setShowregister(false)
    setShowfirm(true)
    setShowproduct(false)
    setShowwelcome(false)
  }
  const showproducthandler=()=>{
    setShowlogin(false)
    setShowregister(false)
    setShowfirm(false)
    setShowproduct(true)
    setShowwelcome(false)

  }
  const showwelcomehandler =()=>{
    setShowlogin(false)
    setShowfirm(false)
    setShowregister(false)
    setShowproduct(false)
    setShowwelcome(true)

  }
  return (
   <>
        <section className='landingsection'>

            <NavBar showloginhandler={showloginhandler} showregisterhandler={showregisterhandler}/>
            <div className="collection">
            <SideBar showfirmhandler={showfirmhandler} showproducthandler={showproducthandler}/>
            {showlogin && <Login showwelcomehandler={showwelcomehandler}/>}
           {showregister && <Register showloginhandler={showloginhandler}/>}
           {showfirm && <AddFirm/>}
           {showproduct && <AddProducts/>}
           {showwelcome && <Welcome/>}
           </div>
        </section>
   </>
  )
}

export default LandingPage