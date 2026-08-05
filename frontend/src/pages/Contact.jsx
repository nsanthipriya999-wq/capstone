//-----------------------ContactUs Page---------------------------------------
import washngo from "../assets/washngo.png"
import {FaFacebook,FaInstagram, FaEnvelope} from "react-icons/fa"
export default function Contact()
{
    return(
        <div className="contactus-container">
             <img src={washngo} alt="car wash building" className="contact-image"/>
        <div className="contactus-card">
          <h2>☎️Contact Us</h2>
          
          <p>Have questions about Car Wash?</p> 
          <p> Reach out to us @ <FaEnvelope size={18} color="#E4405F" /> washngospringfield@gmail.com </p>
           <p> Call us at 📞+1 413-783-0163.</p>
          
             <p>                                  <strong>More Information:</strong><br></br>     
             1193 State st, Springfield, MA, United States, 01109.
             </p>
            <p>
                <FaInstagram size={28} color="#E4405F" />
                <a href="https://www.instagram.com/washngospringfield/"
                   target="_blank"
                   rel="nopener no referer" >
                Follow us on Instagram    
                </a>
           </p>
            
            <p>
                <FaFacebook size={28} color="#1877F2" />
                <a href="https://www.facebook.com/washngospringfield/"
                   target="_blank"
                   rel="nopener no referer" >
                Follow us on Facebook
        </a>
        </p>
        

        <div className="contact-hr">
            <h3>⏲️ Business Hours</h3>
            <p>Monday-Sunday : 8 AM - 8 PM</p>
        </div>

        <div className="contact-map">
            <h3> 📍We are here</h3>
            <a href="https://www.google.com/maps/@42.1154318,-72.5511598,3a,75y,63.42h,90t/data=!3m7!1e1!3m5!1soso-mau7BGvfuoZlro9fGw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3Doso-mau7BGvfuoZlro9fGw%26yaw%3D63.42!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D"
                   target="_blank"
                   rel="nopener no referer" >Get Directions</a>
        </div>
        </div>
     </div>
    )
}