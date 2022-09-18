import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import "@/styles/global.scss";
import "@/styles/styles.scss";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import data from "@/store/DummyData";
import { AppStorage } from "@/hooks/AppStorage.class";

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const productsData = AppStorage.get("productsData");

  useEffect(() => {
    if (!AppStorage.get("productsData"))
      AppStorage.set("productsData", JSON.stringify(data));
  }, [productsData]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
