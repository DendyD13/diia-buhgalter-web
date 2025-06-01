
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactsSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      info: '+380 (44) 123-45-67',
      additional: '+380 (67) 890-12-34'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@buhgalterprofi.ua',
      additional: 'consultation@buhgalterprofi.ua'
    },
    {
      icon: MapPin,
      title: 'Адреса',
      info: 'м. Київ, вул. Хрещатик, 25',
      additional: 'офіс 301, 3-й поверх'
    },
    {
      icon: Clock,
      title: 'Режим роботи',
      info: 'Пн-Пт: 9:00 - 18:00',
      additional: 'Сб: 10:00 - 15:00'
    }
  ];

  return (
    <section id="contacts" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Контакти
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Зв'яжіться з нами зручним для вас способом. Ми завжди готові відповісти 
            на ваші запитання та надати професійну консультацію.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                        <contact.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-lg text-gray-900">
                        {contact.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="font-semibold text-gray-900 mb-1">
                      {contact.info}
                    </p>
                    <p className="text-sm text-gray-600">
                      {contact.additional}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-primary-600 text-white">
              <CardHeader>
                <CardTitle className="text-white">
                  Екстрена підтримка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Цілодобова підтримка для наших клієнтів у критичних ситуаціях
                </p>
                <p className="font-semibold">
                  +380 (50) 24-7-365
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Надішліть нам повідомлення
                </CardTitle>
                <p className="text-gray-600">
                  Заповніть форму нижче, і ми зв'яжемося з вами найближчим часом
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ім'я *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                        placeholder="Введіть ваше ім'я"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                        placeholder="+380 (__) ___-__-__"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Тема звернення
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200">
                      <option>Оберіть тему...</option>
                      <option>Ведення бухобліку</option>
                      <option>Податкове консультування</option>
                      <option>Кадровий облік</option>
                      <option>Юридичний супровід</option>
                      <option>Інше</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Повідомлення *
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                      placeholder="Опишіть ваш запит детальніше..."
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Я погоджуюся з <a href="#" className="text-primary-600 hover:text-primary-700">політикою конфіденційності</a> та обробкою персональних даних
                    </label>
                  </div>

                  <Button className="w-full bg-primary-600 hover:bg-primary-700 py-3 text-lg">
                    Надіслати повідомлення
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
