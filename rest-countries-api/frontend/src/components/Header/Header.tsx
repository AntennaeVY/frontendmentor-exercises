import { useNavigate } from "react-router";
import MoonIcon from "../../assets/moon-outline.svg";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleToggle = () => {
    if (localStorage.theme == "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <header className="flex justify-between px-20 py-6 shadow-md dark:bg-dark-blue dark:text-white">
      <h1
        onClick={handleClick}
        className="cursor-pointer font-nunito text-xl font-extrabold"
      >
        Where in the world?
      </h1>
      <div
        className="flex items-center justify-between gap-2 cursor-pointer"
        onClick={handleToggle}
      >
        <img src={MoonIcon} alt="🌙" className="size-4 dark:invert" />
        <span className="font-semibold">Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
