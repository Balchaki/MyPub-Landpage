"use client";
import Link from "next/link"
import { useState, useEffect } from 'react';
interface IconProps extends React.SVGProps<SVGSVGElement> {}


export default function Component() {
  const [navBackground, setNavBackground] = useState('bg-transparent');

  useEffect(() => {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;
    const homeHeight = homeSection.offsetHeight;

    const handleScroll = () => {
      const scrollPos = window.scrollY + homeHeight;
      if (scrollPos > homeHeight) {
        setNavBackground('bg-[#f30101c2]'); // Semi-transparent black background
      } else {
        setNavBackground('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className="flex flex-col min-h-screen">
        <header className={`fixed top-0 left-0 w-full py-6 px-4 md:px-8 z-50 ${navBackground}`}>
          <div className="container mx-auto flex items-center justify-between">
            <Link href="#" className="text-2xl font-bold text-white" prefetch={false}>
              MyPub
            </Link>
            <nav className="md:flex items-center space-x-6 block">
              <Link href="#home" className="text-white hover:text-gray-300" prefetch={false}>
                Home
              </Link>
              <Link href="#about" className="text-white hover:text-gray-300" prefetch={false}>
                Sobre
              </Link>
              <Link href="#features" className="text-white hover:text-gray-300" prefetch={false}>
                Recursos
              </Link>
              <Link href="#testimonials" className="text-white hover:text-gray-300" prefetch={false}>
                Depoimentos
              </Link>
              <Link href="#pricing" className="text-white hover:text-gray-300" prefetch={false}>
                Produtos
              </Link>
              <Link href="#contact" className="text-white hover:text-gray-300" prefetch={false}>
                Contato
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <section
              id="home"
              className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#a50606] to-[#e90505] py-20 px-4 md:px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Simplifique o Gerenciamento do seu evento</h1>
                <p className="text-lg text-white">
                  MyPub é a plataforma all-in-one que revoluciona a forma como você gerencia seu evento.
                </p>
                <div className="flex space-x-4">
                  <Link
                      href="#about"
                      className="inline-flex items-center px-6 py-3 bg-white text-[#1a2980] font-medium rounded-md hover:bg-gray-200"
                      prefetch={false}
                  >
                    Saiba mais...
                  </Link>
                  <Link
                      href="#"
                      className="inline-flex items-center px-6 py-3 bg-[#f30101] text-white font-medium rounded-md hover:bg-[#fb3636]"
                      prefetch={false}
                  >
                    Agende uma demonstração
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                    src="/placeholder.svg"
                    alt="Imagem do produto MyPub"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg animate-float"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </section>

          <section id="about" className="flex items-center justify-center w-full h-screen px-4 py-20 md:px-8 bg-muted">
            <div className="flex flex-col items-center justify-center px-4 md:px-6">
              <div className="space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-16">Sobre o MyPub</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    MyPub é a plataforma all-in-one que revoluciona a forma como você gerencia seu bar e lounge. Do
                    monitoramento de mesas em tempo real aos cardápios digitais e solicitações de pedidos simplificadas,
                    nós temos tudo o que você precisa.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="flex flex-col justify-center items-center w-full h-screen px-4 py-20 md:px-8">
            <div className="container mx-auto mb-16 text-center">
              <h2 className="text-3xl font-bold">Nossos principais recursos</h2>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
                <MonitorIcon className="h-12 w-12 text-[#fb3636]" />
                <h3 className="text-2xl font-bold mt-4">Monitoramento em Tempo Real</h3>
                <p className="text-gray-600 mt-2">
                  Mantenha um olhar atento em suas reservas com nosso sistema de monitoramento em tempo real,
                  garantindo a alocação eficiente de recursos e a satisfação do cliente.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in delay-100">
                <MenuIcon className="h-12 w-12 text-[#fb3636]" />
                <h3 className="text-2xl font-bold mt-4">Cardápios Digitais</h3>
                <p className="text-gray-600 mt-2">
                  Simplifique o processo de pedidos com nossos intuitivos cardápios digitais, permitindo que os clientes
                  naveguem e façam pedidos com facilidade.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in delay-200">
                <TicketIcon className="h-12 w-12 text-[#fb3636]" />
                <h3 className="text-2xl font-bold mt-4">Validação de Vouchers e Ingressos</h3>
                <p className="text-gray-600 mt-2">
                  Valide rapidamente vouchers e ingressos, garantindo uma experiência perfeita para o cliente e um
                  registro preciso.
                </p>
              </div>
            </div>
          </section>

          <section id="testimonials" className="bg-[#f5f5f5] flex items-center justify-center w-full h-screen px-4 py-20 md:px-8">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-16">Público Alvo </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
                  <div className="flex items-center space-x-4 mb-4">
                    <div>
                      <h4 className="text-2xl font-bold">Bares</h4>
                      <p className="text-gray-600">Porque usar no seu bar?</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    A desorganização e a comunicação falha podem afetar a eficiência e causar atrasos. O MyPub resolve isso monitorando mesas em tempo real, simplificando pedidos e garantindo uma gestão de estoque eficaz, melhorando a satisfação dos clientes e a receita.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in delay-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <div>
                      <h2 className="text-2xl font-bold">Eventos</h2>
                      <p className="text-gray-600">Porque usar no seu evento?</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    A gestão inadequada de vouchers, ingressos e pedidos compromete a fluidez dos eventos. Com o MyPub, você emite e valida vouchers rapidamente, garantindo um evento bem-sucedido e uma experiência positiva para os participantes
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in delay-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div>
                      <h4 className="text-2xl font-bold">Lounges</h4>
                      <p className="text-gray-600">Porque usar no seu Lounge</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    A desorganização e a comunicação insuficiente podem impactar o conforto dos clientes. O MyPub permite o controle eficaz de mesas e camarotes, simplificando pedidos e melhorando a experiência, aumentando a reputação do seu lounge
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="pricing"
                   className="flex items-center justify-center w-full h-screen px-4 py-20 md:px-8 bg-gradient-to-r from-[#a50606] to-[#e90505]">
            <div className="container mx-auto p-10">
              <h2 className="text-6xl font-bold text-center mb-16 text-white">Produtos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
                  <h3 className="text-2xl font-bold mb-4">Iniciante</h3>
                  <p className="text-4xl font-bold mb-4">R$49/mês</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-[#fb3636]"/>
                      <span>Monitoramento em Tempo Real</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-[#fb3636]"/>
                      <span>Cardápios Digitais</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-[#fb3636]"/>
                      <span>Validação de Vouchers e Ingressos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <XIcon className="h-5 w-5 text-gray-400"/>
                      <span>Análises Avançadas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <XIcon className="h-5 w-5 text-gray-400"/>
                      <span>Soluções Personalizadas</span>
                    </li>
                  </ul>
                  <Link
                      href="#"
                      className="inline-flex items-center px-6 py-3 bg-[#fb3636] text-white font-medium rounded-md hover:bg-[#f30101]"
                      prefetch={false}
                  >
                    Começar
                  </Link>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in delay-100">
                  <h3 className="text-2xl font-bold mb-4">Pro</h3>
                  <p className="text-4xl font-bold mb-4">R$99/mês</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-[#fb3636]"/>
                      <span>Monitoramento em Tempo Real</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-[#fb3636]"/>
                      <span>Cardápios Digitais</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-[#fb3636]"/>
                      <span>Validação de Vouchers e Ingressos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-[#fb3636]"/>
                      <span>Análises Avançadas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <XIcon className="h-5 w-5 text-gray-400"/>
                      <span>Soluções Personalizadas</span>
                    </li>
                  </ul>
                  <Link
                      href="#"
                      className="inline-flex items-center px-6 py-3 bg-[#fb3636] text-white font-medium rounded-md hover:bg-[#f30101]"
                      prefetch={false}
                  >
                    Começar
                  </Link>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in delay-200">
                  <h3 className="text-2xl font-bold mb-4">Empresarial</h3>
                  <p className="text-4xl font-bold mb-4">Preço Personalizado</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-[#fb3636]"/>
                      <span>Monitoramento em Tempo Real</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-[#fb3636]"/>
                      <span>Cardápios Digitais</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-[#fb3636]"/>
                      <span>Validação de Vouchers e Ingressos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-[#fb3636]"/>
                      <span>Análises Avançadas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-[#fb3636]"/>
                      <span>Soluções Personalizadas</span>
                    </li>
                  </ul>
                  <Link
                      href="#"
                      className="inline-flex items-center px-6 py-3 bg-[#fb3636] text-white font-medium rounded-md hover:bg-[#f30101]"
                      prefetch={false}
                  >
                    Contate as Vendas
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section id="contact"
                   className="flex items-center justify-center w-full h-screen px-4 py-20 md:px-8 bg-muted">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Nome
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-[#f30101]"
                          placeholder="Digite seu name"
                          required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-[#f30101]"
                          placeholder="Digite seu email"
                          required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Assunto
                      </label>
                      <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-[#f30101]"
                          placeholder="Digite o assunto"
                          required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Mensagem
                      </label>
                      <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-[#f30101]"
                          placeholder="Digite sua mensagem"
                          required
                      />
                    </div>
                    <div className="text-center">
                      <button
                          type="submit"
                          className="inline-flex items-center px-6 py-3 bg-[#fb3636] text-white font-medium rounded-md hover:bg-[#f30101]"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Informações de contato</h3>
                      <div className="flex items-center space-x-2">
                        <PhoneIcon className="h-5 w-5 text-[#f30101]"/>
                        <span>+55 (48) 91234-5678</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MailIcon className="h-5 w-5 text-[#f30101]"/>
                        <span>contato@mypub.me</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <LocateIcon className="h-5 w-5 text-[#f30101]"/>
                        <span>Florianópolis/SC</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Siga nas redes sociais</h3>
                      <div className="flex items-center space-x-4">
                        <Link href="#contact" className="text-[#3b5998] hover:text-[#26d0ce]" prefetch={false}>
                          <FacebookIcon className="h-6 w-6" />
                        </Link>
                        <Link href="#contact" className="text-[#00acee] hover:text-[#26d0ce]" prefetch={false}>
                          <TwitterIcon className="h-6 w-6" />
                        </Link>
                        <Link href="#contact" className="text-[#0e76a8] hover:text-[#26d0ce]" prefetch={false}>
                          <LinkedinIcon className="h-6 w-6" />
                        </Link>
                        <Link href="#contact" className="text-[#3f729b] hover:text-[#26d0ce]" prefetch={false}>
                          <InstagramIcon className="h-6 w-6" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-[#f30101] py-8 px-4 md:px-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <p className="text-white mb-4 md:mb-0">&copy; 2024 MyPub. Todos os direitos reservados.</p>
            <nav className="flex space-x-6">
              <Link href="#" className="text-white hover:text-gray-300" prefetch={false}>
                Política de Privacidade
              </Link>
              <Link href="#" className="text-white hover:text-gray-300" prefetch={false}>
                Termos de Serviço
              </Link>
              <Link href="#contact" className="text-white hover:text-gray-300" prefetch={false}>
                Contato
              </Link>
            </nav>
          </div>
        </footer>
      </div>
  );
}

function CheckIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
  );
}

function FacebookIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
  );
}

function LinkedinIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
  );
}

function LocateIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <line x1="2" x2="5" y1="12" y2="12" />
        <line x1="19" x2="22" y1="12" y2="12" />
        <line x1="12" x2="12" y1="2" y2="5" />
        <line x1="12" x2="12" y1="19" y2="22" />
        <circle cx="12" cy="12" r="7" />
      </svg>
  );
}

function MailIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
  );
}

function MenuIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
  );
}

function PhoneIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
  );
}

function TwitterIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
  );
}

function MonitorIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
  );
}

function TicketIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M13 5v2" />
        <path d="M13 17v2" />
        <path d="M13 11v2" />
      </svg>
  );
}

function XIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
  );
}
