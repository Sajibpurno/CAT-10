import Image from "next/image";
import Banner from "../components/Banner";
import HomeCatCard from "./all-cats/HomeCatCard";

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <HomeCatCard/>
    </div>
  );
}