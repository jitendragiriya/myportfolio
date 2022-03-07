import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`;
};

const ProjectImages = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      stopOnHover={true}
      useKeyboardArrows={true}
      showStatus={false}
    >
      <div className="relative w-full h-[50vw]  lg:h-[40vw]">
        <Image
          loader={myLoader}
          src={"images/img1.png"}
          alt="jitendragiriya"
          layout="fill"
        />
      </div>
      <div className="relative w-full h-[50vw] lg:h-[40vw]">
        <Image
          loader={myLoader}
          src={"images/img2.png"}
          alt="jitendragiriya"
          layout="fill"
        />
      </div>
      <div className="relative w-full h-[50vw]  lg:h-[40vw]">
        <Image
          loader={myLoader}
          src={"images/img3.png"}
          alt="jitendragiriya"
          layout="fill"
        />
      </div>
    </Carousel>
  );
};

export default ProjectImages;
