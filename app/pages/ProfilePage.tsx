export const ProfilePage = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-[100vh] bg-white">
      <section className="w-full max-w-full lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] px-5 xl:px-0">
        <div className="flex flex-col">
          <div className="flex flex-row gap-4 my-auto">
            <img
              className="rounded-full h-[100px]"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="user"
            />

            <span className="my-auto text-indigo-950 font-bold text-lg">
              Christopher Saburo
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};