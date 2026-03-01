import S from './infoCard.module.scss'

export default function InfoCard(props) {
  return (
    <article className={S.article}>
      <img src={props.img} alt={props.alt} />
      <h2>{props.subtitulo}</h2>
      <p>{props.paragrafo}</p>
      <button>{props.textBotao}</button>
    </article>
  )
}
