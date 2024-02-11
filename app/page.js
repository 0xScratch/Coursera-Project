import Image from "next/image";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <main className="pl-20 pr-20">
      <Hero />
      <hr className="section-break"/>
      <section className="flex gap-24">
        <Card 
          url={"/html.png"}
          name={"HTML"}
          exp={4}
        />
        <Card 
          url={"/javascript.png"}
          name={"JavaScript"}
          exp={3}
          height={46}
          width={46}
        />
        <Card 
          url={"/java.png"}
          name={"Java"}
          exp={4}
        />
        <Card 
          url={"/react.png"}
          name={"React"}
          exp={4}
        />
      </section>
      <section className="flex gap-24 mt-20">
        <Card 
          url={"/nodejs.png"}
          name={"Node.js"}
          exp={4}
        />
        <Card 
          url={"/css.png"}
          name={"CSS"}
          exp={4}
        />
      </section>
    </main>
  );
}
