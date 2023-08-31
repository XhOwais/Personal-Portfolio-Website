import './Services.css'
import Polygon from '../assets/Polygon.png'
import webConsultant from '../assets/WebConsultant.png'
export default function Services() {
  const servicesTagline = 'Catalyzing Digital  Visions: Crafting Web Experiences, Forging AI-Powered Solutions. ';
  const Services = [
    {
      name: 'Web Consultant',
      about1: 'Offering expertise and advice on web development and UI/UX design best practices.',
      about2: 'Providing insights on how clients can improve their online presence and reach their goals.',
      img: webConsultant,
    },
    {
      name: 'UI/UX Design',
      about1: 'Crafting user-friendly and visually appealing UI/UX designs for web applications and websites.',
      about2: 'Using tools like Adobe XD, Figma, and Photoshop for designing mockups and prototypes.',
      img: webConsultant,
    },
    {
      name: 'Web App Development',
      about1: 'Creating custom web applications tailored to clients specific needs and requirements.',
      about2: 'Utilizing your critical thinking and problem-solving skills to build AI-powered features or integrating AI capabilities into web applications.',
      img: webConsultant,
    },
    {
      name: 'Progressive Web Apps',
      about1: 'Creating PWAs with offline capabilities for app-like experience & smooth performance.',
      about2: 'Enhancing user engagement and retention through PWAs.',
      img: webConsultant,
    },
    {
      name: 'AI Integration ',
      about1: 'Incorporating AI functionalities into web applications to enhance user experience and efficiency.',
      about2: 'Exploring and learning more about AI technologies to stay updated with the latest advancements.',
      img: webConsultant,
    },
    {
      name: 'Web Security',
      about1: 'Implementing security best practices to protect web applications from common vulnerabilities.',
      about2: 'Conducting security audits and ensuring data privacy.',
      img: webConsultant,
    },
  ]
  return (
    <>
      <div className=" w-auto h-full bg-first rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl mt-60  Pc:mx-120 Pc:pb-60 Desktop:mx-60 Desktop:pb-60 laptop:mx-60 laptop:pb-60 mobile:mx-60 smallmobile:mx-25">
        <ul className=' w-auto flex justify-between mobile:flex-col mobile:pb-32 smallmobile:flex-col Pc:mx-120  Desktop:mx-80 laptop:mx-80 laptop:pt-60 mobile:mx-60 mobile:pt-42 smallmobile:mx-30 Pc:pt-60 Desktop:pt-60 default:pt-60'>
          <li className=' font-heading text-32 laptop:text-24 mobile:pb-16 text-hover'><h1><span className=' text-white'>My</span> Services</h1></li>
          <li className=' font-heading text-20 laptop:text-16 text-white Pc:w-709 Desktop:w-563 laptop:w-400'><p>{servicesTagline}</p></li>
        </ul>
        <div className=''>
        {Services.map((item, index) => (
          <div className=' w-auto h-auto bg-second rounded-3xl Pc:mx-120 Pc:py-60 Pc:mt-52  Desktop:mx-60 Desktop:py-60 Desktop:mt-32 laptop:mx-60 laptop:mt-32 mobile:mx-60 mobile:py-60 smallmobile:mx-25'>
            <div key={index} className=' flex justify-between items-center mobile:flex-col-reverse smallmobile:flex-col-reverse h-full Pc:px-120 Desktop:px-100 laptop:flex-col-reverse laptop:h-auto laptop:py-60 mobile:px-120'>
              <div>
                <h2 className=' font-heading text-32 mobile:text-24 mobile:w-215 text-heading mb-16'>{item.name}</h2>
                <ul className=' Desktop:w-414'>
                  <li className=' font-body text-16 text-white pb-16'>{item.about1}</li>
                  <li><img src={Polygon} alt="" srcSet="" /></li>
                  <li className=' font-body text-16 text-white pt-16'>{item.about2}</li>
                </ul>
              </div>
              <div className=' w-400 h-400 laptop:w-250  laptop:h-250 mobile:w-230 mobile:h-230 mobile:mb-16 rounded-full flex justify-center items-center bg-section laptop:mb-32 '><img src={item.img} alt="" srcSet="" /></div>
            </div>
          </div>

        ))}
        </div>
      </div>
    </>
  )
}