import AboutUs from "../../components/AboutUs/AboutUs";
import IntroLanding from "../../components/IntroLanding/IntroLanding";
import NavBar from "../../components/NavBar/NavBar";

export default function Landing(){
    return(
        <>
        <NavBar/>
        <div>
            <IntroLanding/>
            <AboutUs/>
        </div>
        </>
    )
}