import S from "./home.module.scss";
import Banner from "../../assets/images/banner.png";

export default function Home() {
  return (
   <main className={S.main}>
      <section className={S.info}>
        <h1>Projetos Sociais que Transformam</h1>
        <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
        <button>Cadastrar Empresa ➔</button>
        <section className={S.infoDados}>
          <article>
            <h2>500+</h2>
            <h3>Empresas Voluntárias</h3>
            <article>
            <h2>1.2K+</h2>
            <h3>Projetos Realizados</h3>
          </article>
          <article>
            <h2>50K+</h2>
            <h3>Vidas Impactadas</h3>
          </article>
          </article>
        </section>
      </section>
      <img src={Banner} alt="Imagem de mãos segurando o globo terrestre" />
  </main>
  );
}
