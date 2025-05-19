import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { PC } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {

  const [products] = useContext(PC);

  const {search} = useLocation();
  const category =  decodeURIComponent( search.split("=")[1]);


  const [filteredProducts,setfilteredProducts]=useState(null);

  /*const getproductgategory = async () => {
    try {
      const { data } = await axios(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (err) {
      console.log(err);
    }
  }*/

  useEffect(() =>{
    if (!filteredProducts || category == "undefined") setfilteredProducts(products); 
    if (category != "undefined") {
      //getproductgategory(); 
      setfilteredProducts(products.filter(p => p.category == category));
    }

  }, [category, products]);


  return products ? (
    <>
      <Nav />

      <div className=" bg-[#f7f8fa] w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts && filteredProducts.map(item => {
          return (
            <Link key={item.id}
              to={`/details/${item.id}`}
              className="mr-3 mb-3 card p-3 border border-zinc-200 shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center"
            >
              <div
                className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center hover:scale-110"
                style={{
                  backgroundImage:
                    `url(${item.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-300">{item.title}</h1>
            </Link>
          );
        })}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
