
const RetailersFAQ = () => {
    return (
        <div className="container mx-auto mb-10">
            <div className="w-full pt-10 text-center">
                <h2 className="pb-8 text-5xl font-bold">  FAQs
                </h2>
                <p className="mx-auto font-medium text-slate-500 lg:w-1/2 text-md">
                    Some frequently asked questions are given below that our brand partner needs to know. Obviously you are always welcome to call or chat to know Brandlly better.</p>
            </div>
            <div className="grid grid-cols-1 text-center lg:grid-cols-2">

                <div className="flex items-center justify-center w-full h-full">
                    <div className="">
                        <div className="flex gap-4 mb-4">
                            <input type="text" placeholder="Name" className="w-full max-w-xs input input-bordered input-info" />
                            <input type="text" placeholder="Email" className="w-full max-w-xs input input-bordered input-info" />
                        </div>
                        <div>
                            <textarea className="w-full textarea textarea-info" placeholder="FAQ Your Qustion"></textarea>
                        </div>

                        <div>
                            <button className="btn btn-outline btn-info btn-block">Send</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://www.brandlly.com/assets/landings/assets/images/faq-new.svg" className="mx-auto  pb-10 lg:p-24 w-[420px] lg:w-full" alt="" />
                </div>
            </div>

        </div>
    );
};

export default RetailersFAQ;