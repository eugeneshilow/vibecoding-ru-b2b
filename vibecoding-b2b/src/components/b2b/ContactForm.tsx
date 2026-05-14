"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Submitted = {
  name: string;
  contact: string;
  budget: string;
  task: string;
};

export function ContactForm() {
  const [budget, setBudget] = useState<string>("");
  const [submitted, setSubmitted] = useState<Submitted | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload: Submitted = {
      name: String(data.get("name") ?? ""),
      contact: String(data.get("contact") ?? ""),
      budget,
      task: String(data.get("task") ?? ""),
    };
    console.log("[b2b form submitted]", payload);
    setSubmitted(payload);
  }

  if (submitted) {
    return (
      <div className="border border-border p-10 md:p-14">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Заявка принята
        </p>
        <h3 className="mb-4 text-2xl font-medium tracking-tight md:text-3xl">
          Спасибо. Мы свяжемся в течение 48 часов.
        </h3>
        <p className="text-base leading-relaxed text-foreground/70">
          Если задача нам не подходит — мы не ответим, чтобы не тратить ваше
          время.
        </p>
        <details className="mt-8 text-xs text-muted-foreground">
          <summary className="cursor-pointer font-mono uppercase tracking-widest">
            payload (dev)
          </summary>
          <pre className="mt-3 overflow-x-auto bg-foreground/5 p-4 font-mono text-[11px] leading-relaxed">
{JSON.stringify(submitted, null, 2)}
          </pre>
        </details>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border p-8 md:p-12">
      <h3 className="mb-2 text-2xl font-medium tracking-tight md:text-3xl">
        Оставьте заявку.
      </h3>
      <p className="mb-10 text-sm leading-relaxed text-muted-foreground">
        Опишите задачу и бюджет. Мы маршрутизируем её под нужный уровень
        компетенций.
      </p>

      <div className="space-y-8">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
            Имя / Должность
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Иван Иванов, CTO"
            className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 text-base shadow-none focus-visible:border-foreground focus-visible:ring-0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact" className="text-xs uppercase tracking-widest text-muted-foreground">
            Контакт в Telegram или Email
          </Label>
          <Input
            id="contact"
            name="contact"
            required
            placeholder="@username или email@company.ru"
            className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 text-base shadow-none focus-visible:border-foreground focus-visible:ring-0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget" className="text-xs uppercase tracking-widest text-muted-foreground">
            Бюджет
          </Label>
          <Select value={budget} onValueChange={setBudget} required name="budget">
            <SelectTrigger
              id="budget"
              className="h-12 w-full rounded-none border-0 border-b border-border bg-transparent px-0 text-base shadow-none focus-visible:border-foreground focus-visible:ring-0 data-[size=default]:h-12"
            >
              <SelectValue placeholder="Выберите диапазон" />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              <SelectItem value="до 1 млн ₽">До 1 млн ₽</SelectItem>
              <SelectItem value="1–5 млн ₽">1–5 млн ₽</SelectItem>
              <SelectItem value="5+ млн ₽">5+ млн ₽</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="task" className="text-xs uppercase tracking-widest text-muted-foreground">
            Суть задачи
          </Label>
          <Textarea
            id="task"
            name="task"
            required
            rows={5}
            placeholder="Что нужно сделать и какая бизнес-боль?"
            className="rounded-none border-0 border-b border-border bg-transparent px-0 text-base shadow-none focus-visible:border-foreground focus-visible:ring-0"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="h-14 w-full rounded-md text-base font-medium md:w-auto md:px-12"
        >
          Отправить заявку
        </Button>
      </div>
    </form>
  );
}
