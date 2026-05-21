import Image from "next/image";
import Banner from "../components/Banner";
import HomeCatCard from "./all-cats/HomeCatCard";
import FeaturedPetSection from "../components/FeaturedPetSection";
import WhyPetNest from "../components/WhyPetNest";
import SuccessStories from "../components/SuccessStories";
import PetCareTips from "../components/PetCareTips";

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <HomeCatCard/>
      <FeaturedPetSection/>
      <WhyPetNest/>
      <SuccessStories/>
      <PetCareTips/>
    </div>
  );
}