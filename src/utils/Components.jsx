/* eslint-disable react/prop-types */
export const PageTitle = ({ title, tagline }) => {
  return (
    <div className="">
      <h1 className="text-4xl font-">{title}</h1>
      <p className="text-xl font-light">{tagline}</p>
    </div>
  );
};
