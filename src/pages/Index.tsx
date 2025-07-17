import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    { title: 'Упаковка проекта', description: 'Полный цикл создания музыкального проекта', icon: 'Package' },
    { title: 'Работа с педагогами', description: 'Профессиональное обучение и развитие', icon: 'GraduationCap' },
    { title: 'Создание песен под ключ', description: 'От идеи до готового трека', icon: 'Music' },
    { title: 'Съемка видео любой сложности', description: 'Клипы, реклама, контент', icon: 'Video' },
    { title: 'Создание сайтов', description: 'Современные веб-решения', icon: 'Globe' },
    { title: 'Продвижение музыки', description: 'Стратегии популяризации', icon: 'TrendingUp' },
    { title: 'SMM и маркетинг', description: 'Социальные сети и digital', icon: 'Megaphone' },
    { title: 'PR-сопровождение', description: 'Работа с медиа и прессой', icon: 'Newspaper' },
    { title: 'Цифровая дистрибуция', description: 'Размещение на платформах', icon: 'Share2' },
    { title: 'Выпуск винила', description: 'Физические носители', icon: 'Disc' },
    { title: 'Рассылка на радио', description: 'Радиопродвижение', icon: 'Radio' },
    { title: 'Правовое сопровождение', description: 'Юридическая поддержка', icon: 'Scale' },
    { title: 'Букинг-агентство', description: 'Организация выступлений', icon: 'Calendar' },
    { title: 'Онлайн-консультации', description: 'Индивидуальные консультации', icon: 'MessageCircle' }
  ];

  const teamMembers = [
    { name: 'Алексей Смирнов', role: 'Главный продюсер', specialty: 'Электронная музыка' },
    { name: 'Мария Петрова', role: 'Звукорежиссер', specialty: 'Сведение и мастеринг' },
    { name: 'Дмитрий Козлов', role: 'Режиссер', specialty: 'Видеопродукция' },
    { name: 'Анна Волкова', role: 'PR-менеджер', specialty: 'Медиа и пресса' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      {/* Header */}
      <header className="bg-card/20 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">
              🎵 PRODUCER CENTER
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('team')} className="text-white hover:text-primary transition-colors">Команда</button>
              <button onClick={() => scrollToSection('cases')} className="text-white hover:text-primary transition-colors">Кейсы</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button className="gradient-bg text-white hover:opacity-90 font-semibold animate-pulse-glow">
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
             style={{backgroundImage: 'url("/img/1b61ff5b-6f1e-4807-a83e-3eb54995fe06.jpg")'}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/50 to-transparent"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="bg-card/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20 animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Создаем музыку
              <span className="block gradient-text">
                будущего
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Полный цикл музыкального производства от идеи до мирового успеха
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 text-lg px-8 py-3 font-semibold animate-pulse-glow">
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-white hover:bg-primary hover:text-white text-lg px-8 py-3">
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-card/10 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/20 border-white/20 hover:bg-card/30 transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 gradient-border rounded-lg">
                      <Icon name={service.icon} size={24} className="text-primary relative z-10" />
                    </div>
                    <CardTitle className="text-white group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-white/80">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-card/20 border-white/20 text-center hover:bg-card/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-20 h-20 gradient-bg rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-white group-hover:text-primary transition-colors">{member.name}</CardTitle>
                  <CardDescription className="text-white/80">{member.role}</CardDescription>
                  <Badge className="bg-primary text-white mt-2">{member.specialty}</Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 bg-card/10 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Успешные кейсы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/20 border-white/20 hover:bg-card/30 transition-all duration-300 group">
              <CardHeader>
                <div className="h-40 gradient-bg rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Play" size={48} className="text-white" />
                </div>
                <CardTitle className="text-white group-hover:text-primary transition-colors">Артист "Звезда"</CardTitle>
                <CardDescription className="text-white/80">
                  Полная упаковка проекта: от записи альбома до видеоклипов и PR-кампании
                </CardDescription>
                <Badge className="bg-secondary text-white mt-2">1M+ просмотров</Badge>
              </CardHeader>
            </Card>
            
            <Card className="bg-card/20 border-white/20 hover:bg-card/30 transition-all duration-300 group">
              <CardHeader>
                <div className="h-40 gradient-bg rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Headphones" size={48} className="text-white" />
                </div>
                <CardTitle className="text-white group-hover:text-primary transition-colors">Группа "Ритм"</CardTitle>
                <CardDescription className="text-white/80">
                  Создание песен под ключ, продвижение в социальных сетях и букинг туров
                </CardDescription>
                <Badge className="bg-accent text-white mt-2">100+ концертов</Badge>
              </CardHeader>
            </Card>
            
            <Card className="bg-card/20 border-white/20 hover:bg-card/30 transition-all duration-300 group">
              <CardHeader>
                <div className="h-40 gradient-bg rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Award" size={48} className="text-white" />
                </div>
                <CardTitle className="text-white group-hover:text-primary transition-colors">Проект "Новая волна"</CardTitle>
                <CardDescription className="text-white/80">
                  Цифровая дистрибуция, выпуск винила и радиопродвижение молодых исполнителей
                </CardDescription>
                <Badge className="bg-primary text-white mt-2">Топ-10 чартов</Badge>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-text">
            Связаться с нами
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card/20 border-white/20 hover:bg-card/30 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <Icon name="Phone" size={32} className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-white">Телефон</CardTitle>
                  <CardDescription className="text-white/80">+7 (495) 123-45-67</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-card/20 border-white/20 hover:bg-card/30 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <Icon name="Mail" size={32} className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-white">Email</CardTitle>
                  <CardDescription className="text-white/80">info@producercenter.ru</CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <Button size="lg" className="gradient-bg text-white hover:opacity-90 text-lg px-12 py-4 animate-pulse-glow">
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/30 py-12 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">Producer Center</h3>
              <p className="text-white/80">Создаем музыку будущего</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-primary transition-colors cursor-pointer">Упаковка проекта</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Создание песен</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Видеопродукция</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Продвижение</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@producercenter.ru</li>
                <li>Москва, ул. Музыкальная, 1</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-white/80 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Youtube" size={24} className="text-white/80 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Music" size={24} className="text-white/80 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
            <p>&copy; 2024 Producer Center. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;