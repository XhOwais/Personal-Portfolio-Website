import React from "react";
import './portfolio.css';
export default function Portfolio(){
    return(
        <>
          <div className=" flex justify-between gap-8 mt-60 Pc:mx-120  Desktop:mx-120 laptop:mx-120 laptop:mt-32 mobile:mx-60 mobile:mt-32 smallmobile:mx-32 smallmobile:flex-col smallmobile:items-end  smallmobile:mt-32">
            <h2 className=" font-heading text-32 laptop:text-24 mobile:text-24 smallmobile:text-24  text-heading">Let’s have a <span className=" text-hover">look</span> at my <span className=" text-hover">portfolio</span></h2>
            <div className="">
            <a className=" py-22 px-40 rounded-xl bg-heading font-heading text-hover" href="">
                Ui/Ux
            </a>
            </div>
          </div>
          <div className=" Pc:mx-120 Desktop:mx-60 laptop:mx-60 mobile:mx-60 smallmobile:mx-25 mt-60">
            <div className=" flex gap-8 mobile:flex-col smallmobile:flex-col">
                <div className=" w-full h-550 laptop:h-450 smallmobile:h-300 rounded-3xl p-32 smallmobile:px-25 bg-heading"> 
                    <div className=" w-auto h-full rounded-3xl bg-white">
                    </div>
                </div>
                <div className=" w-full h-550 laptop:h-450 smallmobile:h-300 rounded-3xl p-32 smallmobile:px-25 bg-heading">
                <div className=" w-auto h-full rounded-3xl bg-white">
                    </div>
                </div>
            </div>
            <div className=' h-auto w-auto py-30 Pc:w-980 Desktop:w-980 laptop:w-auto laptop:mx-120 mobile:mx-60 smallmobile:mx-30 mobile:mt-40 mobile:flex-col smallmobile:flex-col  bg-white rounded-3xl px-32 flex justify-center items-center m-auto mt-32'>
                 <button className=' font-heading text-24 h-90 Pc:w-full Desktop:w-full laptop:w-full mobile:w-full smallmobile:w-full mobile:text-16 smallmobile:text-12   laptop:text-16 laptop:mr-20  rounded-2xl bg-first text-white'>Know More About ME</button>
            </div>
          </div>
        </>
    )
}   