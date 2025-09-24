import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [code, setCode] = useState(`import { hudra } from 'hudra';

const app = hudra({
  name: 'MyApp',
  version: '1.0.0'
});

app.get('/hello', (ctx) => {
  return { message: 'Hello, World!' };
});

app.listen(3000);`);
  const [output, setOutput] = useState('');

  const runCode = () => {
    setOutput(`✅ Код выполнен успешно!

Результат:
{
  "message": "Hello, World!",
  "status": "success",
  "timestamp": "${new Date().toISOString()}"
}`);
  };

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'examples', label: 'Примеры', icon: 'Code2' },
    { id: 'github', label: 'GitHub', icon: 'Github' },
    { id: 'api', label: 'API', icon: 'BookOpen' },
    { id: 'install', label: 'Установка', icon: 'Download' },
    { id: 'docs', label: 'Документация', icon: 'FileText' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-primary">HUDRA</div>
              <div className="hidden md:flex space-x-6">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    <Icon name={item.icon} size={16} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <Button className="hidden md:flex">
              <Icon name="Star" size={16} className="mr-2" />
              Star on GitHub
            </Button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'home' && (
          <div className="space-y-16 animate-fade-in">
            {/* Hero Section */}
            <section className="text-center py-16 animate-fade-in-up">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-bounce-in">
                  HUDRA
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Современный фреймворк для быстрой разработки веб-приложений с минимальным кодом.
                  Простой синтаксис, максимальная производительность.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.3s'}}>
                  <Button size="lg" className="text-lg px-8 py-3">
                    <Icon name="Rocket" size={20} className="mr-2" />
                    Начать разработку
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                    <Icon name="BookOpen" size={20} className="mr-2" />
                    Документация
                  </Button>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Zap" size={24} className="mr-3 text-primary" />
                    Быстрая разработка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Создавайте API за минуты, а не часы. Минимум кода, максимум функциональности.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-right" style={{animationDelay: '0.2s'}}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Shield" size={24} className="mr-3 text-primary" />
                    Типобезопасность
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Полная поддержка TypeScript из коробки. Ловите ошибки на этапе разработки.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-right" style={{animationDelay: '0.3s'}}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Layers" size={24} className="mr-3 text-primary" />
                    Модульность
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Подключайте только нужные модули. Никакого лишнего кода в продакшене.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Interactive Playground */}
            <section className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <Card className="w-full animate-scale-in hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Icon name="Play" size={28} className="mr-3 text-primary" />
                    Интерактивная песочница
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Попробуйте HUDRA прямо в браузере! Напишите код и увидите результат мгновенно.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">Ваш код</h3>
                        <Button onClick={runCode} size="sm" className="hover:scale-105 transition-transform">
                          <Icon name="Play" size={16} className="mr-2" />
                          Запустить
                        </Button>
                      </div>
                      <Textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="min-h-[300px] font-mono text-sm resize-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Введите ваш код здесь..."
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Результат</h3>
                      <div className="bg-muted p-4 rounded-lg min-h-[300px] font-mono text-sm whitespace-pre-wrap">
                        {output || 'Нажмите "Запустить" чтобы увидеть результат...'}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'examples' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Примеры использования</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Изучите реальные примеры применения HUDRA в различных сценариях
              </p>
            </div>

            <Tabs defaultValue="api" className="w-full">
              <TabsList className="grid w-full grid-cols-4 animate-fade-in">
                <TabsTrigger value="api">REST API</TabsTrigger>
                <TabsTrigger value="websocket">WebSocket</TabsTrigger>
                <TabsTrigger value="database">База данных</TabsTrigger>
                <TabsTrigger value="auth">Авторизация</TabsTrigger>
              </TabsList>

              <TabsContent value="api" className="space-y-4">
                <Card className="animate-scale-in hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Простой REST API</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Начинающий</Badge>
                      <Badge variant="outline">5 минут</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm hover:bg-muted/80 transition-colors">
{`import { hudra } from 'hudra';

const app = hudra();

// GET эндпоинт
app.get('/users', (ctx) => {
  return { users: ['Alice', 'Bob', 'Charlie'] };
});

// POST эндпоинт с валидацией
app.post('/users', (ctx) => {
  const { name, email } = ctx.body;
  
  if (!name || !email) {
    return ctx.error(400, 'Имя и email обязательны');
  }
  
  return { id: Date.now(), name, email };
});

app.listen(3000);`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="websocket" className="space-y-4">
                <Card className="animate-scale-in hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Чат на WebSocket</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Средний</Badge>
                      <Badge variant="outline">15 минут</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm hover:bg-muted/80 transition-colors">
{`import { hudra, ws } from 'hudra';

const app = hudra();

// WebSocket подключение
app.ws('/chat', ws({
  onConnect: (socket) => {
    console.log('Пользователь подключился');
    socket.broadcast('user_joined');
  },
  
  onMessage: (socket, message) => {
    // Переслать сообщение всем клиентам
    socket.broadcast('message', {
      text: message.text,
      timestamp: Date.now()
    });
  },
  
  onDisconnect: (socket) => {
    socket.broadcast('user_left');
  }
}));

app.listen(3000);`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="database" className="space-y-4">
                <Card className="animate-scale-in hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Работа с базой данных</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Средний</Badge>
                      <Badge variant="outline">10 минут</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm hover:bg-muted/80 transition-colors">
{`import { hudra, db } from 'hudra';

const app = hudra();

// Подключение к базе данных
const database = db.connect('postgresql://...');

// Модель пользователя
const User = database.model('User', {
  name: String,
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

// CRUD операции
app.get('/users', async (ctx) => {
  const users = await User.find();
  return { users };
});

app.post('/users', async (ctx) => {
  const user = await User.create(ctx.body);
  return { user };
});

app.listen(3000);`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="auth" className="space-y-4">
                <Card className="animate-scale-in hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle>JWT Авторизация</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Продвинутый</Badge>
                      <Badge variant="outline">20 минут</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm hover:bg-muted/80 transition-colors">
{`import { hudra, auth, jwt } from 'hudra';

const app = hudra();

// Настройка JWT
const jwtAuth = jwt({ secret: 'your-secret-key' });

// Логин
app.post('/login', async (ctx) => {
  const { email, password } = ctx.body;
  
  const user = await User.findOne({ email });
  if (!user || !await user.comparePassword(password)) {
    return ctx.error(401, 'Неверные данные');
  }
  
  const token = jwtAuth.sign({ userId: user.id });
  return { token, user };
});

// Защищенный маршрут
app.get('/profile', auth(jwtAuth), (ctx) => {
  return { user: ctx.user };
});

app.listen(3000);`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'install' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Установка</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Начните работу с HUDRA за несколько простых шагов
              </p>
            </div>

            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Card className="animate-scale-in hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Package" size={24} className="mr-3" />
                    Шаг 1: Установка пакета
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Tabs defaultValue="npm">
                      <TabsList>
                        <TabsTrigger value="npm">npm</TabsTrigger>
                        <TabsTrigger value="yarn">yarn</TabsTrigger>
                        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                      </TabsList>
                      <TabsContent value="npm">
                        <pre className="bg-muted p-4 rounded-lg font-mono">npm install hudra</pre>
                      </TabsContent>
                      <TabsContent value="yarn">
                        <pre className="bg-muted p-4 rounded-lg font-mono">yarn add hudra</pre>
                      </TabsContent>
                      <TabsContent value="pnpm">
                        <pre className="bg-muted p-4 rounded-lg font-mono">pnpm add hudra</pre>
                      </TabsContent>
                    </Tabs>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-scale-in hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="FileText" size={24} className="mr-3" />
                    Шаг 2: Создание приложения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg font-mono">
{`// app.js
import { hudra } from 'hudra';

const app = hudra();

app.get('/', (ctx) => {
  return { message: 'Добро пожаловать в HUDRA!' };
});

app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});`}
                  </pre>
                </CardContent>
              </Card>

              <Card className="animate-scale-in hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Play" size={24} className="mr-3" />
                    Шаг 3: Запуск
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg font-mono">node app.js</pre>
                  <p className="mt-4 text-muted-foreground">
                    Откройте браузер и перейдите по адресу <code className="bg-muted px-2 py-1 rounded">http://localhost:3000</code>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {(activeSection === 'github' || activeSection === 'api' || activeSection === 'docs') && (
          <div className="text-center py-16">
            <Icon name="Construction" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-4">В разработке</h2>
            <p className="text-muted-foreground">
              Раздел "{navigation.find(n => n.id === activeSection)?.label}" находится в процессе разработки
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 HUDRA. Современный фреймворк для веб-разработки.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;