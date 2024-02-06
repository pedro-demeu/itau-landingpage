import Image from "next/image";
import Arrow from "@/app/assets/arrow-down.svg";

interface Props {
  name: string;
}
export function ItemMenu({ name }: Props) {
  return (
    <button className="flex items-center gap-3">
      <span className="text-white font-bold">{name}</span>
      <Image src={Arrow} alt="Arrow Dropdown" />
    </button>
  );
}
