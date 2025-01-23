const Heading = ({ title, text }) => {
  return (
    <div className="text-center max-w-2xl mx-auto space-y-2">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Heading;
