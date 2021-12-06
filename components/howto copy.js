export default function HowTo() {
  return (
    <div className="flex flex-col w-full h-auto md:px-16 bg-repeat bg-center"
    style={{backgroundImage:"url('/images/floating-cogs.svg')"}}
    >
      <div className="h-auto pt-16">
        <h2 className="mx-auto font-semibold text-xl">
          Як це працює?
        </h2>
      </div>

      <div className="relative w-full h-auto mt-10 py-10 flex flex-col md:flex-row flex-wrap items-center divide-y md:divide-x md:divide-y-0 divide-gray-700 " 
      
      >
         
          <div className="w-full md:mt-0 md:w-1/3 h-auto flex relative p-5">
              {/* <div className="h-10 w-10 rounded-full border border-blue-300 absolute inset-1/2 flex justify-center items-center">
                <span className={`m-auto font-bold`}>1</span>
              </div> */}
              <div className="w-full text-justify px-5">
                Щоб отримати завдаток, необхідно увійти в акаунт Trusta, створити рахунок та надіслати його ПЛАТНИКУ
                ПЛАТНИК отримує рахунок на внесення завдатку та оплачує його через Trusta.
              </div>
              
          </div>

          <div className="w-full md:mt-0 md:w-1/3 h-auto flex relative p-5">
              <div className="w-full text-justify px-5">
          ОТРИМУВАЧ завдатку отримує повідомлення про те, що рахунок оплачено і завдаток внесено на гарантоване зберігання в Trusta.
Коли сторони вирішують зарахувати суму завдатку на рахунок ОТРИМУВАЧА платежу або повернути завдаток ПЛАТНИКУ , вони ініціюють відповідні дії в системі Trusta.
Сторони мають 120 днів, щоб підтвердити або скасувати завдаток.
              </div>
              {/* <div className="h-10 w-10 rounded-full border border-blue-300 absolute inset-1/2 flex justify-center items-center">
                <span className={`m-auto font-bold`}>3</span>
              </div> */}
          </div>
          
          <div className="w-full md:mt-0 md:w-1/3 h-auto flex relative p-5">
            <div className="w-full text-justify px-5">
              Якщо сторони не можуть досягти згоди щодо завершення переказу завдатку або його повернення, то сума завдатку буде зберігатися в системі Trusta, поки сторони не дійдуть згоди.
              На час розв’язання суперечки, сторони не можуть створювати або оплачувати нові рахунки в системі Trusta.
              Система Trusta має право вести автоматизований рейтинг користувачів для запобігання проблемним транзакціям.
            </div>
              {/* <div className="h-10 w-10 rounded-full border border-blue-300 absolute inset-1/2 flex justify-center items-center">
                <span className={`m-auto font-bold`}>2</span>
              </div> */}
          </div>
      </div>
    </div>
  )

}