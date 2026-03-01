import f from "./footer.module.scss"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={f.footer}>
      <div className={f.footerContainer}>
        <p>
          © 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.
        </p>
      </div>
    </footer>
  )
}
