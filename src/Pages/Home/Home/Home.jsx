import Banner from "../Banner/Banner.jsx";
import ElectricalElectronics from "../ElectricalElectronics/ElectricalElectronics.jsx";
import Fashion from "../Fashion/Fashion.jsx";
import ServicesSection from "../ServicesSection/ServicesSection.jsx";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <Fashion></Fashion>
            <ElectricalElectronics></ElectricalElectronics>
        </div>
    );
};

export default Home;