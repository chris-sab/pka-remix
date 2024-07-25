export interface BalanceType {
  decimals: number | null;
  formatted: string | null;
  symbol: string | null;
  value: bigint | null;
};

export interface BalanceState {
  loading: boolean;
  balance: BalanceType;
};