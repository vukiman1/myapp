import Slider from "./Slider/Slider";
import SubBanner from "./SubBanner/SubBanner";
import SectionBanner from "./SectionBanner/SectionBanner";
import SectionCollection from "./SectionCollection/SectionCollection";
import { SectionCategory } from "./SectionCategory/SectionCategory";
import SectionBlog from "./SectionBlog/SectionBlog";

export function Sections() {
  return (
    <div>
      <div className="container mx-auto px-4 flex justify-center">
        <div className="max-w-[1280px] w-full">
          <Slider />
          <SubBanner />
          <SectionBanner />
          <SectionCollection />
          <SectionCategory />
          <SectionBlog />
        </div>
      </div>
    </div>
  );
}
