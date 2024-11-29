/* eslint-disable react/prop-types */
const Box = ({ children }) => {
  return (
    <div className="border border-gray-300 w-3/4 h-full container mx-auto ">
      {children}
    </div>
  );
};

export default Box;
