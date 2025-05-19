import React, { createContext,  useState } from 'react'
    

export const PC = createContext();

const Context = (props) => {

    
    const [products, setproducts] = useState(JSON.parse(localStorage.getItem("products")) || null);

    /*
    const getproducts = async () => {
        try{
            const {data} = await axios("/products");
            setproducts(data);
        }catch(err){
            console.log(err);
        }
    };
    
    useEffect(() => {
        getproducts();  
    },[]);*/

  return (
    <PC.Provider value={[products, setproducts]}>
      {props.children}
    </PC.Provider>
  )
}

export default Context
