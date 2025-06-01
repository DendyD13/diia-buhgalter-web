
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const services = [
    'Ведення бухобліку',
    'Податкове консультування',
    'Кадровий облік',
    'Юридичний супровід',
    'Фінансовий аналіз',
    'Аутсорсинг'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-primary-400 mb-6">
              БухгалтерПрофі
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Професійні бухгалтерські послуги для вашого бізнесу. 
              Ми забезпечуємо якісний облік та надійний супровід.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Послуги</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Навігація</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Головна
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Про нас
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Послуги
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Контакти
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Політика конфіденційності
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакти</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">+380 (44) 123-45-67</p>
                  <p className="text-gray-400 text-sm">+380 (67) 890-12-34</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">info@buhgalterprofi.ua</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">м. Київ, вул. Хрещатик, 25</p>
                  <p className="text-gray-400 text-sm">офіс 301, 3-й поверх</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 БухгалтерПрофі. Всі права захищені.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Ліцензія на ведення бухгалтерської діяльності №12345
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
