import { Calendar, Mail, MapPin } from "lucide-react";
import u from "./usuario.module.scss";
import { User } from "lucide-react";

export default function UsuarioPage() {
  return (
    <section className={u.usuario}>
      <div className={u.usuarioContainer}>
        <img
          alt="Imagem de usuário de Lucas Couto Duarte"
          src="https://media.licdn.com/dms/image/v2/D4D03AQFWDFOqSOQ5mQ/profile-displayphoto-scale_400_400/B4DZj1VrW4GkAk-/0/1756462759571?e=1772668800&v=beta&t=FAbRnlFGzKCk6snZPpputN64sZ_r_rrPLVXZK-6c-w8"
        />
        <section className={u.textElements}>
          <div className={u.id}>
            <h2>Lucas Couto Duarte</h2>
            <p>Voluntário</p>
          </div>
          <p className={u.bio}>
            Estudante de Ciências da Computação e em transição de carreira.
            Apaixonado por tecnologia, inovação e automação!.
          </p>
          <div className={u.info}>
            <div>
              <MapPin size={14} />
              <p>Uberlândia, MG</p>
            </div>
            <div>
              <Mail size={14} />
              <p>lucascoutoduarte@gmail.com</p>
            </div>
            <div>
              <Calendar size={14} />
              <p>Membro desde Janeiro 2022</p>
            </div>
          </div>
          <div className={u.badges}>
            <div className={u.badge}>Educação</div>
            <div className={u.badge}>Tecnologia</div>
            <div className={u.badge}>Design</div>
            <div className={u.badge}>Idioma</div>
          </div>
        </section>
      </div>
    </section>
  );
}
