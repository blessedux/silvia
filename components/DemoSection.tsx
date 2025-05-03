import React from 'react';

const DemoSection: React.FC = () => (
  <div className="max-w-4xl mx-auto pointer-events-auto">
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">
        Demo de Conversación
      </h2>
      <div className="bg-black/50 rounded-lg p-6 space-y-4">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
            <span className="text-white">S</span>
          </div>
          <div className="bg-white/10 rounded-lg p-4 max-w-[80%]">
            <p className="text-white">Hola, soy Silvia. ¿En qué puedo ayudarte hoy?</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 justify-end">
          <div className="bg-white/10 rounded-lg p-4 max-w-[80%]">
            <p className="text-white">Me gustaría aprender más sobre desarrollo personal</p>
          </div>
          <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
            <span className="text-white">U</span>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
            <span className="text-white">S</span>
          </div>
          <div className="bg-white/10 rounded-lg p-4 max-w-[80%]">
            <p className="text-white">¡Claro! Podemos trabajar en diferentes áreas como gestión del tiempo, desarrollo de hábitos positivos, y mejora de la productividad. ¿Por cuál te gustaría comenzar?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DemoSection; 