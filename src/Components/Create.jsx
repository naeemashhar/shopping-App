import React, { useContext, useState } from "react";
import { PC } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Create = () => {
  const navigate = useNavigate();

  const [products, setproducts] = useContext(PC);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each field must be filled with at least 5 characters");
      return;
    }

    const prod = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products, prod]);
    localStorage.setItem("products", JSON.stringify([...products, prod]));
    toast.success("Product Added Successfully"); //premium notification
    navigate("/");
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="bg-[#f7faff] p-12 w-screen min-h-screen flex flex-col items-center"
    >
      <h1
        className="
      w-1/2 mb-8 text-4xl font-extrabold text-center
      text-gray-800
      hover:text-sky-600 hover:scale-105
      transition-transform duration-300
      select-none
    "
      >
        Add New Product
      </h1>

      {/* Input fields */}
      <input
        type="url"
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)}
        value={image}
        className="
      text-lg w-1/2 mb-6
      rounded-md
      border border-gray-300
      bg-white
      p-3
      shadow-sm
      focus:outline-none focus:ring-2 focus:ring-sky-400
      transition
      placeholder-gray-400
    "
      />

      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="
      text-lg w-1/2 mb-6
      rounded-md
      border border-gray-300
      bg-white
      p-3
      shadow-sm
      focus:outline-none focus:ring-2 focus:ring-sky-400
      transition
      placeholder-gray-400
    "
      />

      <div className="w-1/2 flex justify-between mb-6">
        <input
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="
        text-lg w-[48%]
        rounded-md
        border border-gray-300
        bg-white
        p-3
        shadow-sm
        focus:outline-none focus:ring-2 focus:ring-sky-400
        transition
        placeholder-gray-400
      "
        />

        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className="
        text-lg w-[48%]
        rounded-md
        border border-gray-300
        bg-white
        p-3
        shadow-sm
        focus:outline-none focus:ring-2 focus:ring-sky-400
        transition
        placeholder-gray-400
      "
        />
      </div>

      <textarea
        rows="8"
        placeholder="Enter Product Description Here ..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="
      text-base w-1/2 mb-8
      rounded-md
      border border-gray-300
      bg-white
      p-3
      shadow-sm
      resize-none
      focus:outline-none focus:ring-2 focus:ring-sky-400
      transition
      placeholder-gray-400
    "
      ></textarea>

      <div className="w-1/2 flex justify-center">
        <button
          type="submit"
          className="
        text-sm px-8 py-3
        bg-sky-500 text-white font-semibold rounded-md
        shadow-md border border-sky-500
        hover:bg-white hover:text-sky-500 hover:border-sky-500
        transition
        duration-300
        focus:outline-none focus:ring-2 focus:ring-sky-400
      "
        >
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
