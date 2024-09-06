import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-zinc-900 min-h-[80vh] flex items-center text-white" data-aos="fade-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Imagen a la izquierda */}
        <div className="md:w-1/2 mb-8 md:mb-0 w-full">
          <img
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Sobre Nosotros"
            className="md:w-10/12 w-11/12 md:h-96 h-48 rounded-lg shadow-lg object-cover mx-auto"
          />
        </div>

        {/* Texto a la derecha */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h2>
          <p className="text-lg md:text-xl leading-relaxed mx-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe soluta, minima cupiditate explicabo libero, quia voluptas, delectus molestiae veniam deserunt est. Minima pariatur quibusdam sunt velit nostrum distinctio praesentium similique.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block bg-sky-900 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
