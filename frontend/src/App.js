import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

// Placeholder components for routes not yet built
const Blog = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Blog Page - Coming Soon</h1></div>;
const Contact = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Contact Page - Coming Soon</h1></div>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
