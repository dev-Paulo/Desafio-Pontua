import { At, Eye, SignIn } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({    
    email: z
      .string()
      .nonempty('Este campo é obrigatório')
      .toLowerCase()
      .refine(
        (value) => value === '' || /^\S+@\S+\.\S+$/.test(value),
        'Formato de e-mail inválido',
      )
      .transform((email) => email.trim()),
    senha: z.string()
    .nonempty('Este campo é obrigatório')
    .toLowerCase()    
    .transform((senha) => senha.trim())  
  })

  type LoginFormData = z.infer<typeof loginSchema>

export function CardLogin() {

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },        
      } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema), // Update the resolver with the mergedSchema
      })

      const onSubmit = (data: any) => {
        event?.preventDefault()
        // Simulate login check
    const { email, senha } = data;
    if (email === 'douglas@pontua.com.br' && senha === '1234') {
      alert('Login successful');
    } else {
      alert('Login failed');
    }
        console.log('CONSOLE LOG DO SUBMIT DO FORM')
        console.log(data)
      }

    return(
        <>
        <div>
              <h2 className="text-blue-800 font-bold text-3xl tracking-tighter">Bem-vindo<span className='text-orange-500'>.</span></h2>
              <p className="text-gray-500 font-normal text-sm">Informe as suas credenciais de acesso ao portal</p>
            </div>
            <form  onSubmit={handleSubmit(onSubmit)}>             
              <div className='relative mb-4'>              
                <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Informe seu e-mail"  {...register('email', {
                required: true
            })} />
                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3.5">
                <At size={17} />
                </div>
              </div>     
              {errors?.email && (
                        <span style={{ color: '#f00' }}>
                          {errors?.email?.message}
                        </span>
                      )}
              <div className='relative mb-4'>              
                <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Informe sua senha"  {...register('senha', {
                required: true
            })} />
                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3.5">
                <Eye size={17} />
                </div>
              </div>
              {errors?.senha && (
                        <span style={{ color: '#f00' }}>
                          {errors?.email?.message}
                        </span>
                      )}
              <button  type="submit" className="text-white w-full bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 font-bold rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            entrar
            <SignIn size={17} className='ml-2' />
            </button>
            </form>
             
            </>
    )
}