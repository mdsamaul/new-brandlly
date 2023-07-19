import Banner from "../Banner/Banner.jsx";
import LetsTryBrandlly from "../LetsTryBrandlly/LetsTryBrandlly.jsx";
import ServicesSection from "../ServicesSection/ServicesSection.jsx";
import Fashion from './../Fashion/Fashion';

const Home = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Banner></Banner>
            <ServicesSection></ServicesSection>
                <Fashion></Fashion>
                {/* <ElectricalElectronics></ElectricalElectronics>
            <StationeryTools></StationeryTools> */}
            </div>
            
            <LetsTryBrandlly></LetsTryBrandlly>
        </div>
    );
};

export default Home;