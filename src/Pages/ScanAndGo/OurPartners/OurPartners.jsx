import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PartnerDesign from "./PartnerDesign/PartnerDesign.jsx";

const OurPartners = () => {
    const [partners, setPartners] = useState([]);
    useEffect(() => {
        fetch('partners.json')
            .then(res => res.json())
            .then(data => setPartners(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="container mx-auto mb-10">
            <div className="w-full py-10 text-center">
                <h2 className="pb-3 text-5xl font-bold">  Our Partners</h2>
                <p className="mx-auto font-medium text-slate-500 lg:w-1/2 text-md">Shop with your favorite supermarket and brand shop. Country’s top 11 Brands are now with Brandlly and still counting…</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mx-4 md:grid-cols-3 lg:grid-cols-5 lg:mx-0">

                {
                    partners.map(partner => <PartnerDesign key={partner.id} partner={partner} ></PartnerDesign>)
                }

            </div>
            <div className="text-center ">
                <Link to="#"> <button type="btn" className="btn w-64 bg-[#c32148] text-white hover:border hover:border-[#c32148] hover:text-[#c32148] hover:gap-x-3"  >See All {partners.length} Partners <FaLongArrowAltRight />
                </button></Link>
            </div>
        </div>
    );
};

export default OurPartners;