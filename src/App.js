//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Show from "./pages/Show";
import FourOFour from "./pages/FourOFour";

function App() {
  return(
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/:index" element={<Show />} />
          <Route path="/transactions/:index/edit" element={<Edit />}/>
          <Route path="/transactions/new" element={<New />}/>          
          <Route path="*" element={<FourOFour />}/>          
        </Routes>
      </Router>
    </div>
  )
};

export default App;
