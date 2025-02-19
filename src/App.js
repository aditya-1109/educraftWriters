
import axios from 'axios';
import './App.css';
import Footer from './footer';
import Home from './home';
import Navbar from './navbar';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";




function App() {


  const [showPopup, setShowPopup] = useState(true);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [user, setUser]= useState({name:"", number:0});


  useEffect(()=>{
    const getNumber= localStorage.getItem("educraftnumber");
    if(getNumber){
      const name= localStorage.getItem("educraftname");
      setUser({name, number: getNumber})
      setShowPopup(false);
    }
  }, [])

  const onSubmit = async (data) => {
    try{
      const response = await axios.post("http://localhost:4000/getNumber", { number: data.phoneNumber, name: data.name });
    
      if(response.data.success){
        alert(response.data.message);
        setShowPopup(false);
        localStorage.setItem("educraftnumber", `${data.phoneNumber}`);
        localStorage.setItem("educraftname", `${data.name}`);
        setUser({name: data.name, number: data.phoneNumber});
      }else{
        alert(response.data.message);
      }
    }catch(e){
      alert("some error occured")
    }
 
  }


  return (
    <>
      {showPopup && (
        <div className="mobile-number-container">
          <div className="mobile-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="mobile-heading">Please Enter Your Name</h2>
              <input
                type="text"
                maxLength="10"
                {...register("name", { required: "Name is required" })}
                className="mobile-input"
                placeholder="Enter name"
              />
              {errors.name && <p className="error">{errors.name.message}</p>}

              <h2 className="mobile-heading">Please Enter Your Phone Number</h2>
              <input
                type="tel"
                maxLength="10"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
                className="mobile-input"
                placeholder="Enter phone number"
              />
              {errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}

              <button type="submit" className="mobile-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="App">
        <Navbar user={user} />
        <Home user={user} />
        <Footer />
      </div>
    </>

  );
}

export default App;
