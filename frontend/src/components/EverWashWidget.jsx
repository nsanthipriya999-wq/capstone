
//-----------------------EverWashWidget.jsx---------------------------------------------

import { useEffect, useRef } from "react";

export default function EverWashWidget() {
  //--------------------------------useEffect------------------------------------------
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.everwash.com/widget/widget.js";  //loads the external everwash widget javascript file
    script.type = "text/javascript";
    script.async = "true";                                       //loads asynchronously
    script.setAttribute("data-location-id", "41");      //location id for Wash N Go
    script.setAttribute("data-style", "purple");         //widget theme style
    document.body.appendChild(script);                  // adds the script into web page
    return () => {                                      //  clean up runs
      const widget = document.getElementById("ew-widget");
      if (widget){
        widget.innerHTML = ""
      }
        script.remove();                                //script tag removes from  the page.
      };
  }, []);

//--------------------------------Everwash widget-------------------------------------------
  return (
    <div
      id="ew-widget"
      className="everwash-widget" >
    </div>
  );
}