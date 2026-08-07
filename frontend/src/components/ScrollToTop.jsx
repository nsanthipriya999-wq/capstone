//-------------------------ScrollToTop.jsx------------------------------------------

import { useEffect } from "react";
import { useLocation } from "react-router";  //get info about the current url/location

export default function ScrollToTop(){
    const {pathName}=useLocation;
    useEffect(()=>{
        window.scrollTo(0,0);   //scrolls the browser window to the top left corner of the page.
    },[pathName]);
    return null;
}