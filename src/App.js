import "./App.css";
// import Home from "./Components/Home";
// import Navigation from "./Components/Navigation";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        {/* <Route path="movie/:id" element={<></>}/> */}
        {/* <Route path="*" element={<Error></Error>}/> */}
      </Routes>
      {/* <Home /> */}
      {/* <Home></Home> */}
    </>
  );
}

export default App;
