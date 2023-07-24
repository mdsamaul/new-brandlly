
const HeaderBrandLogo = ({shoplogo}) => {
    return (
        <div>
            <div className="hidden opacity-40 animate-pulse lg:block fixed -top-2  z-50 left-[30%] w-32    ">
                    <img src={shoplogo} className="p-3" alt="" />
                </div>
        </div>
    );
};

export default HeaderBrandLogo;