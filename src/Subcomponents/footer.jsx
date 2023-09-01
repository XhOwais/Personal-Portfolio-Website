import Pic from '../assets/pic.png'
export default function Footer() {
    return(
        <>
        <div className=' relative flex'>
            <div className=" w-auto h-600 mobile:h-auto rounded-3xl bg-heading mobile:py-42 mx-120 Desktop:mx-60 laptop:mx-60 mobile:mx-60 mobile:px-40 smallmobile:mx-25 px-80 smallmobile:px-32 flex items-center mt-60 ">
            <div className=' flex gap-8 items-center laptop:flex-col-reverse mobile:flex-col-reverse smallmobile:flex-col-reverse'>
                <div className=''>
                    <h2 className=" font-heading text-32 mobile:text-24 laptop:text-24 text-white mb-32">
                    Want to  work together and create amazing <span className=" text-hover">products</span> with  me? 
                    </h2>
                    <div className=" h-100 rounded-3xl bg-section flex justify-end items-center px-15">
                    <button className=" h-80 w-160 bg-second rounded-2xl font-heading  text-white">Get a quite</button>
                    </div>
                </div>
                <div className=" w-360 h-360 laptop:w-300 laptop:h-300 mobile:w-260  mobile:h-260 shrink-0  bg-bg rounded-full flex justify-center overflow-hidden ml-32">
                  <img className=' h-360 laptop:h-300 mobile:h-260 scale-x-[-1]' src={Pic} alt="" srcset="" />
                </div>
            </div>
            </div>
            <div className=' w-full h-450 bg-second absolute -z-50 top-80 mobile:top-96'>

            </div>
        </div>
        </>
    )
}