import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

import { Header, Footer } from "./components";
import { config, queryClient } from "./wagmiConfig";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider } from "@tanstack/react-query";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <div className="py-10">
          {children}
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <Outlet />
      </WagmiProvider>
    </QueryClientProvider>
  );
}
