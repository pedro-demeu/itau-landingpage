import Image from "next/image";
import { ItemMenu } from "./item-menu";
import { Search } from "./search";

import Logo from "@/app/assets/logo.svg";
import IconUser from "@/app/assets/icon-user.svg";

export default function Header() {
  return (
    <header className="relative flex items-center w-full bg-primary-orange h-20">
      <div className="flex item-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
        <div className="absolute top-0 right-0 bg-primary-blue w-[19%] z-0 h-full"></div>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="Logo" />
            <ul className="flex items-center gap-12">
              <li>
                <ItemMenu name="Para você" />
              </li>
              <li>
                <ItemMenu name="Para empresas" />
              </li>
              <li>
                <ItemMenu name="Serviços" />
              </li>
              <li>
                <ItemMenu name="Ajuda" />
              </li>
            </ul>
          </div>
          <Search />
          <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10 w-75 z-10">
            <Image src={IconUser} alt="User" />
            <span className="text-white font-bold">Acessar conta</span>
          </button>
        </div>
      </div>
    </header>
  );
}
