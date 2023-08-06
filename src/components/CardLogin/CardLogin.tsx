import { At, Eye, SignIn } from '@phosphor-icons/react'

export function CardLogin() {
    return(
        <>
        <div>
              <h2 className="text-blue-800 font-bold text-3xl tracking-tighter">Bem-vindo<span className='text-orange-500'>.</span></h2>
              <p className="text-gray-500 font-normal text-sm">Informe as suas credenciais de acesso ao portal</p>
            </div>
            <form action="">
              <div className="flex flex-row items-center w-full mb-4 mt-4">     
              <input
              type="password"
              className="flex-shrink flex-grow leading-normal w-px flex-1 h-10 px-4 py-5 text-sm outline-none border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Informe o seu e-mail"
              />
            <div className="flex -mr-px">
              <span
                className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
                >
                <At size={17} />
                </span>
            </div>
              </div>
              <div className="flex flex-row items-center w-full">     
              <input
              type="password"
              className="flex-shrink flex-grow leading-normal w-px flex-1 h-10 px-4 py-5 text-sm outline-none border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Informe sua senha"
              />
            <div className="flex -mr-px">
              <span
                className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
                >
                <Eye size={17} />
                </span>
            </div>
              </div>
            </form>
            <button type="button" className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 font-bold rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            entrar
            <SignIn size={17} className='ml-2' />
            </button> 
            </>
    )
}