import Pic from '../assets/pic.png'
export default function Footer() {
    return(
        <>
        <div>
            <div className=" w-auto h-600 rounded-3xl bg-heading mx-120 px-80 flex items-center mt-60 ">
            <div className=' flex gap-8 items-center'>
                <div className=''>
                    <h2 className=" font-heading text-32 text-white mb-32">
                    Want to  work together and create amazing <span className=" text-hover">products</span> with  me? 
                    </h2>
                    <div className=" h-100 rounded-3xl bg-section flex justify-end items-center px-15">
                    <button className=" h-80 w-160 bg-second rounded-2xl font-heading  text-white">Get a quite</button>
                    </div>
                </div>
                <div className=" w-360 h-360 shrink-0  bg-bg rounded-full flex justify-center overflow-hidden ml-32">
                  <img className=' h-360 scale-x-[-1]' src={Pic} alt="" srcset="" />
                </div>
            </div>
            </div>
        </div>
        </>
    )
}