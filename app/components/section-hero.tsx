import { Container } from "./container";
import ImgAppleStore from "@/app/assets/btn-apple-store.svg";
import ImgGooglePlay from "@/app/assets/btn-google-play.svg";
import Image from "next/image";
import ArrowExplorer from "@/app/assets/arrow-explorer.svg";
import ImgWoman from "@/app/assets/woman.png";
export function SectionHero() {
  return (
    <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex-1 max-w-[500px]">
          <h1 className="text-white font-bold text-7x1 mb-4">
            Tenha seu banco na palma da mão.
          </h1>
          <p className="text-white text-xl max-w[408px] mb-8">
            Todas as operações que você precisa em um só lugar. Simples,
            completo e feito para você.
          </p>
          <div className="flex gap-4 mb-24">
            <button>
              <Image src={ImgAppleStore} alt="Baixe na App Store" />
            </button>
            <button>
              <Image src={ImgGooglePlay} alt="Baixe no Google Play" />
            </button>
          </div>
          <button className="flex items-center gap-3">
            <Image src={ArrowExplorer} alt="Arrow Down" />
            <span className="text-white text-sm">Continue explorando</span>
          </button>
        </div>

        <Image src={ImgWoman} alt="Mulher com celular" className="mr-[-41px]" />
      </Container>
    </section>
  );
}
