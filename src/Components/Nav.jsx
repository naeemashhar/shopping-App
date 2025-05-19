import { useContext } from "react";
import { PC } from "../utils/Context";
import { Link } from "react-router-dom";
const Nav = () => {
  const [product] = useContext(PC);

  let categories =
    product && product.reduce((acc, cv) => [...acc, cv.category], []);
  categories = [...new Set(categories)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()},0.6)`;
  };

  return (
    <nav className="w-[15%] h-full bg-[#f0f4f8] shadow-lg flex flex-col items-center pt-5">
      <a
        className="text-sm px-5 py-2 border rounded border-blue-200 text-blue-500  hover:border-blue-600 border-width: 20px; hover:text-blue-600 hover:scale-110 transition-all duration-300 "
        href="/create"
      >
        Add New Product
      </a>

      <hr className="my-3 w-[80%] text-zinc-400" />

      <h1
        className="
  relative
  w-[80%]
  mb-8
  mt-4
  text-xl
  font-semibold
  hover:transition-all-ease hover:font-bold
  tracking-wide
  text-gray-900
  before:absolute
  before:-bottom-2
  before:left-0
  before:w-46
  before:h-1
  before:rounded
  before:bg-gradient-to-r
  before:from-blue-600
  before:via-teal-400
  before:to-blue-600
  hover:scale-105
  transition
  duration-300
  select-none
"
      >
        Explore Category
      </h1>

      <div className="w-[80%] ">
        {categories.map((c, i) => {
          return (
            <Link
              key={i}
              to={`/?category=${c}`}
              className="flex items-center mb-3 hover:scale-110 transition-all duration-300"
            >
              <span
                style={{ backgroundColor: color() }}
                className="mr-2 rounded-full w-[1vw] h-[2vh] "
              ></span>{" "}
              {c}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
