import { Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

const App = () => {
  const { search, pathname } = useLocation();

  return (
    <div className="w-screen h-screen flex ">
      {(pathname != "/" || search.length > 0) && (
        <Link
          to={"/"}
          className=" absolute left-[17%] top-[4%] text-lg text-red-300 hover:scale-110 transition-all duration-300"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
