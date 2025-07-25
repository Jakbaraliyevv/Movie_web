
import { Button } from "antd";

function Showcase() {
  return (
    <section className="bg_img pb-5">
      <div className="w-[90%] h-full m-auto relative">
        <div className="absolute bottom-0 flex items-center gap-[20px]">
          <Button
            type="primary"
            className="h-[40px] w-[160px] text-[17px] rounded-[40px]"
          >
            Watch Movie
          </Button>
          <button className="border-[1px] border-blue-500 h-[40px] w-[160px] text-[#FFF] text-[17px] rounded-[40px]">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
