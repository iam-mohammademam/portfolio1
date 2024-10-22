const Header = () => {
  return (
    <>
      <div className="w-screen py-5 px-[10%] flex items-center justify-between text-black">
        <div className="relative h-6 w-6 cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-black absolute text-xs top-0 left-1/2 -translate-x-1/2"></span>
          <span className="w-2 h-2 rounded-full bg-black absolute text-xs bottom-0 left-1/2 -translate-x-1/2"></span>
          <span className="w-2 h-2 rounded-full bg-black absolute text-xs right-0 top-1/2 -translate-y-1/2"></span>
          <span className="w-2 h-2 rounded-full bg-black absolute text-xs left-0 top-1/2 -translate-y-1/2"></span>
        </div>
        <span className="text-lg font- uppercase cursor-pointer">
          M. Hossain
        </span>
        <div className="cursor-pointer">
          <i className="bi bi-moon-stars-fill"></i>
        </div>
      </div>
    </>
  );
};
export default Header;
