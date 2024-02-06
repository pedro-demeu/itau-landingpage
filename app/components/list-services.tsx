import Image from "next/image";

interface Props {
  description: string;
  src: string;
  alt: string;
}
export function ListServices({ alt, src, description }: Props) {
  return (
    <li className="flex items-center gap-9 pb-9 border-b-[1px] ">
      <div className="w-7 h-7 flex items-center justify-center">
        <Image
          {...{
            src,
            alt,
          }}
        />
      </div>

      <p className="flex-1 text-txt-gray pr-2">{description}</p>
    </li>
  );
}
