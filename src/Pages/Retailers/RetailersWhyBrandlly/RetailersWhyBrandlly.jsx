import { useEffect, useState } from "react";
import WhyBrandllyCard from "../../ScanAndGo/WhyBrandlly/WhyBrandllyCard/WhyBrandllyCard.jsx";
const RetailersWhyBrandlly = () => {
    const [rwBrandlly, setrwBrandlly] = useState([])
    useEffect(() => {
        fetch('retailersWhyBrandlly.json')
            .then(res => res.json())
            .then(data => setrwBrandlly(data))
            .catch(error => console.log(error))
    }, [])
    console.log(rwBrandlly);
    return (
        <div className="container mx-auto mb-10">
            <div className="w-full py-10 text-center">
                <h2 className="pb-3 text-5xl font-bold">  Why Brandlly?</h2>
                <p className="mx-auto font-medium text-slate-500 lg:w-1/2 text-md">Brandlly will help you to sell all over the country without any outlet installation costs. Only for retail Brand’s</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mx-5 card md:grid-cols-3 lg:grid-cols-4 lg:mx-0">

                {
                    rwBrandlly.map(wbitem => <WhyBrandllyCard key={wbitem.id} wbitem={wbitem}></WhyBrandllyCard>)
                }
            </div>

        </div>
    );
};

export default RetailersWhyBrandlly;