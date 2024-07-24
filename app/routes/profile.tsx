import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/react";
import { ProfilePage } from "~/pages";

export const meta: MetaFunction = () => {
  return [
    { title: "PKA | Profile" },
    { name: "description", content: "PKA Profile Page" },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  return json({ success: true });
};

export default function Profile() {
  return (
    <ProfilePage />
  );
};
