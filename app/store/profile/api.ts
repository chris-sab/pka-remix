import { PROFILE_DATA } from "~/utils/demo";
import { ProfileType } from "./types";

export const getProfileInfo = async (): Promise<any> => {
  return await PROFILE_DATA;
};

export const updateProfileInfo = async (payload: ProfileType): Promise<any> => {
  return await payload;
};