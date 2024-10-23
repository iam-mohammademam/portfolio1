const LandingPage = () => {
  return (
    <>
      <div className="h-[90vh] w-screen relative">
        <div className="absolute top-1/2 -translate-y-1/2 w-2/3 left-1/2 -translate-x-1/2 text-center">
          <div className="flex items-center justify-center gap-2 text-sm ">
            <span className="h-4 w-4 rounded-full bg-green-600"></span>
            <span className="font-light">Available for freelance</span>
          </div>
          <h1
            className="text-6xl font-medium"
            style={{
              lineHeight: 1.2,
            }}
          >
            Empowering Brands with Cutting-Edge Web Solutions.
          </h1>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-1.5"></div>
      </div>
    </>
  );
};
export default LandingPage;
