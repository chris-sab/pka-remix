import type { MetaFunction } from "@remix-run/node";
import { HomePage } from "~/pages";

export const meta: MetaFunction = () => {
  return [
    { title: "PKA | Home" },
    { name: "description", content: "PKA Home Page" },
  ];
};

export default function Index() {
  return (
    <HomePage />
  );
}
