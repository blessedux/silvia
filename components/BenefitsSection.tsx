import React from 'react';
import { HiChip, HiUserGroup, HiBookOpen, HiPlusCircle } from 'react-icons/hi';

const BenefitsSection: React.FC = () => (
  <div className="max-w-4xl mx-auto text-white space-y-8 pointer-events-auto">
    <h2 className="text-4xl font-bold text-center mb-8">
      Beneficios y Características
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center">
        <HiChip className="text-4xl text-blue-300 mb-2" />
        <h3 className="text-2xl font-semibold mb-4 text-center">Acceso a Beneficios</h3>
        <p className="text-lg text-center">Contacta a quienes aún no reciben los beneficios que les corresponden, usando el canal más efectivo para comunicarse y firmar trámites sin salir de casa.</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center">
        <HiUserGroup className="text-4xl text-pink-300 mb-2" />
        <h3 className="text-2xl font-semibold mb-4 text-center">Compañía y Diversión</h3>
        <p className="text-lg text-center">Nunca más solo: disfruta de conversaciones, juegos y actividades diseñadas para entretener y acompañar a quienes más lo necesitan.</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center">
        <HiBookOpen className="text-4xl text-green-300 mb-2" />
        <h3 className="text-2xl font-semibold mb-4 text-center">Aprendizaje Continuo</h3>
        <p className="text-lg text-center">Accede a recursos y conocimientos actualizados en cualquier momento.</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center">
        <HiPlusCircle className="text-4xl text-yellow-300 mb-2" />
        <h3 className="text-2xl font-semibold mb-4 text-center">Emergencia Médica</h3>
        <p className="text-lg text-center">Obtén ayuda rápida y eficiente en caso de una emergencia médica, conectando con los servicios adecuados en el menor tiempo posible.</p>
      </div>
    </div>
  </div>
);

export default BenefitsSection; 