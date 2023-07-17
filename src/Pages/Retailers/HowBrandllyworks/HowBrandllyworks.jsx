import { FaLongArrowAltRight } from 'react-icons/fa';

const HowBrandllyworks = () => {
    return (
        <div className="container mx-auto mb-10">
            <div className="w-full py-10 text-center">
                <h2 className="pb-3 text-5xl font-bold">  How Brandlly works?</h2>
                <p className="mx-auto font-medium text-slate-500 lg:w-1/2 text-md">Being a partner with Brandlly is pretty simple. Just sign our Brand Partner Agreement, List your products and get started to sell. Redefine your business experience.</p>
            </div>
            <div>
                <div className="flex items-center justify-center">
                    <div className="px-10 py-5 text-center border-2 border-[#c32148] rounded-2xl">
                        <h4 className='font-semibold text-md text-[#c32148]'>MoU Singing </h4> <br />
                        <span className='px-4 py-2 border border-[#c32148] rounded-full text-white bg-[#c32148]'>1</span>
                    </div>
                    <div>
                        <div className='relative w-8'>
                            <span><hr className='h-1 bg-[#c32148] border-[#c32148] border--2 ' />   </span><FaLongArrowAltRight className='absolute text-3xl -mt-[17px] left-6 text-[#c32148] ' />
                        </div>

                    </div>

                    <div className="px-10 py-5 ml-5 text-center border-2 border-[#c32148] rounded-2xl">
                        <h4 className='font-semibold text-md text-[#c32148]'>Upload Products </h4> <br />
                        <span className='px-4 py-2 border border-[#c32148] text-white bg-[#c32148] rounded-full bg'>2</span>
                    </div>
                    <div>
                        <div className='relative w-8'>
                            <span><hr className='h-1 bg-[#c32148] border-[#c32148] border--2 ' />   </span><FaLongArrowAltRight className='absolute text-3xl -mt-[17px] left-6 text-[#c32148] ' />
                        </div>
                    </div>
                    <div className="py-10 px-20 ml-5 text-center border-2 border-[#c32148] rounded-2xl">
                        <h4 className='text-xl font-bold text-[#c32148]'>Done</h4>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowBrandllyworks;