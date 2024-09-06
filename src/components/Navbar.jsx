import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Referencia al menú

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el menú cuando se hace clic fuera de él
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  // Cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-zinc-800 text-gray-600 md:p-8 p-4 fixed top-0 w-full  shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center text-gray-100">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-100">
          <a className="font-serif" href="#">
            GYM 🥇
          </a>
        </div>

        {/* Icono del menú (visible en móvil) */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Menú de navegación */}
        <ul
          ref={menuRef} // Referencia al menú
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex absolute md:relative top-16 md:top-0 left-0 md:left-auto bg-neutral-800/70 md:space-x-8 md:bg-transparent w-full md:w-auto p-4 md:p-0`}
        >
          <li className="my-2 md:my-0">
            <a href="#hero" className="hover:text-sky-400" onClick={handleLinkClick}>
              Inicio
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a href="#about" className="hover:text-sky-400" onClick={handleLinkClick}>
              Sobre Nosotros
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a href="#services" className="hover:text-sky-400" onClick={handleLinkClick}>
              Entrenamientos
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a href="#contact" className="hover:text-sky-400" onClick={handleLinkClick}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
