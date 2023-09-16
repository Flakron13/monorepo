import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./components/List";
import OptionDetails from "./components/OptionDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="vw-100 vh-100 d-flex flex-column">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<List />} />
            <Route path="/option/:id" element={<OptionDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
