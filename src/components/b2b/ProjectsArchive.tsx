import { Card } from "@/components/ui/card";

type Project = {
  number: string;
  title: string;
  task: string;
  result: string;
  status: string;
  todo?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    title: "On-premise LLM для финтеха",
    task: "Развернуть локальную нейросеть (DeepSeek) внутри защищенного контура без доступа к интернету.",
    result: "Автоматизация внутреннего анализа данных.",
    status: "Пишем детальный технический разбор",
  },
  {
    number: "02",
    title: "Multi-agent система для оператора связи",
    task: "Заменить первую линию поддержки автономным мульти-агентом, маршрутизирующим обращения по 40+ сценариям.",
    result: "Сократили нагрузку на Senior-разработчиков.",
    status: "Утверждаем публикацию с клиентом",
    todo: true,
  },
  {
    number: "03",
    title: "RAG для корпоративной базы знаний",
    task: "Поиск и ответы по 200 000+ документов внутри защищённого контура.",
    result: "Onboarding новых сотрудников ускорился в разы.",
    status: "В работе",
    todo: true,
  },
];

export function ProjectsArchive() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-32 md:py-40">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Блок 04 — Архив проектов
        </p>
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-8 text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Практика.
          </h2>
          <p className="text-lg leading-relaxed text-foreground/75 md:text-xl">
            Большинство наших проектов закрыты жесткими NDA. Здесь мы публикуем
            технические разборы архитектуры тех решений, которые нам разрешили
            показать.
          </p>
        </div>
        <div className="grid gap-0 border border-border md:grid-cols-3">
          {projects.map((p, i) => (
            <Card
              key={p.number}
              className={[
                "rounded-none border-0 bg-transparent p-10",
                i < projects.length - 1 ? "border-b md:border-b-0 md:border-r" : "",
                "border-border",
              ].join(" ")}
            >
              <div className="mb-8 flex items-baseline justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {p.number}
                </span>
                {p.todo && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                    TODO: текст
                  </span>
                )}
              </div>
              <h3 className="mb-6 text-xl font-medium leading-snug tracking-tight md:text-2xl">
                {p.title}
              </h3>
              <dl className="space-y-4 text-sm leading-relaxed text-foreground/75">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70">
                    Задача
                  </dt>
                  <dd className="mt-1">{p.task}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70">
                    Результат
                  </dt>
                  <dd className="mt-1">{p.result}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70">
                    Статус
                  </dt>
                  <dd className="mt-1 text-foreground/60">[{p.status}]</dd>
                </div>
              </dl>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
