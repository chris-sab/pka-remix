import { useAccount, useBalance } from "wagmi";
import { ValidTokenAddress } from "~/utils/helper";
import process from "process";

export const getBalanceAPI = async (): Promise<any> => {
  const { address } = useAccount();
  const token = ValidTokenAddress(process.env.TOKEN_ADDRESS);
  const res = await useBalance({
    address: address,
    token: `0x${token}`
  });

  return res.data;
};