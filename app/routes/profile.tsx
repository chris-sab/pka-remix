import { useEffect } from "react";
import { useDispatch } from "react-redux";

import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/react";

import { ProfilePage } from "~/pages";

import { actions as profileActions } from "../store/profile/slice";
import { actions as balanceActions } from "../store/balance/slice";


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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileActions.profileRequest());
    dispatch(balanceActions.balanceRequest());
  }, []);

  return (
    <ProfilePage />
  );
};
