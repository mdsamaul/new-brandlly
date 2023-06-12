import BrandCard from "../../../component/BrandCard/BrandCard.jsx";

const Fashion = () => {
    return (
        <div className="mb-10">


            <h3 className="text-3xl font-bold text-slate-600">Fashion</h3>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <BrandCard image={'https://www.brandlly.com/storage/logo/63e2456f974e0.png'} brandName={'Topman Bangladesh'} pathBrand={'https://www.brandlly.com/brand/eyJpdiI6InlpNW0waGZUXC9heEpDRjJQclI4MXJnPT0iLCJ2YWx1ZSI6Ik9CS0lNY2RwTDVDdlY5QlhHalVPa2c9PSIsIm1hYyI6IjMyNzdkMDUxNDhmMDg5YWQ1MDk4MzQ1NDM0MjI3OGJjOGFjZDBkNDAxYjZhMmY0ZmE4NWM5ZGMwNzIwNTA0MTkifQ=='} subTitle={'Fashion'} pathShopnow={'https://www.brandlly.com/brand/eyJpdiI6Im5zbDdqbU96SVZiS2tUcFVyMFhCU1E9PSIsInZhbHVlIjoiU3VQK2ZBOEl6YkdzNnRoYUtWMkswZz09IiwibWFjIjoiNDAyOTQ1Y2EwZTY3Y2E4ZjIzZDNjMGMzMGZhNWEwYjVjYmIzZTE1ZGIyMThiNzhhMzliYmRmYWZkZmVjMTBiYSJ9'}></BrandCard>
                <BrandCard image={'https://www.brandlly.com/storage/logo/63e242e9db64d.png'} brandName={'Freedom Bangladesh'} pathBrand={'https://www.brandlly.com/brand/eyJpdiI6IlRpSk15aVZOek42K1QyVExOT3Z0aEE9PSIsInZhbHVlIjoiajBxYTB3TFNNSFBSMmxiUzVkVDJtQT09IiwibWFjIjoiMjA5OTY2MmI4YjVkODI5NTg5ZjZlMmJmOWU0NjkyNTA5NTQ4NTk2Yjg5MzAyODhmMDRjZTllODhkMWNjY2RkZiJ9'} subTitle={'Fashion'} pathShopnow={'https://www.brandlly.com/brand/eyJpdiI6ImV1bnN3SkxIUUV4MFVUN3VXQkJYV0E9PSIsInZhbHVlIjoiUkh6Ym5UWXRSbXdTM3lWZ1NsS21YUT09IiwibWFjIjoiZmQzMDc4ZGM3MWQwZWVhYjQ5NDI4Y2YzOTBlYjMyZDU1YjkwZWQxNWEwMGNkZWM3OTNlOTFmNzhmY2NiZjI4MSJ9'}></BrandCard>
                <BrandCard image={'https://www.brandlly.com/storage/logo/63e241657b9c1.png'} brandName={'StyleDoor'} pathBrand={'#'} subTitle={'Fashion'} pathShopnow={'#'}></BrandCard>
                <BrandCard image={'https://www.brandlly.com/storage/logo/6485b5f2869cc.png'} brandName={'Foring'} pathBrand={''} subTitle={'Fashion'} pathShopnow={''}></BrandCard>
            </div>
        </div>
    );
};

export default Fashion;