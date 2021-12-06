
import { useRouter } from "next/router";
import Link from "next/link"
import { useState } from "react";

export default function Menu() {
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <button className="float-right md:hidden">
                <button className="float-right p-2 md:hidden appearance-none outline-none focus:outline-none " onClick={() => setShowMenu(!showMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${showMenu ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${showMenu ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </button>

            <div className={`transition duration-700 ease-in-out z-50  min-h-full max-w-full w-full h-auto absolute bg-black bg-opacity-80  ${showMenu ? 'block top-0 right-0 bottom-0' : 'hidden right-full'} transition `}
                onClick={() => setShowMenu(!showMenu)}>
                <div className={`w-80 min-h-screen h-full bg-gray-200 float-right relative p-5`}>
                    <button
                        className="absolute top-3 right-3 rounded-full bg-black p-1"
                        onClick={() => setShowMenu(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    <div className="w-full py-16">
                        <div className="rounded-full border-gray-300 bg-black h-16 w-16 md:h-24 md:w-24 p-3 md:p-2 mx-auto shadow">
                            <img src="/images/logo.svg" className="h-10 mx-auto w-auto" alt="Логотип Trusta" />
                        </div>
                    </div>

                    <ul className="text-gray-800 float-right divide-y-2 divide-gray-800 w-full ">

                        <li className="py-3">
                            <Link href="/">
                                <a className="inline-block text-center w-full font-semibold transform hover:scale-110  transition duration-150 easy-in-out">
                                    Головна
                                </a>
                            </Link>
                        </li>

                        <li className="py-3">
                            <Link href="/about-service">
                                <a className="inline-block text-center w-full font-semibold transform hover:scale-110 focus:scale-110 transition duration-150 easy-in-out">
                                    Про Сервіс
                                </a>
                            </Link>
                        </li>

                        <li className="py-3">
                            <Link href="/about-us">
                                <a className="inline-block text-center w-full font-semibold transform hover:scale-110 focus:scale-110 transition duration-150 easy-in-out">
                                    Про Нас
                                </a>
                            </Link>
                        </li>

                        <li className="py-3">
                            <Link href="/terms">
                                <a className="inline-block text-center w-full font-semibold transform hover:scale-110 focus:scale-110 transition duration-150 easy-in-out">
                                    Умови використання
                                </a>
                            </Link>
                        </li>

                        <li className="py-3 text-right">
                            <span className="font-bold mt-5">КАБІНЕТ</span>
                            <ul className="mt-2 text-right">
                                <li className="py-2 font-semibold">
                                    <a href={process.env.NEXT_PUBLIC_APP_SITE} className="inline-flex flex-row cursor-pointer space-x-1 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-900 fill-current" viewBox="0 0 496 512"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" /></svg>
                                        <span>WEB Версія</span>
                                    </a>
                                </li>
                                {/* <li className="py-2 font-semibold">
                                    <a href={`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM_BOT}`} className="inline-flex flex-row cursor-pointer space-x-1 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-900 fill-current " viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" /></svg>
                                        <span>Telegram Bot</span>
                                    </a>
                                </li> */}
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>



            <ul className="hidden md:flex justify-end items-center font-base uppercase divide-x divide-gray-500 text-gray-400">
                <li className={`transition ease-in duration-300 px-5 hover:font-bold hover:text-gray-300 font-semibold ${router.pathname === '/' ? 'text-gray-300 font-bold' : ''}`}>
                    <Link href="/">
                        <a>
                            Головна
                        </a>
                    </Link>
                </li>

                <li className={`transition ease-in duration-300 px-5 hover:font-bold hover:text-gray-300 font-semibold ${router.pathname === '/about-service' ? 'text-gray-300' : ''}`}>
                    <Link href="/about-service">
                        <a className={'hover:font-bold'}>
                            Про cервіс
                        </a>
                    </Link>
                </li>

                <li className={`transition ease-in duration-300 px-5 hover:font-bold hover:text-gray-300 font-semibold ${router.pathname === '/about-us' ? 'text-gray-300' : ''}`}>
                    <Link href="/about-us">
                        <a className={'hover:font-bold'}>
                            Про нас
                        </a>
                    </Link>
                </li>

                <li className={`transition ease-in duration-300 px-5 hover:font-bold hover:text-gray-300 font-semibold ${router.pathname === '/terms' ? 'text-gray-300' : ''}`}>
                    <Link href="/terms">
                        <a className={'hover:font-bold'}>
                            Умови використання
                        </a>
                    </Link>
                </li>

                <li className={`transition ease-in duration-300 px-5 hover:font-bold hover:text-gray-300 font-semibold`}>
                    <a className={'hover:font-bold'} href={process.env.NEXT_PUBLIC_APP_SITE} >
                        Кабінет
                    </a>
                </li>

            </ul>
        </>
    )
}