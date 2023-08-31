import React from "react";
import './portfolio.css';
export default function Portfolio(){
    return(
        <>
          <div className=" flex justify-between gap-8 mt-60 Pc:mx-120  Desktop:mx-60 laptop:mx-120 laptop:mt-32 mobile:mx-60 mobile:mt-32 smallmobile:mx-32 smallmobile:flex-col smallmobile:items-end  smallmobile:mt-32">
            <h2 className=" font-heading text-32 laptop:text-24 mobile:text-24 smallmobile:text-24  text-heading">Let’s have a <span className=" text-hover">look</span> at my <span className=" text-hover">portfolio</span></h2>
            <div className="">
            <a className=" py-22 px-40 rounded-xl bg-heading font-heading text-hover" href="">
                Ui/Ux
            </a>
            </div>
          </div>
        </>
    )
}