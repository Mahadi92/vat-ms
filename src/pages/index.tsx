import DefaultLayout from "@/components/layouts/DefaultLayout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="">
        <div className="grid lg:grid-cols-2 gap-5">
          <div></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5"></div>
        <div className="grid lg:grid-cols-3 gap-5"></div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
