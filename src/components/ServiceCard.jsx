/* eslint-disable react/prop-types */

const ServiceCard = ({ item }) => {
  return (
    <div className="flex items-center justify-center w-full h-full p-5 overflow-hidden border shadow-sm rounded-sm">
      {/* <div className="w-fit shrink-0">
        <h1 className="text-5xl font-bold -rotate-90 mt-3.5">0{serial}</h1>
      </div> */}
      <div className="w-full overflow-hidden">
        <h1 className="text-3xl whitespace-nowrap text-ellipsis overflow-hidden w-full">
          {item?.title}
        </h1>
        <p className="text-lg font-light ellipsis-4 mt-2">{item?.desc}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
