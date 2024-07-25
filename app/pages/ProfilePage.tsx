import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as profileActions } from "../store/profile/slice";

import { ActivityCard } from "~/components/Cards";
import { getProfile } from "~/store/profile/selector";
import { getBalance } from "~/store/balance/selector";
import { ProfileType } from "~/store/profile/types";

type ActivityType = {
  id: string | number;
  title: string;
  date: Date | string;
};

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const profileState = useSelector(getProfile);
  const balanceState = useSelector(getBalance);

  const [form, setForm] = useState({} as ProfileType);

  useEffect(() => {
    setForm(profileState);
  }, [profileState]);

  const handleSave = () => {
    dispatch(profileActions.updateProfile(form));
  };

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

          <div className="w-full flex flex-col lg:flex-row gap-8">
            {/* Profile Contact Section */}
            <div id="profile-contact" className="w-full lg:w-3/4">
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
                      value={form.username ?? ''}
                      onChange={(evt: any) => {
                        setForm({
                          ...form,
                          username: evt.target.value
                        });
                      }}
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
                      value={form.profile ?? ''}
                      onChange={(evt: any) => {
                        setForm({
                          ...form,
                          profile: evt.target.value
                        });
                      }}
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
                      value={form.email ?? ''}
                      onChange={(evt: any) => {
                        setForm({
                          ...form,
                          email: evt.target.value
                        });
                      }}
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
                      value={form.phone ?? ''}
                      onChange={(evt: any) => {
                        setForm({
                          ...form,
                          phone: evt.target.value
                        });
                      }}
                    />
                  </div>
                </div>

                {/* Recent */}
                <div className="sm:col-span-2">
                  <label htmlFor="recent" className="block text-sm font-semibold leading-6 text-gray-900">
                    Recent Activities
                  </label>
                  <div className="mt-2.5 flex flex-col gap-4 lg:gap-2">
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
                  className="block w-full rounded-md bg-indigo-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => handleSave()}
                >
                  Save
                </button>
              </div>
            </div>

            {/* Profile Ethereum Section */}
            <div id="profile-ethereum" className="w-full lg:w-1/4">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold leading-6 text-gray-900">
                  Ethereum Wallet Balance
                </div>

                {balanceState && balanceState.value && balanceState.symbol ?
                  <div className="text-sm font-light leading-6 text-gray-900">
                    {balanceState.value.toString()} {balanceState.symbol}
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