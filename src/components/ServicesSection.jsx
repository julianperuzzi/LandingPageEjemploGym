import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-zinc-900 min-h-[90vh] flex flex-col justify-center text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Nuestros Entrenamientos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
          {/* Entrenamiento 1 */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-lg hover:bg-sky-950">
            <div className="overflow-hidden rounded-lg relative">
              <img
                src="https://i.pinimg.com/1200x/6c/63/52/6c6352f8aafe5c6f6ab2e82a07f339be.jpg" // Imagen inicial
                alt="Entrenamiento 1"
                className="w-full h-72 object-cover transition-opacity duration-300"
              />
              <img
                src="https://i.pinimg.com/1200x/3a/7e/64/3a7e64af6c0e987f776c8a048e8c073f.jpg" // Imagen al hacer hover
                alt="Entrenamiento 1 Hover"
                className="w-full h-72 object-cover absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold mb-2">Entrenamiento 1</h3>
              <p className="text-gray-100">
                Breve explicación adicional del Entrenamiento 1. Aquí puedes agregar detalles importantes.
              </p>
            </div>
          </div>

          {/* Entrenamiento 2 */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-lg hover:bg-sky-950">
            <div className="overflow-hidden rounded-lg relative">
              <img
                src="https://i.pinimg.com/1200x/2a/c7/f2/2ac7f2b60838ff3c0c14c2c8aa5db156.jpg" // Imagen inicial
                alt="Entrenamiento 2"
                className="w-full h-72 object-cover transition-opacity duration-300"
              />
              <img
                src="https://i.pinimg.com/1200x/d5/2d/88/d52d8842147d09334ef27a668793bd91.jpg" // Imagen al hacer hover
                alt="Entrenamiento 2 Hover"
                className="w-full h-72 object-cover absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold mb-2">Entrenamiento 2</h3>
              <p className="text-gray-100">
                Breve explicación adicional del Entrenamiento 2. Aquí puedes agregar detalles importantes.
              </p>
            </div>
          </div>

          {/* Entrenamiento 3 */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-lg hover:bg-sky-950">
            <div className="overflow-hidden rounded-lg relative">
              <img
                src="https://i.pinimg.com/1200x/93/b1/40/93b140a0a031dbc697f97d9761e51c12.jpg" // Imagen inicial
                alt="Entrenamiento 3"
                className="w-full h-72 object-cover transition-opacity duration-300"
              />
              <img
                src="https://i.pinimg.com/1200x/f6/9a/ab/f69aabd11bbe7247513ec6c7d9850c32.jpg" // Imagen al hacer hover
                alt="Entrenamiento 3 Hover"
                className="w-full h-72 object-cover absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold mb-2">Entrenamiento 3</h3>
              <p className="text-gray-100">
                Breve explicación adicional del Entrenamiento 3. Aquí puedes agregar detalles importantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
