import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const HeaderAuth = () => {
  return (
    <header className="w-full h-[70px] bg-bg border-solid border-b-2">
      <div className="max-w-[1300px] m-auto h-full flex items-center justify-between px-8">
        <Link to="/">
          <img src={logo} className="w-[100px] lg:w-[142px]"></img>
        </Link>
      </div>
    </header>
  );
};

export default HeaderAuth;
