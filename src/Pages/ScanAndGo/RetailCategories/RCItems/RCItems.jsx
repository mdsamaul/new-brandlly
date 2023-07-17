
const RCItems = ({ items }) => {

    return (
        <div className="container border shadow-md rounded-md cursor-pointer ">
            <div className="py-10">
                <img src={items.image} className="w-10   mx-auto hover:animate-bounce duration-700 box-border" alt="" />
                <h2 className="text-md font-semibold text-red-800 py-2">{items.name}</h2>
            </div>
        </div>
    );
};

export default RCItems;