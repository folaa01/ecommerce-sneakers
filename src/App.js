import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import "./App.css";
import Home from "./routes/home/home";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Navigation/>} >
    //     <Route index element={<Home/>} />
    //     </Route>
    // </Routes>
    // </Router>

    <Router>
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<div> <Home/> </div>} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
