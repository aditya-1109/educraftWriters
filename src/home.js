import StarRating from "./rating";
import "./style/home.css";
import { useEffect, useRef, useState } from "react";

const Home = () => {

    const [reviews, setReviews] = useState([]);
    const [order, setOrders]= useState(0);
    const [percent, setPercent]= useState(0);
    const [marks, setMarks]= useState(0);

    useEffect(() => {

        setReviews([{ name: "Aditya", id: "Costumer009", desc: "I absolutely loved it, the writer I hired followed all the instructions that I provided to her, & the essay was great. I will definitely recommend this to anyone who needs help with their papers.", date: "2 Nov 2024" }, { name: "Aditya", id: "Costumer009", desc: "I absolutely loved it, the writer I hired followed all the instructions that I provided to her, & the essay was great. I will definitely recommend this to anyone who needs help with their papers.", date: "2 Nov 2024" }, { name: "Aditya", id: "Costumer009", desc: "I absolutely loved it, the writer I hired followed all the instructions that I provided to her, & the essay was great. I will definitely recommend this to anyone who needs help with their papers.", date: "2 Nov 2024" }, { name: "Aditya", id: "Costumer009", desc: "I absolutely loved it, the writer I hired followed all the instructions that I provided to her, & the essay was great. I will definitely recommend this to anyone who needs help with their papers.", date: "2 Nov 2024" },{ name: "Aditya", id: "Costumer009", desc: "I absolutely loved it, the writer I hired followed all the instructions that I provided to her, & the essay was great. I will definitely recommend this to anyone who needs help with their papers.", date: "2 Nov 2024" }])

        const imterval= setInterval(()=>{
            setOrders((prev)=>(prev<10?prev+1: prev));
            setPercent((prev)=>(prev<95?prev+5: prev));
            setMarks((prev)=>(prev<10?prev+1: prev))
        }, 100)

        return ()=> clearInterval(imterval);
    }, []);


    return (
        <>
            <div className="Home-container">
                <div className="hero-container">
                    <img src="./images/logo.png" />
                    <h1>A+ Thesis Writing Services</h1>
                    <h3>We will help you in writing your thesis, research paper, courses and all graduation related problems</h3>
                    <button className="button">Book a session</button>
                </div>

                <div className="Ai-container">
                    <h4>No AI involvement, Fully created by our experts</h4>
                </div>

                <div className="benefit-container">
                    <h1 className="heading">Benefits and Assurances</h1>
                    <div className="benefits-contain">
                    <div className="benefits">
                        <div className="benefit">
                            <img src="./images/logo.png" />
                            <h4>According to your instructions</h4>
                        </div>
                        <div className="benefit">
                            <img src="./images/logo.png" />
                            <h4>Guaranted MoneyBack</h4>
                        </div>
                        <div className="benefit">
                            <img src="./images/logo.png" />
                            <h4>Proof Reading</h4>
                        </div>
                    </div>
                    <div className="benefits">
                        <div className="benefit">
                            <img src="./images/logo.png" />
                            <h4>Within the deadline</h4>
                        </div>
                        <div className="benefit">
                            <img src="./images/logo.png" />
                            <h4>Contain your privacy</h4>
                        </div>
                        <div className="benefit">
                            <img src="./images/logo.png" />
                            <h4>Support 24/7</h4>
                        </div>
                    </div>
                    </div>
                </div>


                <div className="benefit-container">
                    <h1 className="heading">Price and services</h1>
                    <div className="benefits-contain">
                    <div className="benefits">
                        <div className="benefit">
                            <img src="./images/logo.png" />
                            <h4>According to your instructions</h4>
                        </div>
                        <div className="benefit">
                            <img src="./images/logo.png" />
                            <h4>According to your instructions</h4>
                        </div>
                        <div className="benefit">
                            <img src="./images/logo.png" />
                            <h4>According to your instructions</h4>
                        </div>
                        </div>
                        <div className="benefits">
                        <div className="benefit">
                            <img src="./images/logo.png" />
                            <h4>According to your instructions</h4>
                        </div>
                        <div className="benefit">
                            <img src="./images/logo.png" />
                            <h4>According to your instructions</h4>
                        </div>
                        <div className="benefit">
                            <img src="./images/logo.png" />
                            <h4>According to your instructions</h4>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="review-container">
                    <h1>Reviews of Students</h1>
                    <div className="reviews">
                        {reviews?.map((review, index) => (
                            <div className="review" key={index}>

                                <h3>{review.name}</h3>
                                <StarRating rating={3} />
                                <p>{review.desc}</p>
                                <div className="review-footer">
                                    <p>{review.id}</p>
                                    <p>{review.date}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

                <div className="achievements-container">
                    <img src="./images/logo.png" />
                    <div className="achievement">
                        <h3>{order}k+</h3>
                        <p>Orders are completed monthly</p>
                    </div>

                    <div className="achievement">
                        <h3>{percent}%</h3>
                        <p>of costumers have improved their grades</p>
                    </div>

                    <div className="achievement">
                        <h3>{marks}/10</h3>
                        <p>of orders are delivered on time</p>
                    </div>
                </div>

                <div className="review-container">
                    <h1>Our Services</h1>
                    <div className="order-type">
                    <p className="services"> Research Paper</p>
                    <p className="services"> Synopsis</p>
                    <p className="services"> Thesis</p>
                    <p className="services"> Assignments</p>
                    <p className="services"> Essay Writing</p>
                    <p className="services"> Crash Course</p>
                    <p className="services"> Book</p>
                    <p className="services"> PowerPoint</p>
                    <p className="services"> Slides</p>
                    <p className="services"> Question Answer</p>
                    <p className="services"> And much more...</p>
                    
                    </div>
                    <button className="button">Place order</button>
                </div>
            </div>
        </>
    )

}

export default Home;