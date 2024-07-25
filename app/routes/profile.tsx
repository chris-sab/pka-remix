import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { MetaFunction } from "@remix-run/node";

import { ProfilePage } from "~/pages";

import { actions as profileActions } from "../store/profile/slice";
import { actions as balanceActions } from "../store/balance/slice";


export const meta: MetaFunction = () => {
  return [
    { title: "PKA | Profile" },
    { name: "description", content: "PKA Profile Page" },
  ];
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
