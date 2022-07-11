import { WalletBar } from "@components/ui/web3";
import { List as CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { Course, getAllCourses } from "content/courses/fetcher";
import { CustomNextPage } from "model/common/customNextPages";
import { useAccount } from "@components/hooks/web3/useAccount";
import { useNetwork } from "@components/hooks/web3/useNetwork";

type MarketplaceProps = {
  courses: Course[];
};

const Marketplace: CustomNextPage<MarketplaceProps> = ({
  courses,
}: MarketplaceProps) => {
  const { account } = useAccount();
  const { network } = useNetwork();
  return (
    <>
      <div className="py-4">
        <WalletBar address={account.data} network={network?.data}/>
      </div>
      <CourseList courses={courses} />
    </>
  );
};

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}

Marketplace.Layout = BaseLayout;

export default Marketplace;
