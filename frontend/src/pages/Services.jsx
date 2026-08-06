import EverWashWidget from "../components/EverWashWidget";
import car from "../assets/car2.jpg"
import  sud from "../assets/Suds.jpg"
export default function Services(){

  return(
    <div className="services-container">
      <div className="heros">
      <img src={sud} alt="car wash image" className="hero-images"/>
     <div className="hero-cards">
     <h2> Wash N Go Services</h2>
     <p >Choose a membership plan and keep your vehicle clean with our 
         subscription services.
         </p>
     <p className="promo">Free Vaccuum with every wash!!!</p>
     </div>
     </div>
       <div className="widget">
      <EverWashWidget />
     </div>
    </div>
  )
}