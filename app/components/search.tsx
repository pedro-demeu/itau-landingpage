import IconSearch from "@/app/assets/icon-search.svg";
import Image from "next/image";

export function Search() {
  return (
    <div className="flex items-center gap-4">
      <Image src={IconSearch} alt="Search" />
      <input
        placeholder="Buscar..."
        type="text"
        className="pr-5 placeholder:text-white bg-transparent outline-none text-white"
      />
    </div>
  );
}
