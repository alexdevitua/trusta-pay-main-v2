import { useEffect, useState } from "react"


export default function Banner() {

  const [angle, setAngle] = useState(0)
  const [rotationSector, setRotationSector] = useState('rotate-0')
  const [showRotatedImage,setShowRotatedImage] = useState(true)

  useEffect(() => {
    let closureAngle = 0
    let timer,timer2;
    const currentTimestamp = Date.now()
    const interval = setInterval(() => {
      closureAngle = closureAngle + 90
      console.log('Interval ', currentTimestamp - Date.now())
      console.log('Angle ',closureAngle )
      if (closureAngle < 360) {
        setRotationSector(`rotate-${closureAngle}`)
        setAngle(closureAngle)
      }
      else {
        setAngle(closureAngle)
        setRotationSector(`rotate-360`)
        timer = setTimeout(()=>{
          console.log('Timeout')
          setShowRotatedImage(false)
          closureAngle = 0
          setAngle(closureAngle)
          console.log('closureAngle',closureAngle)
          setRotationSector(`rotate-0`)
        },1000)
        timer2 = setTimeout(()=>{
          console.log('Timeout')
          setShowRotatedImage(true)
          closureAngle = 0
          setAngle(closureAngle)
          console.log('closureAngle',closureAngle)
          setRotationSector(`rotate-0`)
        },1500)
      }

      
      //console.log('newAngle',closureAngle)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
      clearTimeout(timer2)
    }

  }, [])
  return (
    <div className="flex flex-col w-full h-auto mt-16">
      <div className="h-auto mb-20">
        <h1 className="text-center text-2xl font-semibold font-uppercase py-5">
          ПЛАТІЖНИЙ СЕРВІС РОЗШИРЕНИХ МОЖЛИВОСТЕЙ
        </h1>
      </div>

      <span className="hidden transform rotate-0 rotate-90 rotate-180 rotate-270 rotate-360 -rotate-180 -rotate-90 "></span>

      <div className="relative w-full h-auto my-10">

        <div className="w-56 h-56 mx-auto relative">
          <div className={`w-56 h-56 rounded-full mx-auto banner bg-cover bg-center bg-origin-border absolute z-10`}>
            { showRotatedImage == true ? 
              <img src="/images/sector.svg" className={`transform scale-105 w-full h-full transition duration-300 ease-in transform  ${rotationSector} `} alt="Banner Image"/>
              :
              <img src="/images/sector.svg" className={`transform scale-105 w-full h-full  ease-in transform  ${rotationSector}`} alt="Banner Image" />
            }        
            <div className={`w-full h-full absolute top-0 rounded-full mx-auto my-auto`} >
              <img src="/images/top-banner.svg" className="w-full h-full" alt="Banner Image" />
            </div>
          </div>
        </div>


        <div className={`w-full h-80 -top-12 left-0 absolute z-0 flex flex-wrap justify-center text-xs md:text-base lg:px-56`}>
          <div className={`h-40 w-1/2 border-r-2 border-b-2 border-gray-600 transition duration-300 ease-in-out
          ${angle === 0 || angle === 360 ? 'text-gray-200 font-bold' : 'text-gray-600'} flex `}>
            <div className={`mt-2 pr-24 pl-5 text-left text-xl  `}>
              Керовані завдатки 
            </div>

          </div>

          <div className={`h-40 w-1/2 border-b-2 border-gray-600 transition duration-300 ease-in-out
            ${angle === 90 ? 'text-gray-200 font-bold' : 'text-gray-600'} flex justify-end`}>
            <div className={`mt-2 pl-24 pr-5 text-right text-xl`}>
              Перекази без розголошення номеру картки
            </div>

          </div>

          <div className={`h-40 w-1/2 border-r-2 border-gray-600 transition duration-300 ease-in-out
            ${angle === 270 ? 'text-gray-200 font-bold' : 'text-gray-600'} flex
          `}>
            <div className={`pr-24 pl-5 text-left self-end text-xl`}>
                Рахунки на оплату
            </div>

          </div>

          <div className={`h-40 w-1/2 transition duration-300 ease-in-out 
          ${angle === 180 ? 'text-gray-200 font-bold' : 'text-gray-600'} flex justify-end`}>
            <div className={`pl-24 pr-5 text-right self-end text-xl`}>
              Захист від шахраїв
            </div>

          </div>
        </div>
      </div>

      <div className="h-auto py-16 text-center">
        <div className="px-10 mt-10 font-semibold">
          Створюйте, Отримуйте, Відправляйте та Керуйте Безпечними Завадатками
        </div>
        <div className="px-10 mt-16">
            <a className="border-2 border-gray-400 rounded-lg px-8 py-3 hover:border-gray-200  hover:font-semibold transition duration-300 ease-in-out cursor-pointer focus:outline-none uppercase font-bold"
            href={process.env.NEXT_PUBLIC_APP_SITE}
            >
              Розпочати
            </a>
        </div>
        
      </div>
    </div>
  )

}