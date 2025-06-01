
import { Award, Users, Clock, Target } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Задоволених клієнтів' },
    { icon: Clock, number: '10+', label: 'Років досвіду' },
    { icon: Award, number: '98%', label: 'Позитивних відгуків' },
    { icon: Target, number: '100%', label: 'Вчасно здана звітність' }
  ];

  const advantages = [
    {
      title: 'Професіоналізм',
      description: 'Наша команда складається з сертифікованих бухгалтерів з багаторічним досвідом'
    },
    {
      title: 'Надійність',
      description: 'Гарантуємо конфіденційність та збереження ваших даних'
    },
    {
      title: 'Оперативність',
      description: 'Швидке реагування на запити та своєчасне виконання всіх зобов\'язань'
    },
    {
      title: 'Індивідуальний підхід',
      description: 'Розробляємо персональні рішення для кожного клієнта'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Про нашу компанію
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <strong>БухгалтерПрофі</strong> — це команда досвідчених фахівців, які надають професійні 
              бухгалтерські послуги підприємствам різних сфер діяльності вже понад 10 років.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ми спеціалізуємося на повному веденні бухгалтерського обліку, податковому 
              консультуванні та юридичному супроводі бізнесу. Наша мета — звільнити вас 
              від рутинних облікових процедур, щоб ви могли зосередитися на розвитку свого бізнесу.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="group">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Наші досягнення
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:shadow-md transition-shadow duration-200">
                      <stat.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-500">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Чому обирають нас?
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2 font-bold">•</span>
                  Сертифіковані фахівці з профільною освітою
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2 font-bold">•</span>
                  Постійне підвищення кваліфікації
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2 font-bold">•</span>
                  Сучасне програмне забезпечення
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2 font-bold">•</span>
                  Прозорі умови співпраці
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
