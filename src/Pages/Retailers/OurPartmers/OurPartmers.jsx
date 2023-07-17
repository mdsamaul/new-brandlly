import OurPartnersSlider from "./OurPartnersSlider/OurPartnersSlider.jsx";
const OurPartmers = () => {
    return (
        <div className="container mx-auto mb-10">
            <div className="w-full py-10 text-center">
                <h2 className="pb-3 text-5xl font-bold">  Our Partners</h2>
                <p className="mx-auto font-medium text-slate-500 lg:w-1/2 text-md">Our Partners The country’s top 02 brands are our partners. We are now a huge retail community. Join Quickly to be a proud member of our community.</p>
            </div>
            <div>
                <OurPartnersSlider />
            </div>

        </div>
    );
};

export default OurPartmers;