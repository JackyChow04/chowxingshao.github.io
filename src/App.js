import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//pages
import Home from "./pages/Home";
import Student from "./pages/Student";
import Admin from "./pages/Admin";

//components

import Layout from "./components/Layout";

function App() {


    return (
      <Router>
            <Routes>

                <Route path="home" element={<Home />} />
                <Route path="/" element={<Student />} />
                {/* Overall Layout */}
                <Route element={<Layout /> } >
                    
                    <Route path="student" element={<Student />} />
                    <Route path="admin" element={<Admin />} />
                </Route>




           </Routes>
      </Router>
  );
}

export default App;
