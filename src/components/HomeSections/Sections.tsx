import Slider from "./Slider/Slider";
import SubBanner from "./SubBanner/SubBanner";

export function Sections() {
  return (
    <div>
      <div className="container mx-auto flex justify-center">
        <div className="max-w-[1280px]">
          <Slider />
          <SubBanner />
        </div>
      </div>
    </div>
  );
}
