import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { PC } from "../utils/Context";
import { toast } from "react-toastify";

const Details = () => {
  const [products, setproducts] = useContext(PC);

  const [product, setproduct] = useState(null);
    
  const {id} = useParams();


  const navigate = useNavigate();

 
  const DeleteProduct = (id) => {
    const copyproducts = products.filter((p) => p.id != id);
    setproducts(copyproducts);
    localStorage.setItem("products", JSON.stringify(copyproducts));
    toast.info("Product Deleted Successfully");//premium notification
    navigate("/");
  }

  /*
    const getsingleproduct= async () =>{
      try{
        const {data } = await axios.get(`/products/${id}`);
        setproduct(data);
      }catch(err){
        console.log(err);
      }
    }*/

    useEffect(() =>{
      if(products && !product ){
        setproduct(products.filter((p) => p.id == id)[0]);
      }
      //getsingleproduct();

    },[products,id,product]);


  return product ? (
  <div className="max-w-5xl mx-auto my-16 p-8 bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 transition-transform duration-300 hover:scale-[1.02]">
    <img
      className="w-full md:w-1/3 object-contain rounded-lg shadow-md"
      src={product.image}
      alt={product.title}
    />

    <div className="flex flex-col w-full md:w-2/3">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.title}</h1>
      <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">{product.category}</h3>
      <h2 className="text-2xl text-red-600 font-semibold mb-6">${product.price}</h2>
      <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>

      <div className="flex gap-4">
        <Link
          to={`/edit/${product.id}`}
          className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Edit
        </Link>
        <button
          onClick={() => DeleteProduct(product.id)}
          className="px-6 py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
) : (
  <Loading />
);

};

export default Details;
