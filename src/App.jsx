import React, { useState, useEffect } from 'react';
import { ChevronRight, Download, FileText, BarChart2, TrendingUp, Briefcase, Shield, PieChart } from 'lucide-react';
import './assets/styles/animations.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carrusel automático para los logos de empresas
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 6);
    }, 2000); // Más rápido para un movimiento más fluido
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Header minimalista */}
      <header className="py-4 px-6 md:px-16 lg:px-24 border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* Espacio para logo (sin texto) */}
            <div className="mr-3 bg-green-600 p-2 rounded h-12 w-12">
              {/* Aquí se insertará el logo */}
            </div>
            <div className="ml-1 text-2xl font-bold text-gray-900">RADIOGRAFIAS FINANCIERAS</div>
          </div>
          
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-8 mr-8">
              <a href="#inicio" className="text-gray-900 hover:text-green-600 transition">Inicio</a>
              <a href="#servicios" className="text-gray-900 hover:text-green-600 transition">Servicios</a>
            </nav>
            
            <div className="hidden md:flex space-x-4">
              <a href="#recursos" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">Recursos</a>
              <a href="#contacto" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">Contacto</a>
            </div>
          </div>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 border-t border-gray-100">
            <a href="#inicio" className="block py-2 px-4 text-gray-900">Inicio</a>
            <a href="#servicios" className="block py-2 px-4 text-gray-900">Servicios</a>
            <a href="#recursos" className="block py-2 px-4 text-gray-900">Recursos</a>
            <a href="#contacto" className="block py-2 px-4 text-gray-900">Contacto</a>
          </div>
        )}
      </header>

      {/* Hero Section inspirado en las imágenes de referencia */}
      <section id="inicio" className="py-32 px-6 md:px-16 lg:px-24 bg-blue-700 flex flex-col items-start shadow-2xl rounded-lg my-8 mx-4 md:mx-8 animate-fadeIn">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slideInLeft">
            Radiografías Financieras
          </h1>
          <div className="w-24 h-1 bg-white mb-8 animate-growWidth"></div>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl animate-fadeIn">
            Transformando empresas mediante soluciones financieras estratégicas y contraloría especializada para optimizar su rendimiento y crecimiento.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contacto" className="bg-white text-blue-700 px-8 py-3 rounded-md text-lg font-medium transition inline-flex items-center hover:bg-blue-50 transform hover:scale-105 duration-300">
              Solicitar Consultoría
            </a>
          </div>
        </div>
      </section>

      {/* Empresas que han confiado - Carrusel */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50 shadow-2xl rounded-lg my-8 mx-4 md:mx-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Empresas que han confiado en nosotros
          </h2>
          
          <div className="relative overflow-hidden h-16 md:h-20">
            <div 
              className="flex items-center justify-center transition-all duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 16.66}%)` }}
            >
              {/* Logos de empresas con efecto de carrusel */}
              {Array(6).fill(0).map((_, index) => (
                <div key={index} className="min-w-1/6 px-6 flex justify-center">
                  <div className="h-12 w-32 bg-gray-300 flex items-center justify-center text-gray-700 font-bold rounded">
                    Cliente {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas de especialización - 6 servicios en total */}
      <section id="servicios" className="py-20 px-6 md:px-16 lg:px-24 bg-white shadow-2xl rounded-lg my-8 mx-4 md:mx-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Áreas de Especialización</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales para la gestión financiera de su empresa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SDF */}
            <div className="bg-white p-6 rounded-lg transition hover:shadow-2xl shadow-xl border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="mb-6 text-green-600">
                <BarChart2 size={40} className="transform hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">"SDF" SISTEMA PARA RADIOGRAFIAS FINANCIERAS</h3>
              <p className="text-gray-600 mb-4">
                Diagnóstico financiero completo con rating score, evaluación de flujos de efectivo y salud financiera.
              </p>
              <a href="#" className="inline-flex items-center text-green-600 font-medium">
                Conocer más <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            {/* Contraloría */}
            <div className="bg-white p-6 rounded-lg transition hover:shadow-2xl shadow-xl border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="mb-6 text-green-600">
                <Briefcase size={40} className="transform hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">CONTRALORÍA Y DIRECCIÓN FINANCIERA</h3>
              <p className="text-gray-600 mb-4">
                Servicios de outsourcing para Controller & CFO, apoyo estratégico a la dirección gerencial.
              </p>
              <a href="#" className="inline-flex items-center text-green-600 font-medium">
                Conocer más <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            {/* SPF */}
            <div className="bg-white p-6 rounded-lg transition hover:shadow-2xl shadow-xl border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="mb-6 text-green-600">
                <TrendingUp size={40} className="transform hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">"SPF" SISTEMA PARA PROYECCIONES FINANCIERAS</h3>
              <p className="text-gray-600 mb-4">
                Desarrollo de escenarios futuros e indicadores KPI para planificación estratégica y toma de decisiones.
              </p>
              <a href="#" className="inline-flex items-center text-green-600 font-medium">
                Conocer más <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            {/* BPM */}
            <div className="bg-white p-6 rounded-lg transition hover:shadow-2xl shadow-xl border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="mb-6 text-green-600">
                <PieChart size={40} className="transform hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">BPM - BUSINESS PROCESS MANAGEMENT</h3>
              <p className="text-gray-600 mb-4">
                Análisis de gestión por procesos enfocado a organización transversal, modelación y alineación estratégica.
              </p>
              <a href="#" className="inline-flex items-center text-green-600 font-medium">
                Conocer más <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            {/* Contabilidad */}
            <div className="bg-white p-6 rounded-lg transition hover:shadow-2xl shadow-xl border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="mb-6 text-green-600">
                <FileText size={40} className="transform hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">CONTABILIDAD Y ESTADOS FINANCIEROS</h3>
              <p className="text-gray-600 mb-4">
                Supervisión y eficiencia en cierre contable mensual, sistema de información gerencial y consolidación corporativa.
              </p>
              <a href="#" className="inline-flex items-center text-green-600 font-medium">
                Conocer más <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            {/* Impuestos */}
            <div className="bg-white p-6 rounded-lg transition hover:shadow-2xl shadow-xl border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="mb-6 text-green-600">
                <Shield size={40} className="transform hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">ANÁLISIS DE IMPUESTOS</h3>
              <p className="text-gray-600 mb-4">
                Evaluación, organización y optimización de la situación fiscal para asegurar cumplimiento y maximizar beneficios.
              </p>
              <a href="#" className="inline-flex items-center text-green-600 font-medium">
                Conocer más <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos - Según la imagen */}
      <section id="recursos" className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50 shadow-2xl rounded-lg my-8 mx-4 md:mx-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recursos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Documentación, guías y herramientas para mejorar sus finanzas
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Servicios Profesionales */}
            <div className="bg-white p-6 rounded-lg transition hover:shadow-2xl shadow-xl border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="flex flex-col mb-6">
                <img src="/images/recursos/servicios.jpg" alt="Servicios" className="mb-4 h-20 w-20 object-cover rounded transform hover:scale-105 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-blue-600">MENU DE SERVICIOS PROFESIONALES DE CONTADURIA Y FINANZAS</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Ofrecemos una amplia gama de servicios contables y financieros para empresas de todos los tamaños, 
                incluyendo contraloría, gestión fiscal, y optimización de procesos financieros.
              </p>
              <button className="w-full bg-red-800 hover:bg-red-900 text-white py-2 rounded-md font-medium transition flex items-center justify-center mt-4 transform hover:scale-105 duration-300">
                <Download size={16} className="mr-2" /> Descargar PDF
              </button>
            </div>
            
            {/* Diagnóstico Financiero */}
            <div className="bg-white p-6 rounded-lg transition hover:shadow-2xl shadow-xl border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="flex flex-col mb-6">
                <img src="/images/recursos/diagnostico.jpg" alt="Diagnóstico" className="mb-4 h-20 w-20 object-cover rounded transform hover:scale-105 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-blue-600">PROLOGO DE DIAGNOSTICO FINANCIERO Y CALIFICACION CREDITICIA</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Evaluamos la salud financiera de su empresa mediante análisis detallado de estados financieros, 
                flujos de efectivo y estructura de capital, estableciendo una calificación crediticia objetiva.
              </p>
              <button className="w-full bg-red-800 hover:bg-red-900 text-white py-2 rounded-md font-medium transition flex items-center justify-center mt-4 transform hover:scale-105 duration-300">
                <Download size={16} className="mr-2" /> Descargar PDF
              </button>
            </div>
            
            {/* Perfil Profesional */}
            <div className="bg-white p-6 rounded-lg transition hover:shadow-2xl shadow-xl border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="flex flex-col mb-6">
                <img src="/images/recursos/perfil.jpg" alt="Perfil" className="mb-4 h-20 w-20 object-cover rounded transform hover:scale-105 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-blue-600">PERFIL PROFESIONAL</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nuestro equipo está liderado por profesionales con más de 20 años de experiencia en finanzas 
                corporativas, auditoría y consultoría para empresas internacionales y locales.
              </p>
              <button className="w-full bg-red-800 hover:bg-red-900 text-white py-2 rounded-md font-medium transition flex items-center justify-center mt-4 transform hover:scale-105 duration-300">
                <Download size={16} className="mr-2" /> Descargar PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Perfil Profesional */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-white shadow-2xl rounded-lg my-8 mx-4 md:mx-8">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="bg-green-600 text-white p-6 rounded-full">
                  <Shield size={64} />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Edgardo Antonio Murillo Hernández</h3>
                <h4 className="text-lg text-green-600 mb-4">Licenciado en Contaduría Pública & Máster en Dirección Financiera</h4>
                <p className="text-gray-600 mb-4">
                  Con más de 23 años de experiencia como Contralor Financiero de importantes grupos corporativos, 
                  complementada con 5 años en Price Waterhouse en el área de Auditoría y 5 años en IBM de Honduras 
                  en Contabilidad y Controles Internos.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Price Waterhouse</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">IBM</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">CPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-20 px-6 md:px-16 lg:px-24 bg-white shadow-2xl rounded-lg my-8 mx-4 md:mx-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solicitar Consultoría</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete el formulario y nos pondremos en contacto a la brevedad
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 border border-gray-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition transform hover:scale-105 duration-300">
                Enviar consulta
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-16 lg:px-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="mr-3 bg-white p-2 rounded">
                  <span className="text-green-700 font-bold text-xl">LOGO</span>
                </div>
                <div className="text-xl font-bold">RADIOGRAFÍAS FINANCIERAS</div>
              </div>
              <p className="text-gray-400 max-w-md">
                Soluciones prácticas para la gestión financiera empresarial desde 1995.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <p className="text-gray-400 mb-2">
                <a href="mailto:radiografiasfinancieras@gmail.com" className="hover:text-white transition">
                  radiografiasfinancieras@gmail.com
                </a>
              </p>
              <p className="text-gray-400 mb-2">
                <a href="https://wa.me/50498342166" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  WhatsApp: +504 9834-2166
                </a>
              </p>
              <p className="text-gray-400 mb-4">San Pedro Sula, Honduras</p>
              
              <div className="flex space-x-4">
                <a href="https://facebook.com/radiografiasfinancieras" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                </a>
                <a href="https://wa.me/50498342166" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Radiografías Financieras. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;