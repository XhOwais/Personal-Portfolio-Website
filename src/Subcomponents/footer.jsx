import Pic from '../assets/pic.png';
import Behance from '../assets/Behance.svg';
import Github from '../assets/Github.svg';
import Devfolio from '../assets/Devfolio.svg';
import Linkedin from '../assets/Linkedin.svg';

export default function Footer() {
    return (
        <>
            <div className=' relative flex'>
                <div className=" w-auto h-600 mobile:h-auto smallmobile:h-auto rounded-3xl bg-heading mobile:py-42 smallmobile:py-42 mx-120 Desktop:mx-60 laptop:mx-60 mobile:mx-60 mobile:px-40 smallmobile:mx-25 px-80 smallmobile:px-32 flex items-center mt-60 ">
                    <div className=' flex gap-8 items-center laptop:flex-col-reverse mobile:flex-col-reverse smallmobile:flex-col-reverse'>
                        <div className=''>
                            <h2 className=" font-heading text-32 mobile:text-24 smallmobile:text-24  laptop:text-24 text-white mb-32">
                                Want to  work together and create amazing <span className=" text-hover">products</span> with  me?
                            </h2>
                            <div className=" h-100 rounded-3xl bg-section flex justify-end  items-center px-15">
                                <button className=" h-80 w-160 mobile:text-12 bg-second rounded-2xl font-heading  text-white">Get a quite</button>
                            </div>
                        </div>
                        <div className=" w-360 h-360 laptop:w-300 laptop:h-300 mobile:w-260  mobile:h-260 smallmobile:w-220 smallmobile:h-220 shrink-0  bg-bg rounded-full flex justify-center overflow-hidden ml-32">
                            <img className=' h-360 laptop:h-300 mobile:h-260 smallmobile:h-220 scale-x-[-1]' src={Pic} alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className=' w-full h-450 bg-second absolute -z-50 top-80 mobile:top-96 translate-y-24 flex justify-center'>
                    <ul className='h-140 smallmobile:h-90 flex justify-between px-30 smallmobile:px-15 rounded-3xl items-center gap-8 smallmobile:gap-4 mobile:w-auto smallmobile:w-auto bg-bg absolute bottom-6'>
                        <li className=' w-96 h-96 smallmobile:w-60 smallmobile:h-60 bg-heading rounded-xl flex justify-center items-center'><a href=""> <img className='w-60 smallmobile:w-45' src={Behance}  /></a></li>
                        <li className=' w-96 h-96 smallmobile:w-60 smallmobile:h-60 bg-heading rounded-xl flex justify-center items-center'><a href=""> <img className='w-60 smallmobile:w-45' src={Github}  /></a></li>
                        <li className=' w-96 h-96 smallmobile:w-60 smallmobile:h-60 bg-heading rounded-xl flex justify-center items-center'><a href=""> <img className='w-60 smallmobile:w-45' src={Devfolio}  /></a></li>
                        <li className=' w-96 h-96 smallmobile:w-60 smallmobile:h-60 bg-heading rounded-xl flex justify-center items-center'><a href=""> <img className='w-60 smallmobile:w-45' src={Linkedin}  /></a></li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}