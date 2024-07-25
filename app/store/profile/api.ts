import { PROFILE_DATA } from "~/utils/demo";

export const getProfileInfo = async (): Promise<any> => {
  return await PROFILE_DATA;
};