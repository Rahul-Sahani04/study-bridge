
const CustomLink = ({ data, url }) => {
  const handleClick = () => {
    console.log("clicked");

      document.getElementById(url).scrollIntoView({ behavior: "smooth" });
  }
  return (
    <a
      // href={url}
      className="bg-[var(--primary-button)] hover:cursor-pointer text-white font-medium px-8 py-1 rounded-xl"
      onClick={handleClick}
    >
      {data}
    </a>
  );
};

export default CustomLink;
