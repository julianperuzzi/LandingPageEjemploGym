import React from "react";
import { FaRunning, FaDumbbell, FaStopwatch20, FaWifi, FaParking, FaBuilding } from "react-icons/fa";

const Reservations = () => {
  return (
    <section id="reservations" className="bg-zinc-900 py-16 min-h-screen text-white">
      <div className="container mx-auto px-6 ">
        <h3 className="text-4xl font-bold text-white text-center mt-20 mb-10">
          Reservas e Información del Lugar
        </h3>


        <div className=" md:gap-16 gap-4 text-center grid md:grid-cols-3 grid-cols-2">
          <div>
            <FaRunning className="mx-auto text-zinc-400 text-5xl mb-4" />
            <h4 className="md:text-2xl text-lg font-semibold mb-2 text-gray-100">
              Entrenamiento 1
            </h4>
            <p className="text-gray-200 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel ut eligendi recusandae 
            </p>
          </div>

          <div>
            <FaDumbbell className="mx-auto text-zinc-400 text-5xl mb-4" />
            <h4 className="md:text-2xl text-lg font-semibold mb-2 text-gray-100">
              Entrenamientos Personalizados
            </h4>
            <p className="text-gray-200 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi, dolorem facere asperiores incidunt temporibus, corrupti neque aspernatur doloribus
            </p>
          </div>

          <div>
            <FaStopwatch20 className="mx-auto text-zinc-400 text-5xl mb-4" />
            <h4 className="md:text-2xl text-lg font-semibold mb-2 text-gray-100">
              Mejora tu Rendimiento
            </h4>
            <p className="text-gray-200 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam error quod 
            </p>
          </div>

          <div>
            <FaWifi className="mx-auto text-zinc-400 text-5xl mb-4" />
            <h4 className="md:text-2xl text-lg font-semibold mb-2 text-gray-100">
              WiFi de Alta Velocidad
            </h4>
            <p className="text-gray-200 text-sm md:text-base">
              Conexión rápida y confiable en todas las áreas.
            </p>
          </div>

          <div>
            <FaParking className="mx-auto text-zinc-400 text-5xl mb-4" />
            <h4 className="md:text-2xl text-lg font-semibold mb-2 text-gray-100">
              Estacionamiento Privado
            </h4>
            <p className="text-gray-200 text-sm md:text-base">
              Estacionamiento gratuito y accesible para todos nuestros visitantes.
            </p>
          </div>

          <div>
            <FaBuilding className="mx-auto text-zinc-400 text-5xl mb-4" />
            <h4 className="md:text-2xl text-lg font-semibold mb-2 text-gray-100">
              Instalaciones Modernas
            </h4>
            <p className="text-gray-200 text-sm md:text-base">
              Espacios diseñados con comodidad y tecnología avanzada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
