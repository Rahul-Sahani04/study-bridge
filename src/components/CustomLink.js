import { useNavigate } from "react-router-dom";

const CustomLink = ({ data, url }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("clicked");
    try {

      if (url.includes("/")) {
        navigate(url);
      } else {
        document.getElementById(url).scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.log(error);
      navigate("/#" + url);
    }

  };
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
