
import { Calculator, FileText, Users, Shield, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Ведення бухобліку',
      description: 'Повне ведення бухгалтерського обліку підприємств на різних системах оподаткування',
      features: ['Первинні документи', 'Облік ТМЦ', 'Розрахунки з контрагентами', 'Звітність'],
      link: '/accounting'
    },
    {
      icon: FileText,
      title: 'Податкове консультування',
      description: 'Професійні консультації з питань оподаткування та оптимізації податкового навантаження',
      features: ['Податкове планування', 'Оптимізація платежів', 'Аудит нарахувань', 'Супровід перевірок']
    },
    {
      icon: Users,
      title: 'Кадровий облік',
      description: 'Ведення кадрового обліку, розрахунок заробітної плати та соціальних внесків',
      features: ['Кадрові документи', 'Розрахунок зарплати', 'Соціальні внески', 'Звітність в ПФУ']
    },
    {
      icon: Shield,
      title: 'Юридичний супровід',
      description: 'Правова підтримка бізнесу, реєстрація змін, договірна робота',
      features: ['Договори', 'Реєстрація змін', 'Правові консультації', 'Супровід угод']
    },
    {
      icon: TrendingUp,
      title: 'Фінансовий аналіз',
      description: 'Аналіз фінансового стану підприємства та рекомендації щодо покращення',
      features: ['Фінансовий аналіз', 'Планування бюджету', 'Аналіз рентабельності', 'Прогнозування']
    },
    {
      icon: Clock,
      title: 'Аутсорсинг',
      description: 'Повна передача бухгалтерських функцій на аутсорсинг з гарантією якості',
      features: ['Повний аутсорсинг', 'Автоматизація', 'Цілодобова підтримка', 'Економія коштів']
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наші послуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ми надаємо повний спектр бухгалтерських та консультаційних послуг 
            для підприємств різних форм власності та розмірів
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.link && (
                  <div className="text-center">
                    <Link 
                      to={service.link}
                      className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      Детальніше
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Потрібна індивідуальна консультація щодо ваших потреб?
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Зв'язатися з нами
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
