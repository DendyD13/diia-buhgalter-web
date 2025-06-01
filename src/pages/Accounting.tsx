
import { ArrowLeft, Clock, Users, TrendingUp, Shield, Brain, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Accounting = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Економія часу',
      description: 'Автоматизація рутинних завдань дозволяє зосередитися на стратегічних завданнях'
    },
    {
      icon: CheckCircle,
      title: 'Висока точність',
      description: 'AI мінімізує людські помилки у розрахунках і звітності'
    },
    {
      icon: TrendingUp,
      title: 'Дані в реальному часі',
      description: 'Миттєвий доступ до актуальної фінансової інформації'
    },
    {
      icon: Users,
      title: 'Масштабованість',
      description: 'Легко адаптується до потреб компаній різного розміру'
    }
  ];

  const applications = [
    'Автоматизація введення даних через OCR',
    'Аналіз транзакцій та виявлення аномалій',
    'Прогнозування та бюджетування',
    'Оптимізація податкового обліку',
    'Автоматизована звітність'
  ];

  const challenges = [
    'Висока початкова вартість впровадження',
    'Необхідність навчання персоналу',
    'Забезпечення конфіденційності даних',
    'Підтримка балансу між автоматизацією та контролем'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/" className="flex items-center gap-2 text-primary-100 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Повернутися на головну</span>
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-2">Ведення бухгалтерського обліку</h1>
          <p className="text-xl text-primary-100">Сучасні технології та штучний інтелект у бухгалтерії</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Особливості ведення бухгалтерського обліку з використанням штучного інтелекту
            </h2>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <Brain className="w-5 h-5" />
              <span>Технології майбутнього вже сьогодні</span>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Вступ</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Сучасний бізнес вимагає швидкості, точності та ефективності у всіх аспектах діяльності, 
              зокрема в бухгалтерському обліку. З появою штучного інтелекту (AI) компанії отримали 
              можливість оптимізувати процеси, зменшити кількість помилок і підвищити продуктивність. 
              У цій статті ми розглянемо, як AI трансформує ведення бухгалтерського обліку, його 
              ключові переваги, виклики та перспективи для бухгалтерських компаній.
            </p>
          </section>

          {/* AI Applications */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Як штучний інтелект застосовується в бухгалтерському обліку
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Штучний інтелект у бухгалтерії використовується для автоматизації рутинних завдань, 
              аналізу даних і прийняття обґрунтованих рішень. Основні напрями застосування AI включають:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-4">
                {applications.map((application, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Переваги використання AI у бухгалтерському обліку
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Додаткові переваги:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-700">Доступність даних у реальному часі</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-700">Зниження витрат на ручну працю</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-700">Покращення якості фінансової звітності</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Challenges */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Виклики впровадження AI
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Незважаючи на численні переваги, впровадження AI у бухгалтерський облік пов'язане 
              з певними викликами:
            </p>
            <div className="bg-red-50 rounded-lg p-6">
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Future Prospects */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Перспективи розвитку AI в бухгалтерії
            </h3>
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                У майбутньому вплив штучного інтелекту на бухгалтерський облік лише зростатиме. 
                Очікується, що AI-системи стануть ще більш інтелектуальними, здатними до глибшого 
                аналізу фінансових даних, прогнозування ринкових тенденцій та надання стратегічних 
                рекомендацій для бізнесу. Компанії, які впроваджують ці технології вже сьогодні, 
                отримають конкурентну перевагу у майбутньому.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary-600 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Готові модернізувати свій бухгалтерський облік?
            </h3>
            <p className="text-primary-100 mb-6">
              Наша команда допоможе впровадити сучасні технології у ваш бізнес
            </p>
            <Button className="bg-white text-primary-600 hover:bg-gray-100">
              Зв'язатися з нами
            </Button>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Accounting;
