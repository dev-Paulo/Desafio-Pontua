import { At } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetStateAction, useState } from "react";

const passwordResetSchema = z.object({
  email: z
    .string()
    .nonempty("Este campo é obrigatório")
    .toLowerCase()
    .refine(
      (value) => value === "" || /^\S+@\S+\.\S+$/.test(value),
      "Formato de e-mail inválido"
    )
    .transform((email) => email.trim()),
});

type PasswordResetFormData = z.infer<typeof passwordResetSchema>;

interface CardResetPasswordProps {
  setShowPasswordReset: React.Dispatch<SetStateAction<boolean>>;
}

export function CardResetPassword({
  setShowPasswordReset,
}: CardResetPasswordProps) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordResetFormData>({
    resolver: zodResolver(passwordResetSchema), // Update the resolver with the mergedSchema
  });

  const onSubmit = (data: PasswordResetFormData) => {
    event?.preventDefault();
    // Simulating email verification
    const { email } = data;
    if (email === "douglas@pontua.com.br") {
      setShowSuccessMessage(true);
    } else {
      alert("Login failed");
    }
    console.log("CONSOLE LOG DO SUBMIT DO FORM");
    console.log(data);
  };
  return (
    <>
      {!showSuccessMessage && (
        <>
          <div>
            <h2 className="text-blue-800 font-bold text-3xl tracking-tighter mb-7">
              Recuperar senha<span className="text-orange-500">.</span>
            </h2>
            <p className="text-gray-500 font-normal text-sm">
              Informe o e-mail do seu cadastro. Nós estaremos realizando o envio
              de um link com as instruções para você redefinir a sua senha.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4 mt-4">
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Informe seu e-mail"
                {...register("email", {
                  required: true,
                })}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3.5">
                <At size={17} />
              </div>
            </div>
            {errors?.email && (
              <p
                id="helper-text-explanation"
                className="text-sm text-red-500 dark:text-gray-400"
              >
                {errors?.email?.message}
              </p>
            )}

            <button
              type="submit"
              className="w-full text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 font-bold rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              enviar link
            </button>
          </form>
        </>
      )}

      {showSuccessMessage && (
        <>
          <div>
            <h2 className="text-blue-800 font-bold text-3xl tracking-tighter mb-5">
              Tudo certo <span className="text-orange-500">;)</span>
            </h2>
            <p className="text-gray-500 font-normal text-sm mb-4">
              Foi enviado um e-mail para você com instruções de como redefinir a
              sua senha.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setShowPasswordReset(false);
            }}
            className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 font-bold rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            voltar para o login
          </button>
        </>
      )}
    </>
  );
}
