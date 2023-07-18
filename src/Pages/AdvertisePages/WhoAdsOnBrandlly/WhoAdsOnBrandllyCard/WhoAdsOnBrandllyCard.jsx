
const WhoAdsOnBrandllyCard = ({ wabitem }) => {


    console.log(wabitem.imageName);

    return (
        <div className="border rounded shadow mb-10">
            {/* <img src={wabitem.imageName} alt="" /> */}
            <figure className="pt-5">
                <img src={wabitem.imageName} alt="Shoes" className="w-20 h-20 rounded-xl mask mask-decagon bg-[#C32148] p-4" />
            </figure>
            <div className="text-left px-5 card-body">
                <h2 className="card-title">{wabitem.title}</h2>
                <p className="flex items-center justify-start text-sm">{wabitem.subtitle}</p>

            </div>
        </div>
    );
};

export default WhoAdsOnBrandllyCard;