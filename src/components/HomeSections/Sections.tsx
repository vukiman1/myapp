import Slider from "./Slider/Slider";
import SubBanner from "./SubBanner/SubBanner";
import SectionBanner from "./SectionBanner/SectionBanner";
import SectionCollection from "./SectionCollection/SectionCollection";

export function Sections() {
  return (
    <div>
      <div className="container mx-auto flex justify-center">
        <div className="max-w-[1280px]">
          <Slider />
          <SubBanner />
          <SectionBanner />
          <SectionCollection />
        </div>
      </div>
    </div>
  );
}
