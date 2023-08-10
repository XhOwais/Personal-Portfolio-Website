import '../Subcomponents/Aboutme.css'
import Pic2 from '../assets/pic2.png'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/js.png'
import ReactJs from '../assets/react.png'
import NodeJs from '../assets/node.png'
import ExpressJs from '../assets/express.png'
import Vite from '../assets/vite.png'
import MongoDb from '../assets/mongo.png'
import Xd from '../assets/xd.png'
import Figma from '../assets/figma.png'
import Photoshop from '../assets/photoshop.png'
import Ae from '../assets/ae.png'
export default function Aboutme() {
    const intro = {
        text: 'Hi, my name is Owais Shah and I began using WordPress when it first began. I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites.'
    };
    const skillList = [
        {
            list: 'Front-end Expert: HTML5, CSS3, JS (ES7), Tailwind CSS, Bootstrap for responsive interfaces.'
        },
        {
            list: 'Design Skill: UI/UX with Photoshop, Adobe XD, Figma for captivating user experiences.'
        },
        {
            list: 'React & Vue Developer: Dynamic apps using React, Vue, Vite for seamless interactions.'
        },
        {
            list: 'AI Integration: Combining AI into web apps with critical thinking for enhanced experiences.'
        }
    ]
    return (
        <>
            <div className=' w-auto h-auto rounded-3xl bg-first Pc:mx-120 Desktop:mx-60 laptop:mx-60 mobile:mx-60 smallmobile:mx-25 mt-60 pb-74 laptop:pb-42 smallmobile:pb-24'>
                <div className=''>
                    <div className=' flex w-full justify-center laptop:justify-start items-center mobile:flex-col smallmobile:flex-col laptop:px-120 Pc:pt-74 Desktop:pt-74 laptop:pt-60 mobile:pt-0 mobile:-translate-y-10 smallmobile:-translate-y-10'>
                        <div className=' w-150 h-150 laptop:w-auto  laptop:h-auto smallmobile:w-80 smallmobile:h-80'>
                            <img src={Pic2} alt="" srcset="" />
                        </div>
                        <div className=' font-body text-text smallmobile:text-12 Pc:w-734  Desktop:w-734 laptop:w-564 mobile:w-auto mobile:mx-40 mobile:text-center smallmobile:text-left mobile:m-auto mobile:mt-16  ml-24 smallmobile:ml-0 smallmobile:px-25'>
                            {intro.text}
                        </div>
                    </div>
                    <div className=' flex justify-between  laptop:flex-col laptop:items-start mobile:flex-col smallmobile:block px-120 mobile:px-40 smallmobile:px-20 Desktop:px-80 Pc:mt-94 mt-60 mobile:mt-32 smallmobile:mt-10'>
                    <div className=' Desktop:pr-60 laptop:mb-24 mobile:mb-24'>
                    <div>
                        <h1 className=' Pc:w-424 Desktop:w-424  font-heading text-32 smallmobile:text-24 smallmobile:pb-12  text-white '><spam className=' text-hover '>Skill</spam> I posses as a <spam className=' text-hover '>specialist</spam></h1>
                        <ul className=' Pc:mt-32 Desktop:mt-32 laptop:mt-32 mobile:mt32'>
                            {skillList.map((item, index) => (
                                <li className=' mobile:w-auto text-text pb-16' key={index} dangerouslySetInnerHTML={{ __html: item.list }}></li>
                            ))}
                        </ul>
                    </div>
                    </div>
                    <div className=''>
                    <div className=' mb-32 '>
                    <h1 className=' font-heading text-32 smallmobile:text-24  mobile:pb-16 smallmobile:pb-12 text-white'>Programing <spam className=' text-hover '>Skill</spam></h1>
                    <div className=' flex items-center flex-wrap smallmobile:flex   gap-4 Pc:mt-32 Desktop:mt-32 laptop:mt-32 mobile:mt32'>
                    <div><img src={Html} alt="" srcset="" /></div>
                    <div><img src={Css} alt="" srcset="" /></div>
                    <div><img src={Js} alt="" srcset="" /></div>
                    <div><img src={ReactJs} alt="" srcset="" /></div>
                    <div><img src={NodeJs} alt="" srcset="" /></div>
                    <div><img src={ExpressJs} alt="" srcset="" /></div>
                    <div><img src={Vite} alt="" srcset="" /></div>
                    <div><img src={MongoDb} alt="" srcset="" /></div>
                    </div>
                    </div>
                    <div>
                    <h1 className=' font-heading text-32 smallmobile:text-24  mobile:pb-16 smallmobile:pb-12 text-white'>Designing <spam className=' text-hover '>Skill</spam></h1>
                    <div className=' flex items-center   flex-wrap  gap-4 Pc:mt-32 Desktop:mt-32 laptop:mt-32 mobile:mt32'>
                    <div><img src={Xd} alt="" srcset="" /></div>
                    <div><img src={Figma} alt="" srcset="" /></div>
                    <div><img src={Photoshop} alt="" srcset="" /></div>
                    <div><img src={Ae} alt="" srcset="" /></div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}