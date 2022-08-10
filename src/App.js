import { useState } from "react";
import Navbar from "./components/Navbar";
// import SideNavbar from "./components/SideNavbar";

function App() {
  const [click, setClick] = useState(false);
  return (
    <div className="App">
   {/* <SideNavbar/> */}
   <Navbar/>

    </div>
  );
}

export default App;
