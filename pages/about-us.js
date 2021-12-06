import Head from 'next/head'
import Layout from "../components/layout"


export default function AboutUsPage() {
  return (
    <Layout>
        <Head>
          <meta name="description" content="Trusta  - чому ми вирішили створити такий сервіс" />
          <title> Про нас | Trusta </title>
        </Head>
        <section className={`h-full overflow-x-auto`}>
            <div className={`container mx-auto md:mt-0 mt-10`}>
                <div className="relative ">
                  <img src="/images/about-us.png" className="rounded mx-auto" alt="Про нас, задній фон, абстракція"/>
                   <h1 className={` font-bold text-3xl border-b-2 border-t-2 bg-gray-900 bg-opacity-90 w-full md:w-1/2 absolute top-0 md:top-1/3 right-0 py-5 px-16 text-center`}> ПРО НАС </h1>
                </div>
                
                <div className={`mt-16 text-justify`}>
                    <h2 className={`font-semibold text-xl uppercase text-center`}>
                        БУДУЄМО ДОВІРУ, ГАРАНТУЮЧИ ЦІННІСТЬ ДОМОВЛЕНОСТЕЙ
                    </h2>
                    <div className={`p-6 text-base`}>
                        В житті кожної людини бувають ситуації, коли вона про щось домовляється з іншою. І для гарантування виконання домовленості люди часто використовують таке поняття, як завдаток. Або - аванс. Сторона, яка має отримати товар або послугу в майбутньому, передає стороні, яка має ці товар або послугу надати, повну або часткову суму коштів в рахунок майбутньої оплати. І в таких ситуаціях, якщо завдаток/аванс будуть надані, завжди є ризик того, що інша сторона може зникнути, не виконавши свої зобов’язання. З іншої сторони, коли завдаток/аванс не надаються, завжди є ризик, що після отримання товару або послуги за них можуть не розрахуватися.
                    </div>
                    <div className={`p-6 text-base`}>
                        Але ж кожна людина, коли про щось домовляється з іншою, хоче бути впевнена, що її не обмануть.
                    </div>
                    <div className={`p-6 text-base `}>
                        <span className={`text-semibold text-teal-300`}>Онлайн-сервіс безпечних завдатків дозволяє сторонам бути впевненими, що умови домовленостей між ними буде виконано.</span> Алгоритими сервісу створюють для сторін умови, коли невиконання умов домовленостей не має для них сенсу - платник завдатку/авансу не ризикує втратити кошти не отримавши натомість товар або послугу, а інша сторона отримує впевненість, що за надані товари і послуги з нею розрахуються. Це забезпечується за рахунок розвитку рішень на основі алгоритмів peer-to-peer-арбітражу, які дають можливість сторонам діяти на принципах досягнення взаємної згоди.
                    </div>
                    <div className={`p-6 my-10 text-center`}>
                        <a href="https://pumb.ua" target="_blank" rel="noreferrer">
                            <img src={`/images/pumb.png`} className={`h-10 w-auto inline px-2`} alt="логотип PUMB.ua"/>
                            Наш партнер в Україні.
                        </a> 
                    </div>
                </div>
            </div>
           
        </section>
      
    </Layout>
  )
}
