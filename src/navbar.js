import { useEffect, useState } from "react";
import "./style/navbar.css";
import axios from "axios";


const Navbar = (user) => {

    
    const [menuDropdown, setMenudropdown]= useState();
    const {number, name}= user.user;

    

    const openDropDown=(menu)=>{
        setMenudropdown(menu)
    }

    const handleService = async(service) => {
        const confirming = window.confirm(`Are you sure you want to book a session for ${service} with our superb writers?`);
        if (confirming) {
            const response= await axios.post("https://educraftwriters-backend.onrender.com/confirmBooking", {number: number, booking: true, service});
            if(response.data.success){
                alert(response.data.message)
            }else{
                alert(response.data.message);
            }
            
        }
    };

    const booking=async()=>{
        const response= await axios.post("https://educraftwriters-backend.onrender.co/confirmBooking", {number: number, booking: true, service: ""});
            if(response.data.success){
                alert(response.data.message)
            }else{
                alert(response.data.message);
            }
    }



    const closeDropDown=()=>{
        setMenudropdown("");
    }
    return (
        <>
            <div className="navbar-container">
                <div className="logo-container">
                    <img src="./images/logo.png" />
                    <img src="./images/logowrite.png" />
                </div>

                <div className="menu-container">

                    <div className="menu">
                        <p onMouseEnter={()=>openDropDown("service")} onClick={()=>openDropDown("service")} onMouseLeave={()=> closeDropDown()}>Services
                        {menuDropdown==="service" && <div className="dropdown">
                            <p onClick={()=>handleService("essay-writting")} className="nav">Essay Writing</p>
                            <p onClick={()=>handleService("thesis-writting")} className="nav">Thesis </p>
                            <p onClick={()=>handleService("synopsis-writting")} className="nav">Synopsis</p>
                            <p onClick={()=>handleService("paper-writting")} className="nav">Research Paper</p>
                            <p onClick={()=>handleService("other")} className="nav">Other</p>
                        </div>}
                        </p>
                    </div>

                    <div className="menu">
                    <p onMouseEnter={()=>openDropDown("order")} onClick={()=>openDropDown("order")} onMouseLeave={()=> closeDropDown()}>How to Order
                        {menuDropdown==="order" && <div className="dropdown">
                            <p className="nav">Step 1: Select the service</p>
                            <p className="nav">step 2: Confirm the booking</p>
                            <p className="nav">That's All! Your booking is confirmed. Our writer will contact you for further information</p>
                        
                        </div>}
                        </p>
                    </div>


                </div>

                {menuDropdown==="profile" && 
                <div className="dropdown-profile">
                            <p className="profile-nav">{name}</p>
                            <p className="profile-nav">{number}</p>
                          
                        </div>}

                <div className="hire-container">
                    <img onMouseEnter={()=>openDropDown("profile")} onClick={()=>openDropDown("profile")} onMouseLeave={()=> closeDropDown()} className="profile-image" src={`https://api.dicebear.com/6.x/personas/svg?seed=${name}`} alt="profile" /> 
                </div>

                <div className="hire-container">
                    <button onClick={booking} className="button">Book session</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;