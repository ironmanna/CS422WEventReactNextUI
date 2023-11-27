import TopNavbar from "./TopNavbar";
import Recommended from "./Recommended";
import SearchCard from "./SearchCard";

function HomePage() {
  return (
    <>
      <TopNavbar id={1} />
      <SearchCard />
      <Recommended />
    </>
  );
}

export default HomePage;
