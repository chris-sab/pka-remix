import type { MetaFunction } from "@remix-run/node";
import { ProfilePage } from "~/pages";

export const meta: MetaFunction = () => {
  return [
    { title: "PKA | Profile" },
    { name: "description", content: "PKA Profile Page" },
  ];
};

export default function Profile() {
  return (
    <ProfilePage />
  );
}
