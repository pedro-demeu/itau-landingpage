import { Container } from "./container";
import PhoneIcon from "@/app/assets/icon-phone.svg";
import SolutionsIcon from "@/app/assets/icon-solutions.svg";
import OptionsIcon from "@/app/assets/icon-options.svg";
import CardIcon from "@/app/assets/icon-card.svg";
import { ListServices } from "./list-services";
import Image from "next/image";
import PhoneImg from "@/app/assets/phone.png";

export function SectionServices() {
  return (
    <section className="relative w-full h-[965px]">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <span className="text-primary-orange text-sm font-bold uppercase mb-9 block">
            Serviços exclusivos
          </span>
          <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">
            Gerencie suas finanças sem sair de casa
          </h2>
          <p className="text-lg max-w-[554px] mb-16 text-second-gray">
            Veja como você pode cuidar das suas finanças pelo app Itaú de forma
            segura, rápida e o melhor, no conforto da sua casa.
          </p>

          <ul className="flex flex-col items-start gap-9">
            <ListServices
              description="Acompanhar sua conta, fazer transferências e pagamentos de onde
                estiver"
              src={PhoneIcon}
              alt="Phone Icon"
              key={1}
            />
            <ListServices
              description="Soluções de empréstimos e renegociação para organizar suas finanças"
              src={SolutionsIcon}
              alt="Phone Icon"
              key={2}
            />
            <ListServices
              description="Diversas opções de investimento, de acordo com o seu perfil de investidor"
              src={OptionsIcon}
              alt="Phone Icon"
              key={3}
            />
            <ListServices
              description="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual."
              src={CardIcon}
              alt="Phone Icon"
              key={4}
            />
          </ul>
        </div>
      </Container>
      <div className="absolute top-0 right-0 flex items-center h-full w-[32%] bg-gray-phone">
        <Image
          src={PhoneImg}
          alt="Phone Image"
          className="translate-x-[-50%]"
        />
      </div>
    </section>
  );
}
