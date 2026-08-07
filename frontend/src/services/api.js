//----------------api.js---handles fetch request-----------------------------------
const BASE_URL = import.meta.env.VITE_BASE_URL;


//-----------------retrieves active promotions------------------
export async function getActivePromotion() {
    try {
        const response = await fetch(`${BASE_URL}/promotions/active`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
}

//--------------Login credentials--------------------------------------------------
export async function userLogin(email,password){

    
      try{
        const response=await fetch(`${BASE_URL}/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email,
                password,
            }),
        });
      const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
}