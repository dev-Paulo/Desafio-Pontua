import logoPontuaWhite from "../../assets/logo_pontua_white.svg";
import building from "../../assets/building.png";
import { CardLogin } from "../../components/CardLogin/CardLogin";
import { CardSelect } from "../../components/CardSelect/CardSelect";
import { useState } from "react";

export function Login() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  return (
    <>
      <div className="bg-blue-800 w-full h-full">
        <div className="p-4">
          <img src={logoPontuaWhite} alt="" />
        </div>

        <div className="grid max-w-screen-xl mx-auto lg:gap-10 xl:gap-0 lg:py-2 lg:grid-cols-12 flex-row  items-center justify-center h-3/4">
          <div className="mr-auto place-self-center lg:col-span-8 ">
            <img src={building} alt="" className="w-fit" />
          </div>
          <div className=" lg:mt-0 lg:col-span-4 lg:flex mr-4">
            <div className="h-full w-34 bg-white rounded-2xl p-8 flex flex-col">
              {!loginSuccess && <CardLogin setLoginSuccess={setLoginSuccess} />}
              {loginSuccess && <CardSelect />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
