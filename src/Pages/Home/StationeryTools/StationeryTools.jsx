import BrandCard from "../../../component/BrandCard/BrandCard.jsx";

const StationeryTools = () => {
    return (
        <div className="mb-10 mx-5 lg:mx-0">


            <h3 className="text-3xl font-bold text-slate-600">Stationery & Tools</h3>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <BrandCard image={'https://www.brandlly.com/storage/logo/63e2460c3f9c6.png'} brandName={'Deli'} pathBrand={'#'} subTitle={'Stationery & Tools'} pathShopnow={'#'}></BrandCard>

            </div>
        </div>
    );
};

export default StationeryTools;