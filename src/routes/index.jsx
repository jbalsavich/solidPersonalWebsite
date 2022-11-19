import { Title } from "solid-start";
import Counter from "~/components/Counter";
export default function Home() {
  return (
    <main>
      <Title>Hello!</Title>
      <h1>Hello There!</h1>
      <Counter />
      <p>
        This is the new website. Visit{" "}
        <a 
        href="https://us.balsavich.dev" 
        target="_blank">
          https://us.balsavich.dev
        </a>to see my previous site
      </p>
    </main>
  );
}
