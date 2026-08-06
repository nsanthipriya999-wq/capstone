import EverWashWidget from "../components/EverWashWidget";

export default function SignUp() {
  return (
    <div className="signup-container">

      <h2>Welcome to Wash N Go</h2>
      <p>Dear Customers, please click on the link below to join or login to your Membership</p>
      <p>Click here 👇</p><a href="https://app.everwash.com/#register"
        target="_blank"
        rel="nopener noreferer" >

       EverWash App</a>
        <EverWashWidget />

    </div>


  )
}