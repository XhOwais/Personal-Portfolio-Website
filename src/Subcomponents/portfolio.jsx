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
            <a className=" px-60 py-60 rounded-full bg-second" href=""></a>
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
          </div>
        </>
    )
}