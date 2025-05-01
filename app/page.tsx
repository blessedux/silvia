import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Heart, Gift, Brain } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-gradient-slow absolute -inset-[10px] opacity-20 bg-gradient-to-r from-blue-100 via-purple-100 to-teal-100"></div>
        </div>
      </div>

      {/* Header */}
      <header className="container mx-auto py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-white font-bold">S</span>
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            SILV-IA
          </h1>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition">
                Características
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">
                Cómo Funciona
              </Link>
            </li>
            <li>
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                Contacto
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col lg:flex-row items-center py-16 md:py-24">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Un{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Compañero IA
            </span>{" "}
            Cariñoso para Tus Seres Queridos
          </h2>
          <p className="text-xl text-gray-600 max-w-xl">
            SILV-IA ayuda a las personas mayores a navegar por la vida diaria, acceder a beneficios y preservar sus
            recuerdos para las generaciones futuras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full">
              Comenzar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full"
            >
              Saber Más
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-xl">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">S</span>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <p className="text-gray-800">
                    ¡Buenos días, María! ¿Sabías que eres elegible para el nuevo programa de bienestar para personas mayores?
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 shadow-sm border border-blue-100 ml-auto max-w-[80%]">
                  <p className="text-gray-800">Oh, no lo sabía. ¿Me puedes ayudar a inscribirme?</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <p className="text-gray-800">Te guiaré paso a paso en el proceso.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Cómo SILV-IA{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Mejora Vidas
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Compañía</h3>
              <p className="text-gray-600">
                Siempre disponible para conversar, escuchar y brindar apoyo emocional durante todo el día.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                <Gift className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Navegador de Beneficios</h3>
              <p className="text-gray-600">
                Identifica beneficios municipales y gubernamentales disponibles y ayuda con las solicitudes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                <Database className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Preservación de Recuerdos</h3>
              <p className="text-gray-600">
                Crea una base de datos segura de recuerdos, historias e información valiosa para las generaciones futuras.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <Brain className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Presencia Futura</h3>
              <p className="text-gray-600">
                Potencial para crear un compañero IA que preserve la personalidad y los recuerdos para los seres queridos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Simple</span>{" "}
            de Usar
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Configuración</h3>
              <p className="text-gray-600">Proceso de configuración rápido y fácil con preferencias personalizadas.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Conectar</h3>
              <p className="text-gray-600">SILV-IA aprende sobre necesidades, intereses y beneficios disponibles.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-teal-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Disfrutar</h3>
              <p className="text-gray-600">Experimenta compañía, asistencia y tranquilidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Mejorar la Vida con SILV-IA?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Únete a miles de familias que confían en SILV-IA para brindar compañía, asistencia y tranquilidad a
            sus seres queridos.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg rounded-full">
            Comenzar Hoy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm py-12 mt-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                SILV-IA
              </span>
            </div>
            <div className="text-gray-500 text-sm">© {new Date().getFullYear()} SILV-IA. Todos los derechos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
