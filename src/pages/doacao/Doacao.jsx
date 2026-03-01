import InfoCard from "../../components/infoCard/infoCard";
import igFamilia from "../../assets/images/iG-familia.png";
import S from './doacao.module.scss'

export default function Doacao() {
  return (
    <main className={S.main}>
      <h1>Doação</h1>
      <section>
        <article>
          <InfoCard
          img={igFamilia}
          alt="Imagem de uma família feliz"
          subtitulo="Instituto grande familia"
          paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
          textBotao="Quero Doar"
          />

          <InfoCard
          img={igFamilia}
          alt="Imagem de uma família feliz"
          subtitulo="Instituto grande familia"
          paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
          textBotao="Quero Doar"
          />

          <InfoCard
          img={igFamilia}
          alt="Imagem de uma família feliz"
          subtitulo="Instituto grande familia"
          paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
          textBotao="Quero Doar"
          />
        </article>
      </section>
    </main>
  );
}
