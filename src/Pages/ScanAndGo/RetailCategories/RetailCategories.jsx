import { useEffect, useState } from "react";
import RCItems from "./RCItems/RCItems.jsx";

const RetailCategories = () => {
    const [rcItems, setrcItems] = useState([]);

    useEffect(() => {
        fetch('retailCategory.json')
            .then(res => res.json())
            .then(data => setrcItems(data))
            .catch(error => console.log(error))

    }, []);


    return (
        <div className="pb-10 pt-5">
            <div>
                <h2 className="text-4xl text-center font-bold pb-10">Retail Categories</h2>
            </div>
            <div className="container mx-auto ">
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 text-center gap-4 mx-3 lg:mx-0 " >
                    {
                        rcItems.map(items => <RCItems key={items.id} items={items}></RCItems>)
                    }
                </div>
            </div>
            <div >

            </div>
        </div>
    );
};

export default RetailCategories;