import Head from 'next/head'
import Layout from "../components/layout"
import Link from "next/link"

export default function TermsPage() {
  return (
    <Layout>
        <Head>
          <meta name="description" contenet="Trusta - умови використання сервісу " />
          <title> Умови використання | Trusta </title>
        </Head>
        <section className={`h-full overflow-x-auto`}>
            <div className={`container mx-auto md:mt-5 mt-10`}>
                <div className="relative h-40">
                   <h1 className={` font-bold text-3xl border-b-2 border-t-2 bg-gray-900 bg-opacity-0 w-full md:w-1/2 absolute right-0 py-5 px-16 text-center`}> Умови використання </h1>
                </div>

                <div className={`mt-16 text-justify`}>
                   
                    <p className={`p-6 text-left font-semibold`}>
                        <Link href="/privacy">
                            <a className={`text-blue-400`}>
                                Згода суб’єкта персональних даних
                                <svg className={`w-3 h-3 inline align-top ml-1`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg>
                            </a>
                        </Link>
                    </p>
                    <p className={`p-6 text-left font-semibold`}>
                        <Link href="/offerta">
                            <a className={`text-blue-400`}>
                                Публічна оферта ТОВ &quot;ТРАСТА&quot;
                                <svg className={`w-3 h-3 inline align-top ml-1`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg>
                            </a>
                        </Link>
                    </p>

                    <p className={`p-6 font-semibold`}>
                            <a className={`text-blue-400`} href="https://fuib-prod.payhub.com.ua/iframes/Public_offer_P2P_2017.pdf" target="_blank" rel="noopener noreferrer">
                                Публічна оферта АТ &quot;Перший Український Міжнародний Банк&quot;
                                <svg className={`w-3 h-3 inline align-top ml-1`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg>
                            </a>
                    </p>

                    <p className={`p-6 text-base `}>
                        Термін дії послуги - до 120 днів. Якщо протягом 120 днів сторона-отримувач не підтвердить виконання або скасування угоди в інтерфейсі користувача через peer-to-peer алгоритм, то кошти будуть повернуті на рахунок відправника. Сума комісії сервісу при цьому не повертається.
                    </p>
                    
                    <p className={`p-6 text-base `}>
                        Комісія сервісу - 5% від суми завдатку/авансу, але мінімум - 5 гривень. Ваш банк-емітент платіжної картки може утримувати стандартну комісію відповідно до ваших умов користування карткою.
                    </p>
                    <p className={`p-6 text-base `}>
                        Валюта транзакцій - українська гривня.
                    </p>
                    <p className={`p-6 text-base `}>
                        Транзакції здійснюються між рахунками фізичних осіб через сайт Trusta або за допомогою чат-ботів
                    </p>
                                        
                </div>
    
            </div>
           
        </section>
      
    </Layout>
  )
}
