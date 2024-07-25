import { useAccount, useBalance } from "wagmi";
import { ValidTokenAddress } from "~/utils/helper";
import process from "process";

export const getBalanceInfo = async (): Promise<any> => {
  const { address } = useAccount();
  const token = ValidTokenAddress(process.env.TOKEN_ADDRESS);

  return await useBalance({
    address: address,
    token: `0x${token}`
  });
};