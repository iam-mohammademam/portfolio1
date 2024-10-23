/* eslint-disable react/prop-types */
const Button = ({ text }) => {
  return (
    <div className="absolute top-5 left-5 px-3 py-2 bg-white flex items-center gap-2">
      {text}
      <i className="bi bi-arrow-up-right"></i>
    </div>
  );
};
export default Button;
