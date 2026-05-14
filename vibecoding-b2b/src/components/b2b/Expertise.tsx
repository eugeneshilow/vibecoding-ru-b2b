import { Card } from "@/components/ui/card";

type Item = {
  number: string;
  title: string;
  body: string;
  todo?: boolean;
};

const items: Item[] = [
  {
    number: "01",
    title: "Интеллектуальная автоматизация и снижение ФОТ",
    body: "Убираем человеческий фактор из операционки. Разрабатываем Agentic AI (автономные ИИ-агенты) и RAG-системы, которые напрямую интегрируются в ваши CRM (Битрикс24, amoCRM), базы знаний и защищенные корпоративные мессенджеры (VK Teams, eXpress). ИИ берет на себя маршрутизацию лидов, анализ документов и закрывает 80% рутины бэкофиса и первой линии поддержки.",
  },
  {
    number: "02",
    title: "Кастомные LLM-продукты и копилоты",
    body: "Внутренние ассистенты на ваших доменных данных, генерация документов и кода, аналитика естественного языка. От прототипа за неделю до production-ready сервиса с собственной моделью.",
    todo: true,
  },
  {
    number: "03",
    title: "Интеграция ИИ в Legacy-инфраструктуру",
    body: "Вам не нужно сносить вашу старую архитектуру. Если бизнес завязан на неповоротливых конфигурациях 1С, старых базах данных и тяжелых ERP, мы прикручиваем современные AI-модули через API. Ваш устаревший софт получает способность понимать естественный язык, извлекать данные и принимать решения.",
  },
  {
    number: "04",
    title: "Суверенный AI on-premise",
    body: "Разворачиваем нейросети российских гигантов (YandexGPT, GigaChat API) физически на ваших собственных серверах. Никакой отправки коммерческой тайны во внешние API. Полный суверенитет данных и строгое соответствие 152-ФЗ.",
  },
];

export function Expertise() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-32 md:py-40">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Блок 03 — Что внедряем
        </p>
        <h2 className="mb-16 max-w-2xl text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Экспертиза. Бьём прямо в P&amp;L.
        </h2>
        <div className="grid gap-0 border border-border md:grid-cols-2">
          {items.map((item, i) => (
            <Card
              key={item.number}
              className={[
                "rounded-none border-0 bg-transparent p-10 md:p-12",
                i % 2 === 0 ? "md:border-r" : "",
                i < 2 ? "border-b" : "",
                "border-border",
              ].join(" ")}
            >
              <div className="mb-8 flex items-baseline justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.number}
                </span>
                {item.todo && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                    TODO: текст
                  </span>
                )}
              </div>
              <h3 className="mb-5 text-xl font-medium leading-snug tracking-tight md:text-2xl">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-foreground/75">
                {item.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
