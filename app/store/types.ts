import { ProfileState } from "./profile/types";
import { BalanceState } from "./balance/types";

export interface RootState {
  profile?: ProfileState,
  balance?: BalanceState,
};