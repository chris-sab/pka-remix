import type { ActionFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/react";
import { ProfilePage } from "~/pages";

import { PROFILE_DATA } from "~/utils/demo";

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

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const response = PROFILE_DATA;

  return json({
    response
  });
};

export default function Profile() {
  return (
    <ProfilePage />
  );
};
