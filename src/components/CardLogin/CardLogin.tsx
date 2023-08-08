import { At, Eye, EyeSlash, SignIn } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetStateAction, useState } from "react";
import { CardResetPassword } from "../CardResetPassword/CardResetPassword";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Este campo é obrigatório")
    .toLowerCase()
    .refine(
      (value) => value === "" || /^\S+@\S+\.\S+$/.test(value),
      "Formato de e-mail inválido"
    )
    .transform((email) => email.trim()),
  senha: z
    .string()
    .nonempty("Este campo é obrigatório")
    .toLowerCase()
    .transform((senha) => senha.trim()),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface CardLoginProps {
  setLoginSuccess: React.Dispatch<SetStateAction<boolean>>;
}

export function CardLogin({ setLoginSuccess }: CardLoginProps) {
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema), // Update the resolver with the mergedSchema
  });

  const onSubmit = (data: LoginFormData) => {
    event?.preventDefault();
    // Simulating login check
    const { email, senha } = data;
    if (email === "douglas@pontua.com.br" && senha === "1234") {
      setLoginSuccess(true);
    } else {
      setErrorMessage("Login/Senha incorretos");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {!showPasswordReset && (
        <>
          <div>
            <h2 className="text-blue-800 font-bold text-3xl tracking-tighter">
              Bem-vindo<span className="text-orange-500">.</span>
            </h2>
            <p className="text-gray-500 font-normal text-sm mb-4">
              Informe as suas credenciais de acesso ao portal
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-2 mt-2">
              <input
                aria-describedby="helper-text-explanation"
                type="text"
                id="input-group-1"
                className="block w-full p-4 bg-gray-50 border border-gray-300 text-blue-500 text-base font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Informe seu e-mail"
                {...register("email", {
                  required: true,
                })}
              />

              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3.5">
                <At size={22} className="text-blue-500" />
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

            <div className="relative mb-2 mt-4">
              <input
                aria-describedby="helper-text-explanation"
                type={showPassword ? "text" : "password"}
                id="input-group-1"
                className="block w-full p-4 bg-gray-50 border border-gray-300 text-blue-500 text-base font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Informe sua senha"
                {...register("senha", {
                  required: true,
                })}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center cursor-pointer pr-3.5"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeSlash size={22} className="text-blue-500" />
                ) : (
                  <Eye size={22} className="text-blue-500" />
                )}
              </div>
            </div>
            {errors?.senha && (
              <p
                id="helper-text-explanation"
                className="text-sm text-red-500 dark:text-gray-400"
              >
                {errors?.senha?.message}
              </p>
            )}
            {errorMessage != "" ? (
              <p
                id="helper-text-explanation"
                className="text-sm text-red-500 dark:text-gray-400"
              >
                {errorMessage}
              </p>
            ) : (
              ""
            )}
            <button
              type="submit"
              className="text-white w-full bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 font-bold rounded-lg text-lg px-5 py-4 text-center inline-flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              entrar
              <SignIn size={17} className="ml-2" />
            </button>
          </form>
          <div className="flex flex-row items-center gap-2 justify-end mt-4">
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00008 8.74994C5.84537 8.74994 5.697 8.68848 5.5876 8.57908C5.47821 8.46968 5.41675 8.32131 5.41675 8.1666C5.43841 7.78543 5.55437 7.4156 5.75423 7.09031C5.95409 6.76501 6.2316 6.49443 6.56183 6.30285C6.77762 6.18459 6.95035 6.00093 7.05516 5.7783C7.15998 5.55566 7.19149 5.30553 7.14517 5.06385C7.10023 4.83302 6.98739 4.62086 6.82111 4.45458C6.65482 4.28829 6.44267 4.17545 6.21183 4.13052C6.04332 4.09942 5.87003 4.10582 5.70428 4.14926C5.53853 4.19271 5.38438 4.27213 5.25279 4.38189C5.1212 4.49165 5.01541 4.62905 4.94292 4.78432C4.87044 4.93959 4.83305 5.10892 4.83342 5.28027C4.83342 5.43498 4.77196 5.58335 4.66256 5.69275C4.55317 5.80214 4.40479 5.8636 4.25008 5.8636C4.09537 5.8636 3.947 5.80214 3.8376 5.69275C3.72821 5.58335 3.66675 5.43498 3.66675 5.28027C3.66669 4.93946 3.74129 4.60277 3.8853 4.29389C4.02932 3.985 4.23925 3.71141 4.50033 3.49235C4.74986 3.28375 5.04023 3.12962 5.35282 3.03985C5.66542 2.95008 5.99333 2.92664 6.31551 2.97105C6.63769 3.01546 6.94704 3.12673 7.22369 3.29773C7.50034 3.46872 7.73818 3.69566 7.92197 3.96399C8.10575 4.23231 8.23141 4.53609 8.29089 4.85584C8.35036 5.17559 8.34233 5.50423 8.26732 5.82069C8.19231 6.13716 8.05197 6.43444 7.85531 6.69347C7.65864 6.95251 7.41 7.16757 7.12533 7.32485C6.97784 7.41574 6.85259 7.53853 6.75881 7.6842C6.66503 7.82987 6.60509 7.99472 6.58342 8.1666C6.58342 8.32131 6.52196 8.46968 6.41256 8.57908C6.30317 8.68848 6.15479 8.74994 6.00008 8.74994ZM6.46267 13.8599C7.72267 13.3536 11.8334 11.3627 11.8334 7.02502V4.0086C11.8341 3.39553 11.6412 2.79788 11.2824 2.30079C10.9236 1.80369 10.417 1.43251 9.83492 1.2401L6.18383 0.0296853C6.06464 -0.0105462 5.93553 -0.0105462 5.81633 0.0296853L2.16525 1.2401C1.58315 1.43251 1.0766 1.80369 0.717767 2.30079C0.358931 2.79788 0.166103 3.39553 0.16675 4.0086V7.02502C0.16675 10.8529 4.253 13.1944 5.506 13.8209C5.65748 13.9121 5.82531 13.9729 6.00008 13.9999C6.16164 13.9824 6.31851 13.9349 6.46267 13.8599ZM9.46742 2.34727C9.81656 2.46301 10.1204 2.68582 10.3356 2.98406C10.5509 3.28229 10.6668 3.64078 10.6667 4.0086V7.02502C10.6667 10.6318 7.116 12.3398 6.0275 12.7773C4.92617 12.2266 1.33342 10.1844 1.33342 7.02502V4.0086C1.33337 3.64078 1.44922 3.28229 1.66452 2.98406C1.87981 2.68582 2.18361 2.46301 2.53275 2.34727L6.00008 1.1981L9.46742 2.34727ZM6.00008 9.9166C5.88471 9.9166 5.77193 9.95081 5.676 10.0149C5.58007 10.079 5.5053 10.1701 5.46115 10.2767C5.417 10.3833 5.40545 10.5006 5.42796 10.6137C5.45047 10.7269 5.50602 10.8308 5.5876 10.9124C5.66918 10.994 5.77312 11.0496 5.88628 11.0721C5.99944 11.0946 6.11672 11.083 6.22332 11.0389C6.32991 10.9947 6.42101 10.9199 6.48511 10.824C6.5492 10.7281 6.58342 10.6153 6.58342 10.4999C6.58342 10.3452 6.52196 10.1969 6.41256 10.0875C6.30317 9.97806 6.15479 9.9166 6.00008 9.9166Z"
                fill="#F21A05"
              />
            </svg>
            <p
              className="text-orange-500 font-normal text-sm cursor-pointer"
              onClick={() => {
                setShowPasswordReset(true);
              }}
            >
              Esqueceu a senha?
            </p>
          </div>
        </>
      )}

      {showPasswordReset && (
        <CardResetPassword setShowPasswordReset={setShowPasswordReset} />
      )}
    </>
  );
}
