
const SameHeading = ({ title, subTitle }) => {
    return (
        <div className="container mx-auto mb-10">
            <div className="w-full py-10 text-center">
                <h2 className="pb-3 text-5xl font-bold">  {title}</h2>
                <p className="mx-auto font-medium text-slate-500 lg:w-1/2 text-md">{subTitle}</p>
            </div>
        </div>
    );
};

export default SameHeading;