import ShopRating from "../../component/ShopRating/ShopRating";
import { BsShieldCheck } from "react-icons/bs";
import LogoRatingVerified from "../../component/LogoRatingVerified/LogoRatingVerified";
import BannerParallax from "../../component/BannerParallax/BannerParallax";
import HeaderBrandLogo from "../../component/HeaderBrandLogo/HeaderBrandLogo";
import useProductdata from "../../Hooks/useProductdata/useProductdata";
import ProductTab from "../../component/ProductTab/ProductTab";

const FreedomBangladesh = ({ items }) => {
  console.log(items);

  items.filter((i) => console.log(i));

  const freedomBangladeshShop = items.filter(
    (item) => item.brandname === "freedom Bangladesh"
  );
  return (
    <div>
      <HeaderBrandLogo
        shoplogo={"https://www.brandlly.com/storage/logo/63e242e9db64d.png"}
      ></HeaderBrandLogo>
      <div className="relative w-full h-66">
        <BannerParallax
          bannerimg={
            "https://www.brandlly.com/storage/banner/62b989271bf2e.jpg"
          }
        ></BannerParallax>
        <LogoRatingVerified
          shoplogo={"https://www.brandlly.com/storage/logo/63e242e9db64d.png"}
        ></LogoRatingVerified>
      </div>
      <div className="w-full lg:pl-[28%] mb-5">
        <div>
          <ShopRating rating={"4.5"}></ShopRating>
        </div>
        <div className="flex items-center gap-1 text-green-700">
          <span>
            <BsShieldCheck className="text-xs" />
          </span>
          <small className="text-xs"> Verified</small>
        </div>
      </div>

      <div className="my-3">
        <ProductTab items={freedomBangladeshShop}></ProductTab>
      </div>
    </div>
  );
};

export default FreedomBangladesh;
