import DefaultLayout from "@/components/layouts/DefaultLayout";
import type { NextPage } from "next";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { AiOutlineCodepen, AiOutlineCodeSandbox } from "react-icons/ai";
import { BiBadge, BiChip } from "react-icons/bi";
import { RiStackLine } from "react-icons/ri";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="wrapper py-10">
        <div className="grid lg:grid-cols-2 gap-5">
          <div
            className={`bg-primary-gradient rounded-lg shadow-xl flex flex-col justify-center items-center p-5`}
          >
            <span className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-400/20 text-blue-600">
              <BiBadge size={22} />
            </span>
            <h2 className="text-3xl font-bold pt-2">Greetings... Vat MS Ltd</h2>
            {/* <span className="text-gray-500">{subtitle}</span> */}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <Info
              icon={<FiShoppingBag size={20} />}
              title="7885"
              subtitle="Total Sales"
            />
            <Info
              icon={<AiOutlineCodepen size={20} />}
              title="7885"
              subtitle="Monthly Sales"
            />
            <Info
              icon={<AiOutlineCodeSandbox size={20} />}
              title="7885"
              subtitle="Total Sales"
            />
            <Info
              icon={<FiShoppingCart size={20} />}
              title="7885"
              subtitle="Total Sales"
            />
            <Info
              icon={<BiChip size={20} />}
              title="7885"
              subtitle="Total Sales"
            />
            <Info
              icon={<RiStackLine size={20} />}
              title="7885"
              subtitle="Total Sales"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5"></div>
        <div className="grid lg:grid-cols-3 gap-5"></div>
      </div>
    </DefaultLayout>
  );
};

interface InfoPropsType {
  icon: JSX.Element;
  title: string | number;
  subtitle: string;
  className?: string;
}

const Info: React.FC<InfoPropsType> = ({
  icon,
  title,
  subtitle,
  className,
}) => {
  return (
    <div
      className={`rounded-lg border flex flex-col justify-center items-center p-5 ${className}`}
    >
      <span className="flex justify-center items-center w-10 h-10 rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <h2 className="text-xl font-bold pt-2">{title}</h2>
      <span className="text-gray-500">{subtitle}</span>
    </div>
  );
};

export default Home;
