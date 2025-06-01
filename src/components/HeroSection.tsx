
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const benefits = [
    'Повне ведення обліку',
    'Податкове консультування',
    'Зарплатні проекти',
    'Юридичний супровід'
  ];

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Професійні бухгалтерські послуги для вашого бізнесу
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Довірте облік професіоналам і зосередьтеся на розвитку свого бізнесу. 
              Ми забезпечимо повну відповідність законодавству та оптимізацію податків.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary-600 hover:bg-primary-700 text-lg px-8"
              >
                Замовити консультацію
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-primary-600 text-primary-600 hover:bg-primary-50"
              >
                Дізнатися більше
              </Button>
            </div>
          </div>

          <div className="lg:justify-self-end animate-scale-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Отримайте безкоштовну консультацію
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше ім'я"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
                <Button className="w-full bg-primary-600 hover:bg-primary-700 py-3 text-lg">
                  Замовити дзвінок
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Передзвонимо протягом 15 хвилин
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
