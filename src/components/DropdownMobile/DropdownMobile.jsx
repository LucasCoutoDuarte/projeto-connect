import {
  CalendarHeart,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  HandHeart,
  Home,
  HouseHeart,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import d from "./dropdownMobile.module.scss";

const navLinks = [
  { icon: Home, label: "Início", path: "/" },
  { icon: HandHeart, label: "Doação", path: "/doacao" },
  { icon: HouseHeart, label: "Voluntariado", path: "/voluntariado" },
  { icon: GraduationCap, label: "Mentoria", path: "/mentoria" },
  { icon: CalendarHeart, label: "Eventos", path: "/eventos-e-palestras" },
];

const otherNavLinks = [
  { icon: User, label: "Lucas Couto Duarte", path: "/perfil" },
  { icon: Users, label: "Voluntariados", path: "/voluntariados" },
  { icon: Settings, label: "Configurações de conta", path: "/confifuracoes" },
  { icon: LogOut, label: "Sair", path: "/sair" },
];

export default function DropdownMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const droodownRef = useRef(null);
  const location = useLocation();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (droodownRef.current && !droodownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={d.dropdownContainerMobile} ref={droodownRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`${d.dropdownTrigger} ${isOpen ? d.active : ""}`}
        onClick={toggleDropdown}
      >
        <img
          alt="Foto Lucas Couto Duarte."
          src="https://media.licdn.com/dms/image/v2/D4D03AQFWDFOqSOQ5mQ/profile-displayphoto-scale_400_400/B4DZj1VrW4GkAk-/0/1756462759571?e=1772668800&v=beta&t=FAbRnlFGzKCk6snZPpputN64sZ_r_rrPLVXZK-6c-w8"
        />

        <span>Lucas Couto</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isOpen && (
        <div className={`${d.dropdownMenu} ${d.scaleInCenter}`}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                className={`${d.mobileOnlyLink} ${d.mobileOnlyLinkMobile} ${isActive ? d.linkActive : d.linkDefault}`}
                key={link.label}
                to={link.path}
              >
                <link.icon size={16} />
                <span>{link.label}</span>
              </Link>
            );
          })}

          <div className={`${d.divider} ${d.mobileOnlyLine}`} />

          {otherNavLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                className={`${d.mobileOnlyLink} ${isActive ? d.linkActive : d.linkDefault}`}
                key={item.label}
                to={item.path}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
