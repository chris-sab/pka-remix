export const ValidTokenAddress = (address: string | undefined | null): string | null => {
  if (address) {
    return address as `0x${string}`;
  }
  return null;
};