import Button from "../components/Button";
import { PageTitle } from "../utils/Components";

const Portfolio = () => {
  return (
    <>
      <div className="flex flex-col gap-y-16 w-screen px-[10%] pb-20">
        <PageTitle title={"Portfolio"} tagline={"Showcase of innovations"} />

        <div className="grid grid-cols-2 gap-16">
          <div className="w-full border-3 border-black rounded-sm relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1729005326851-89fab5720eba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <Button text={"Visit Site"} />
          </div>
          <div className="w-full border-3 border-black rounded-sm">
            <img
              src="https://plus.unsplash.com/premium_photo-1729005326851-89fab5720eba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
