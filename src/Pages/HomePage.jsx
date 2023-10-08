import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/hero";
import About from "../components/About/About";
import DevelopersHome from "../components/DevelopersHome/DevelopersHome";
const HomePage = () => {
    return(
        <>
<div style={{position:'relative'}} className="App">
        <Navbar/>
        <Hero />
        <About/>
        <DevelopersHome/>
    </div>
    </>
    )
}

export default HomePage;