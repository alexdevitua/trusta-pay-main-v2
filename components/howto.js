export default function HowTo() {
  return (
    <div className="flex flex-col w-full h-auto md:px-16 bg-repeat bg-center bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 "
      style={{ backgroundImage: "url('/images/floating-cogs.svg')" }}
    >
      <div className="h-auto pt-16 container mx-auto ">
        <h2 className="mx-auto font-semibold text-xl">
          Як це працює?
        </h2>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-items-center py-10">

        <div className="w-full md:w-1/3 p-5 flex">
          <div className="w-full text-center py-5 px-10 border-2 border-gray-500 bg-gray-900 flex-1 flex items-center shadow-md">
            <div className="">
              <p>
                Щоб отримати завдаток, необхідно увійти або зареєструвати акаунт Trusta, створити рахунок та надіслати його ПЛАТНИКУ
              </p>
              <p className="mt-5">
                ПЛАТНИК отримує рахунок на внесення завдатку та оплачує його через захищений сервіс Trusta.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-5 flex">
          <div className="w-full text-center py-5 px-10 border-2 border-gray-500 bg-gray-900 flex-1 flex items-center shadow-md">
            <div className="">
              <p>
                ОТРИМУВАЧ завдатку отримує повідомлення про те, що рахунок оплачено і завдаток внесено на гарантоване зберігання в Trusta.
              </p>
              <p className="mt-5">
                Коли сторони вирішують зарахувати суму завдатку на рахунок ОТРИМУВАЧА платежу або повернути завдаток ПЛАТНИКУ , вони ініціюють відповідні дії в системі Trusta.
              </p>

              <p className="mt-5">
                Сторони мають 120 днів, щоб підтвердити або скасувати завдаток.
              </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-5 flex">
            <div className="w-full text-center py-5 px-10 border-2 border-gray-500 bg-gray-900 flex-1 flex items-center shadow-md">
              <div className="">
                <p>
                  Якщо сторони не можуть досягти згоди щодо завершення переказу завдатку або його повернення, то сума завдатку буде зберігатися в системі Trusta, поки сторони не дійдуть згоди.
                </p>
                <p className="mt-5"> 
                  На час розв’язання суперечки, сторони не можуть створювати або оплачувати нові рахунки в системі Trusta.
                </p>
                <p className="mt-5">
                  Система Trusta має право вести автоматизований рейтинг користувачів для запобігання проблемним транзакціям.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )

}