import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-32 text-center md:py-48">
        <p className="mb-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          vibecoding.ru / b2b
        </p>
        <h1 className="text-balance text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Разработка AI-систем и IT-решений. Делаем продукты в 3 раза быстрее классических студий и инхаус-команд.
        </h1>
        <div className="mt-16">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-md px-10 text-base font-medium"
          >
            <a href="#contact">Оставить заявку</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
