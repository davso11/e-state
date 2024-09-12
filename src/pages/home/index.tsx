import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Commitment } from "./components/commitment";

export function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Commitment />
    </>
  );
}
