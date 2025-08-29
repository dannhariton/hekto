import Blog from "./_components/Blog";
import Categories from "./_components/Categories";
import Discount from "./_components/Discount";
import Featured from "./_components/Featured";
import Hero from "./_components/Hero";
import Latest from "./_components/Latest";
import Newsletter from "./_components/Newsletter";
import Trending from "./_components/Trending";
import Unique from "./_components/Unique";

export default function Page() {
  return (
    <main>
      <Hero></Hero>
      <Featured></Featured>
      <Latest></Latest>
      <Unique></Unique>
      <Trending></Trending>
      <Discount></Discount>
      <Categories></Categories>
      <Newsletter></Newsletter>
      <Blog></Blog>
    </main>
  );
}
