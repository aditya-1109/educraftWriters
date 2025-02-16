import { useEffect, useState } from "react";
import "./style/navbar.css";


const Navbar = () => {

    const [user, setUser] = useState(null);
    const [menuDropdown, setMenudropdown]= useState();

    useEffect(() => {
        setUser({ name: "aditya" })
    }, [])

    const openDropDown=(menu)=>{
        setMenudropdown(menu)
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
                        <p onMouseEnter={()=>openDropDown("service")} onMouseLeave={()=> closeDropDown()}>Services
                        {menuDropdown==="service" && <div className="dropdown">
                            <p className="nav">Essay Writing</p>
                            <p className="nav">Thesis </p>
                            <p className="nav">Synopsis</p>
                            <p className="nav">Research Paper</p>
                            <p className="nav">Other</p>
                        </div>}
                        </p>
                    </div>

                    <div className="menu">
                    <p onMouseEnter={()=>openDropDown("order")} onMouseLeave={()=> closeDropDown()}>How to Order
                        {menuDropdown==="order" && <div className="dropdown">
                            <p className="nav">Step 1: Select the service</p>
                            <p className="nav">Enter the subject or topic(optional)</p>
                            <p className="nav">Step 3: Enter the amount you offer</p>
                            <p className="nav">Step 4: Place the order</p>
                            <h6>Our team will contact you for further information</h6>
                        </div>}
                        </p>
                    </div>


                </div>

                <div className="hire-container">
                    {user ? <img className="profile-image" src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${user.name}`} alt="profile" /> : <button className="button">Login</button>}
                </div>

                <div className="hire-container">
                    <button className="button">Book session</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;