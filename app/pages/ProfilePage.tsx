import { Form } from "@remix-run/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAccount, useBalance } from "wagmi";
import { ActivityCard } from "~/components/Cards";
import { ValidTokenAddress } from "~/utils/helper";
import { getProfile } from "~/store/profile/selector";
import process from "process";

type ActivityType = {
  id: string | number;
  title: string;
  date: Date | string;
};

type BalanceType = {
  decimals: number;
  formatted: string;
  symbol: string;
  value: bigint;
};

export const ProfilePage = () => {
  const profileState = useSelector(getProfile);
  const { address } = useAccount();
  const token = ValidTokenAddress(process.env.TOKEN_ADDRESS);
  const [balance, setBalance] = useState({} as BalanceType);

  if (token) {
    const response = useBalance({
      address: address,
      token: `0x${token}`
    });

    if (response && response.data) {
      setBalance(response.data);
    }
  }

  return (
    <main className="flex flex-col items-center justify-between min-h-[100vh] bg-white">
      <section className="w-full max-w-full lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 xl:px-0">
        <div className="flex flex-col gap-10">
          {/* Profile Header Section */}
          <div id="profile-header" className="flex flex-row gap-4 my-auto">
            <img
              className="rounded-full h-[100px]"
              src={profileState.profile ?? ''}
              alt="user"
            />

            <span className="my-auto text-indigo-950 font-bold text-lg">
              {profileState.username}
            </span>
          </div>

          <div className="w-full flex flex-row gap-8">
            {/* Profile Contact Section */}
            <div id="profile-contact" className="w-3/5">
              <Form method="POST">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {/* Username */}
                  <div className="sm:col-span-2">
                    <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">
                      User Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={profileState.username ?? ''}
                      />
                    </div>
                  </div>

                  {/* Profile */}
                  <div className="sm:col-span-2">
                    <label htmlFor="profile" className="block text-sm font-semibold leading-6 text-gray-900">
                      Profile
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="profile"
                        name="profile"
                        type="text"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={profileState.profile ?? ''}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={profileState.email ?? ''}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                      Phone
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={profileState.phone ?? ''}
                      />
                    </div>
                  </div>

                  {/* Recent */}
                  <div className="sm:col-span-2">
                    <label htmlFor="recent" className="block text-sm font-semibold leading-6 text-gray-900">
                      Recent Activities
                    </label>
                    <div className="mt-2.5 flex flex-col gap-2">
                      {profileState.activity && profileState.activity.map((item: ActivityType) => {
                        return (
                          <ActivityCard
                            key={crypto.randomUUID()}
                            {...item}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </Form>
            </div>

            {/* Profile Ethereum Section */}
            <div id="profile-ethereum" className="w-2/5">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold leading-6 text-gray-900">
                  Ethereum Wallet Balance
                </div>

                {balance && balance.value && balance.symbol ?
                  <div className="text-sm font-light leading-6 text-gray-900">
                    {balance.value.toString()} {balance.symbol}
                  </div>
                  :
                  <div className="text-sm font-light leading-6 text-gray-900">
                    N/A
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};