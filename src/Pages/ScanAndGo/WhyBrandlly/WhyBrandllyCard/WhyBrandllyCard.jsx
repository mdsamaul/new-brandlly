
const WhyBrandllyCard = ({ wbitem }) => {
    return (
        <div className="border rounded shadow h-96">
            <figure className="pt-5">
                <img src={wbitem.imageName} alt="Shoes" className="w-60 h-40 rounded-xl" />
            </figure>
            <div className="items-center text-center card-body">
                <h2 className="card-title">{wbitem.title}</h2>
                <p className="flex items-center justify-center">{wbitem.subtitle}</p>

            </div>
        </div>
    );
};

export default WhyBrandllyCard;