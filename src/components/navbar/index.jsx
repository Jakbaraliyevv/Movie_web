import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import nav1 from "../../assets/nav1.svg";
import nav2 from "../../assets/nav2.svg";
import nav3 from "../../assets/nav3.svg";
import nav4 from "../../assets/nav4.svg";

function Navbar() {
  return (
    <section className="bg-[#030a1b] py-[30px]">
      <div className="w-[90%] m-auto flex items-center justify-between border-[1px] border-[#11426f] rounded-[20px] px-[15px] backdrop-blur-md bg-[#0a0f1b]">
        <div className="flex items-center gap-[80px]">
          <div>
            <img src={logo} alt="This is logo" />
          </div>
          <nav className="text-[#FFF] font-medium text-[24px] flex items-center gap-[40px]">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Pricing</Link>
            <Link to={"/"}>Movies</Link>
            <Link to={"/"}>Series</Link>
            <Link to={"/"}>Collection</Link>
            <Link to={"/"}>FAQ</Link>
          </nav>
        </div>
        <div className="flex items-center gap-[40px]">
          <img className=" cursor-pointer" src={nav1} alt="This is image" />
          <img className=" cursor-pointer" src={nav2} alt="This is image" />
          <img className=" cursor-pointer" src={nav3} alt="This is image" />
          <img className=" cursor-pointer" src={nav4} alt="This is image" />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
