import React from "react";
import {useNavigate} from 'react-router-dom';
function Contact()
{
    const navigate = useNavigate();
    return(
        <div>
            <h1>Get in Touch</h1>
            <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
    )
}
export default Contact;