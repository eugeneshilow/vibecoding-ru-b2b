import { ContactForm } from "./ContactForm";

type Tier = {
  range: string;
  segment: string;
  body: string;
  todo?: boolean;
};

const tiers: Tier[] = [
  {
    range: "До 1 000 000 ₽",
    segment: "Стартапы и МСБ",
    body: "Задача отправляется в общее закрытое комьюнити независимых разработчиков. Если проект интересен — исполнитель связывается с вами напрямую.",
  },
  {
    range: "От 1 000 000 до 5 000 000 ₽",
    segment: "Средний бизнес",
    body: "Проект передается только проверенным Senior-разработчикам и проектным командам с подтверждённой экспертизой в AI-инфраструктуре.",
  },
  {
    range: "От 5 000 000 ₽",
    segment: "Корпорации и tier-1",
    body: "Архитектуру и сопровождение проекта лично ведёт Евгений Шилов вместе с tier-1 архитекторами и проверенными подрядчиками.",
    todo: true,
  },
];

export function Routing() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-2xl px-6 py-32 md:py-40">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Блок 05 — Маршрутизация
        </p>
        <h2 className="mb-12 text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Распределение проектов.
        </h2>
        <p className="mb-16 text-lg leading-relaxed text-foreground/75 md:text-xl">
          Мы берем в работу задачи разного масштаба. Чтобы система работала без
          сбоев, проекты маршрутизируются в зависимости от бюджета:
        </p>

        <ol className="space-y-12 border-t border-border">
          {tiers.map((tier, i) => (
            <li
              key={tier.range}
              className="grid gap-4 border-b border-border pb-12 md:grid-cols-[auto_1fr] md:gap-10"
            >
              <span className="font-mono text-xs text-muted-foreground md:pt-1">
                0{i + 1}
              </span>
              <div>
                <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    {tier.range}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    ({tier.segment})
                  </span>
                  {tier.todo && (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                      TODO: текст
                    </span>
                  )}
                </div>
                <p className="text-base leading-relaxed text-foreground/75">
                  {tier.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-16 text-base leading-relaxed text-muted-foreground">
          Если задача нам не подходит, мы не тратим ваше время и просто не
          отвечаем.
        </p>

        <div id="contact" className="mt-24 scroll-mt-24">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
