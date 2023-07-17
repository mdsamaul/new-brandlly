import { useEffect, useState } from "react";
import WhyBrandllyCard from "./WhyBrandllyCard/WhyBrandllyCard.jsx";
const WhyBrandlly = () => {
    const [wBrandlly, setWBrandlly] = useState([]);
    useEffect(() => {
        fetch('whyBrandlly.json')
            .then(res => res.json())
            .then(data => setWBrandlly(data))
            .catch(error => console.log(error))
    }, []);
    return (
        <div className="container mx-auto mb-10">
            <div className="w-full py-10 text-center">
                <h2 className="pb-8 text-5xl font-bold">  Why Brandlly?
                </h2>
                <p className="mx-auto font-medium text-slate-500 lg:w-1/2 text-md">
                    Almost all of us have the same experience of waiting in checkout queues in brand shops or supermarkets. Sometimes it could be intolerable. Brandlly will remove this checkout queue and also it will save your valuable time.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mx-5 card md:grid-cols-3 lg:grid-cols-4 lg:mx-0">

                {
                    wBrandlly.map(wbitem => <WhyBrandllyCard key={wbitem.id} wbitem={wbitem}></WhyBrandllyCard>)
                }


            </div>


        </div>
    );
};

export default WhyBrandlly;