import { Approach } from "@/components/b2b/Approach";
import { Expertise } from "@/components/b2b/Expertise";
import { Hero } from "@/components/b2b/Hero";
import { ProjectsArchive } from "@/components/b2b/ProjectsArchive";
import { Routing } from "@/components/b2b/Routing";

export const metadata = {
  title: "Vibecoding · B2B — Разработка AI-систем",
  description:
    "Разработка AI-систем и IT-решений. Делаем продукты в 3 раза быстрее классических студий и инхаус-команд.",
};

export default function B2BPage() {
  return (
    <main className="flex-1">
      <Hero />
      <Approach />
      <Expertise />
      <ProjectsArchive />
      <Routing />
      <footer className="px-6 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} vibecoding.ru · b2b
      </footer>
    </main>
  );
}
