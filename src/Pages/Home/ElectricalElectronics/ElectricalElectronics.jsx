import BrandCard from "../../../component/BrandCard/BrandCard.jsx";

const ElectricalElectronics = () => {
    return (
        <div className="mb-10 mx-5 lg:mx-0">


            <h3 className="text-3xl font-bold text-slate-600">Electrical & Electronics</h3>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <BrandCard image={'https://www.brandlly.com/storage/logo/63e2401cf0055.png'} brandName={'SONY'} pathBrand={' & ElectronicsElectrical & ElectronicsElectrical'} subTitle={'Electrical & Electronics'} pathShopnow={''}></BrandCard>
                <BrandCard image={'https://www.brandlly.com/storage/logo/63e23ecc42441.png'} brandName={'Smart'} pathBrand={'#'} subTitle={'Electrical & Electronics'} pathShopnow={'#'}></BrandCard>
                <BrandCard image={'https://www.brandlly.com/storage/logo/63e23e1919c1e.png'} brandName={'Sharp'} pathBrand={'#'} subTitle={'Electrical & Electronics'} pathShopnow={'#'}></BrandCard>
                <BrandCard image={'https://www.brandlly.com/storage/logo/63e398090dcd0.png'} brandName={'Philips'} pathBrand={'#'} subTitle={'Electrical & Electronics'} pathShopnow={'#'}></BrandCard>
                <BrandCard image={'https://www.brandlly.com/storage/logo/63e894fd365a4.png'} brandName={'Havells'} pathBrand={'#'} subTitle={'Electrical & Electronics'} pathShopnow={'#'}></BrandCard>
                <BrandCard image={'https://www.brandlly.com/storage/logo/63e89990724dd.png'} brandName={'Nipro'} pathBrand={'#'} subTitle={'Electrical & Electronics'} pathShopnow={'#'}></BrandCard>

            </div>
        </div>
    );
};

export default ElectricalElectronics;