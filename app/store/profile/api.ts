import { PROFILE_DATA } from "~/utils/demo";
import { ProfileType } from "./types";

export const getProfileAPI = async (): Promise<any> => {
  const res = await PROFILE_DATA;
  return res;
};

export const updateProfileAPI = async (payload: ProfileType): Promise<any> => {
  const res = await payload;
  return res;
};