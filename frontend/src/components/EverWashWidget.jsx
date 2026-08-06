import { useEffect, useRef } from "react";



export default function EverWashWidget() {

 
  useEffect(() => {
   
    const script = document.createElement("script");
    script.src = "https://widget.everwash.com/widget/widget.js";
    script.type = "text/javascript";
    script.async = "true";
    script.setAttribute("data-location-id", "41");
    script.setAttribute("data-style", "purple");
    document.body.appendChild(script);
    return () => {
      const widget = document.getElementById("ew-widget");
      if(widget)
      widget.innerHTML = ""
  
    script.remove();
};
  }, []);


  return (
    <div
      id="ew-widget"
      className="everwash-widget" >
    </div>
  );
}