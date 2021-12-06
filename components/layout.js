import Link from "next/link"
import Divider from "./Divider"
import Menu from "./menu"
export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen w-full h-auto">
            <header className="h20 px-5 py-10 md:py-5 bg-black">
                <div className="container mx-auto h-auto">
                    <div className="flex flex-row items-center justify-center lg:px-10">
                        <div className="md:flex-shrink">
                            <img src="/images/logo.svg" className="h-12 w-auto md:block hidden" alt="Логотип Trusta"/>
                        </div>
                        <div className="block md:hidden">
                            <Link href="/">
                                <a className="inline-block">
                                    <img src="/images/logo.svg" className="h-12 w-auto" alt="Логотип Trusta" />
                                </a>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Menu />
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex-grow bg-black bg-opacity-90">
                <Divider />
                {children}
                
                <Divider />
            </div>

            <footer className="h-auto bg-black">
                <div className="py-10 h-auto ">

                    <div className="container mx-auto h-auto">
                        <div className="flex md:flex-row flex-col flex-nowrap justify-center items-center">
                            <div className="md:w-1/2 w-full text-center">
                                <ul className="md:space-y-4 flex md:flex-col flex-row items-center space-x-2 justify-center">
                                    <li>
                                        <a className="appreance-none hover:outline-none" href="https://pumb.ua/" target="_blank" rel="noopener noreferrer">
                                            <img src="/images/pumb.png" className="h-12 w-auto" alt="логотип PUMB.ua" />
                                        </a>

                                    </li>
                                    <li>
                                        <img src="/images/Visa-logo.png" className="h-6 w-auto" alt="логотип міжнародної платіжної системи Visa" />
                                    </li>
                                    <li>
                                        <img src="/images/mc_vrt_rev.svg" className="h-10 w-auto" alt="логотип міжнародної платіжної системи MasterCard" />
                                    </li>
                                </ul>


                            </div>
                            <div className={`w-full mt-5 h-auto md:w-1/2 text-center md:text-left md:mt-0 text-gray-300`}>
                                <p>
                                    <span className={`text-sm font-semibold`}> &copy; TRUSTA LLC, ВСІ ПРАВА ЗАХИЩЕНО </span>
                                </p>
                                <p className={`mt-2`}>
                                    <span className={`text-xs`} >
                                        ОФІС ТОВ &quot;ТРАСТА&quot;:  УКРАЇНА, М.ОДЕСА, ВУЛ. БУНІНА 10, БЦ  &laquo;Морський&raquo;
                                    </span>
                                </p>
                                <p>
                                    <span className={`text-xs`} >
                                        Питання співпраці:  <a href="mailto:office@trusta-pay.com" className={`text-gray-100`}>office@trusta-pay.com</a>
                                    </span>
                                </p>
                                <p>
                                    <span className={`text-xs`} >
                                        Служба підтримки: <a href="mailto:support@trusta-pay.com" className={`text-gray-100`} >support@trusta-pay.com</a>
                                    </span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}