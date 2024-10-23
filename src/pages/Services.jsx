import ServiceCard from "../components/ServiceCard";
import { services } from "../utils/exports";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  // Common slider settings
  const commonSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const rtlSettings = { ...commonSettings, rtl: true }; // Right-to-left specific settings

  // Render service cards
  const renderServiceCards = () =>
    services?.map((item, index) => (
      <ServiceCard key={index} item={item} serial={index + 1} />
    ));

  return (
    <div className="flex flex-col gap-y-16 w-screen pb-20">
      <div className="flex flex-col gap-y-2">
        {/* Left-to-right slider */}
        <Slider {...commonSettings}>{renderServiceCards()}</Slider>

        {/* Right-to-left slider */}
        <Slider {...rtlSettings}>{renderServiceCards()}</Slider>
      </div>
    </div>
  );
};

export default Services;
