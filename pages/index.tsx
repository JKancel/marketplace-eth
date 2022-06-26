import { useWeb3 } from "@components/providers";
import { Breadcrumbs, Hero } from "@components/ui/common";
import { List as CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { OrderCard } from "@components/ui/order";
import { EthRates, WalletBar } from "@components/ui/web3";
import { Course, getAllCourses } from "content/courses/fetcher";
import { CustomNextPage } from "model/common/customNextPages";

type HomeProps = {
  courses: Course[];
}

const Home: CustomNextPage<HomeProps> = ({ courses }: HomeProps) => {
  return (
    <>
      <Hero />
      {/* <Breadcrumbs />
      <WalletBar />
      <EthRates />
      <OrderCard /> */}
      <CourseList courses={courses}/>
    </>
  );
};

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data
    },
  };
}

Home.Layout = BaseLayout;

export default Home;
