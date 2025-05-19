import React, { useContext, useEffect, useState } from "react";
import { PC } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const [products, setproducts] = useContext(PC);

  const navigate = useNavigate();
  const { id } = useParams();
  const [p, setP] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const changehandler = (e) => {
    //console.log(e.target.name,e.target.value);

    setP({ ...p, [e.target.name]: e.target.value });
  };



  useEffect(() => {
    setP(products.filter((p) => p.id == id)[0]);
  }, [id]);



  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      p.title.trim().length < 5 ||
      p.image.trim().length < 5 ||
      p.category.trim().length < 5 ||
      isNaN(p.price) || Number(p.price) <= 0 ||
      p.description.trim().length < 5
    ) {
      alert(
        "Each field must be filled with at least 5 characters, and price must be a valid number greater than 0."
      );
      return;
    }


    const pind= products.findIndex((p) => p.id == id);

    const copydata = [...products];
    copydata[pind]= {...products[pind], ...p};


 
    setproducts(copydata);
    localStorage.setItem("products", JSON.stringify(copydata));
    toast.success("Product Edited Successfully");//premium notification
    navigate(-1);

  };

  return (
    <form
  onSubmit={AddProductHandler}
  className="bg-[#f7f4f6] p-12 w-screen min-h-screen flex flex-col items-center"
>
  <h1
    className="
      w-1/2 mb-8 text-4xl font-extrabold text-center
      text-gray-800
      hover:text-red-500 hover:scale-105
      transition-transform duration-300
      select-none
    "
  >
    Edit Product
  </h1>

  {/* Input fields */}
  <input
    type="url"
    placeholder="Image URL"
    name="image"
    onChange={changehandler}
    value={p && p.image}
    className="
      text-lg w-1/2 mb-6
      rounded-md
      border border-gray-300
      bg-white
      p-3
      shadow-sm
      focus:outline-none focus:ring-2 focus:ring-red-400
      transition
      placeholder-gray-400
    "
  />

  <input
    type="text"
    placeholder="Title"
    name="title"
    onChange={changehandler}
    value={p && p.title}
    className="
      text-lg w-1/2 mb-6
      rounded-md
      border border-gray-300
      bg-white
      p-3
      shadow-sm
      focus:outline-none focus:ring-2 focus:ring-red-400
      transition
      placeholder-gray-400
    "
  />

  <div className="w-1/2 flex justify-between mb-6">
    <input
      type="text"
      placeholder="Category"
      name="category"
      onChange={changehandler}
      value={p && p.category}
      className="
        text-lg w-[48%]
        rounded-md
        border border-gray-300
        bg-white
        p-3
        shadow-sm
        focus:outline-none focus:ring-2 focus:ring-red-400
        transition
        placeholder-gray-400
      "
    />

    <input
      type="number"
      placeholder="Price"
      name="price"
      onChange={changehandler}
      value={p && p.price}
      className="
        text-lg w-[48%]
        rounded-md
        border border-gray-300
        bg-white
        p-3
        shadow-sm
        focus:outline-none focus:ring-2 focus:ring-red-400
        transition
        placeholder-gray-400
      "
    />
  </div>

  <textarea
    rows="8"
    placeholder="Enter Product Description Here ..."
    name="description"
    onChange={changehandler}
    value={p && p.description}
    className="
      text-base w-1/2 mb-8
      rounded-md
      border border-gray-300
      bg-white
      p-3
      shadow-sm
      resize-none
      focus:outline-none focus:ring-2 focus:ring-red-400
      transition
      placeholder-gray-400
    "
  ></textarea>

  <div className="w-1/2 flex justify-center">
    <button
      type="submit"
      className="
        text-sm px-8 py-3
        bg-red-500 text-white font-semibold rounded-md
        shadow-md border border-red-500
        hover:bg-white hover:text-red-500 hover:border-red-500
        transition
        duration-300
        focus:outline-none focus:ring-2 focus:ring-red-400
      "
    >
      Save Changes
    </button>
  </div>
</form>

  );
};

export default Edit;
