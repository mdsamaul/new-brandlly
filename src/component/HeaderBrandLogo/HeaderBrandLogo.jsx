
const HeaderBrandLogo = ({shoplogo}) => {
    return (
        <div>
            <div className="hidden opacity-50 lg:block fixed -top-7  z-50 left-[30%] w-52    ">
                    <img src={shoplogo} className="p-3" alt="" />
                </div>
        </div>
    );
};

export default HeaderBrandLogo;