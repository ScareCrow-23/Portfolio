const Title = ({
  text1,
  text2,
  color1 = "text-gray-700",
  color2 = "text-gray-500",
}) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className={`${color1}`}>
        {text1}
        <span className={`${color2} font-medium italic`}>{text2}</span>
      </p>
    </div>
  );
};

export default Title;
