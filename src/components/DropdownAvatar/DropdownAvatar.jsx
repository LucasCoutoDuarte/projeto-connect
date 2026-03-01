import {
  ChevronDown,
  ChevronUp,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import d from "./DropdownAvatar.module.scss";

const navLinks = [
  { icon: User, label: "Lucas Couto Duarte", path: "/perfil" },
  { icon: Users, label: "Voluntariados", path: "/voluntariados" },
  { icon: Settings, label: "Configurações de conta", path: "/confifuracoes" },
  { icon: LogOut, label: "Sair", path: "/sair" },
];

export const DropdownAvatar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const droodownRef = useRef(null);

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
    <div className={d.dropdownContainer} ref={droodownRef}>
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

        <span>Lucas Couto Duarte</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isOpen && (
        <div className={`${d.dropdownMenu} ${d.scaleInCenter}`}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                className={`${d.link}  ${isActive ? d.linkActive : ""}`}
                key={link.label}
                to={link.path}
              >
                <link.icon size={16} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
