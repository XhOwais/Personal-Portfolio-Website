import './Hero.css'
import Pic from '../assets/pic.png'
export default function Hero() {
    const personalInfo = {
        name: 'Owais Shah',
        desig: 'Mern Stack Developer Ui/Ux Designer',
        tagline: 'transforming ideas into functional, elegant solutions - let’s collaborate!'
    }
    const aboutme = [
        {
          text:
            'Hi, my name is Adriano Smith and I began using WordPress when it first began. I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites.',
        },
        {
          text:
            'One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics, I’m able to optimize complex integrations to require little-to-no maintenance while running on their own for years.',
        },
      ];
    return (
        <>
            <div class='flex justify-between laptop:flex-wrap laptop:items-center laptop:gap-8 Pc:mt-120 Desktop:mt-120 laptop:mt-120 mobile:mt-60
            mobile:flex mobile:flex-col smallmobile:flex-col mobile:justify-center Pc:px-100 Desktop:px-100 laptop:px-120 mobile:px-60 smallmobile:mx-40'>
                <div className=' nameContainer  mobile:order-2 smallmobile:order-2 mobile:flex mobile:flex-col mobile:items-center smallmobile:flex smallmobile:flex-col smallmobile:items-center'>
                    <h1 className=' font-name text-heading 
                    Pc:text-8xl Desktop:text-72 laptop:text-72 mobile:text-64 smallmobile:text-42  Pc:-mb-16 Desktop:-mb-10 laptop:-mb-10 mobile:-mb-10'>{personalInfo.name}</h1>
                    <h3 class=' font-heading text-heading 
                    Pc:text-2xl Desktop:text-20 Desktop:mb-8 Pc:w-471 Desktop:w-400 laptop:w-300'>{personalInfo.desig}</h3>
                    <p className=' font-body text-body Desktop:mb-16 laptop:w-350'>{personalInfo.tagline}</p>
                    <button className=' w-180 h-50 bg-first rounded-lg text-white 
                    Pc:mt-32 laptop:mt-16 mobile:mt-16 smallmobile:mt-16'>Dowload resume</button>
                </div>
                <div className=' Pc:w-550 Pc:h-550 Desktop:w-450 Desktop:h-450 laptop:w-336 laptop:h-348 mobile:w-250 mobile:h-348.75 smallmobile:w-230 mobile:order-1 smallmobile:mt-32 smallmobile:order-1 Desktop:mx-30 laptop:scale-x-[-1]  bg-section rounded-full flex justify-center self-center overflow-hidden'><img className='' src={Pic} alt="" /></div>
                <div className=' w-552 mobile:w-auto smallmobile:w-auto self-end laptop:w-full mobile:order-3 smallmobile:order-3 mobile:mt-32 smallmobile:mt-32'>
                    <h4 className=' font-heading text-2xl text-heading'>About</h4>
                    {aboutme.map((item,index)=>(
                    <p key={index} className=' pb-16 font-body text-base text-body' >{item.text}</p>
                    ))}
                </div>
            </div>
        </>
    )
}
