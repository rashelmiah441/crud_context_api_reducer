import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import { TodoProvider } from "./contexts/Todocontext";
import Editpage from "./components/Editpage";

function App() {
   return (
      <div className="App">
         <TodoProvider>
            <BrowserRouter>
               <Header />
               <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact/:id" element={<Contact />} />
                  <Route path="/edit/:id" element={<Editpage />} />
               </Routes>
            </BrowserRouter>
         </TodoProvider>
      </div>
   );
}

export default App;
