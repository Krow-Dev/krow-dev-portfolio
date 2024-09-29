import './App.css'
import Home from "./pages/Home";
import NavBar from "./components/NavBar.tsx";
import SideBar from "./components/SideBar.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import ContactUs from "./pages/ContactUs.tsx";

function App() {
    return (
        <div className="app-container">
            <NavBar/>
            <div className="main-content">
                <SideBar/>
                <div className="page-content">
                    <Home/>
                    <About/>
                    <Projects/>
                    <ContactUs/>
                </div>
            </div>
        </div>
    );
}

export default App;
