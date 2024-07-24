import { Link } from "@remix-run/react";

export const Header = () => {
  return (
    <section className="w-full flex justify-center bg-indigo-950">
      <div className="w-full max-w-full lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px]">
        <div className="flex justify-between h-16">
          <div className="flex flex-row gap-12">
            <Link to="/" className="text-white font-bold text-3xl my-auto">
              PKA
            </Link>

            <div className="flex flex-row gap-8 my-auto">
              <Link to="/" className="text-white font-medium text-base uppercase">
                Home
              </Link>

              <Link to="/profile" className="text-white font-medium text-base uppercase">
                Profile
              </Link>
            </div>
          </div>

          <Link to="/" className="text-white font-medium text-base my-auto uppercase">
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};