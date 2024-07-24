import { Form } from "@remix-run/react";

export const ProfilePage = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-[100vh] bg-white">
      <section className="w-full max-w-full lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 xl:px-0">
        <div className="flex flex-col gap-10">
          {/* Profile Header Section */}
          <div id="profile-header" className="flex flex-row gap-4 my-auto">
            <img
              className="rounded-full h-[100px]"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="user"
            />

            <span className="my-auto text-indigo-950 font-bold text-lg">
              Christopher Saburo
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
                      />
                    </div>
                  </div>

                  {/* Recent */}
                  <div className="sm:col-span-2">
                    <label htmlFor="recent" className="block text-sm font-semibold leading-6 text-gray-900">
                      Recent Activity
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="recent"
                        name="recent"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
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

                <div className="text-sm font-light leading-6 text-gray-900">
                  123SBCE233DLDEF35262DVEGGEWSXXEL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};