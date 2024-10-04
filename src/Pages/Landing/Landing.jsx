import AboutUs from "../../components/AboutUs/AboutUs";
import ContactUs from "../../components/ContactUS/ContactUs";
import Founders from "../../components/Founders/Founders";
import IntroLanding from "../../components/IntroLanding/IntroLanding";
import NavBar from "../../components/NavBar/NavBar";

export default function Landing(){
    return(
        <>
        <NavBar/>
        <div>
            <IntroLanding/>
            <AboutUs/>
            <Founders/>
            <ContactUs/>
        </div>
        </>
    )
}