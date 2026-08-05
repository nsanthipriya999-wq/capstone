//-----------------------ContactUs Page---------------------------------------
import washngo from "../assets/washngo.png"
export default function Contact()
{
    return(
        <div className="contactus-container">
             <img src={washngo} alt="car wash building" className="hero-image"/>
        <div className="contactus-card">
          <h2>☎️Contact Us</h2>
          <p>Have questions about your next adventure? 
             Reach out to us at washngo@gmail.com
             or 📞123-456-789.
        </p>
        </div>
     </div>
    )
}