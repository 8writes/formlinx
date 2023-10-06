import { Hero, Integration, SignUp, Snippet } from "@/containers/home";
import Template from "./template";

export default function Page() {
  return (
    <Template showHeader={true} showFooter={true}>
      <main>
        <Hero />
        <Snippet />
        <Integration />
        <SignUp />
      </main>
    </Template>
  );
}
