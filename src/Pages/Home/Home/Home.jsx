import Banner from "../Banner/Banner.jsx";
import ElectricalElectronics from "../ElectricalElectronics/ElectricalElectronics.jsx";
import Fashion from "../Fashion/Fashion.jsx";
import LetsTryBrandlly from "../LetsTryBrandlly/LetsTryBrandlly.jsx";
import ServicesSection from "../ServicesSection/ServicesSection.jsx";
import StationeryTools from "../StationeryTools/StationeryTools.jsx";

const Home = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <Fashion></Fashion>
            <ElectricalElectronics></ElectricalElectronics>
            <StationeryTools></StationeryTools>
            </div>
            
            <LetsTryBrandlly></LetsTryBrandlly>
        </div>
    );
};

export default Home;