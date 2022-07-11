import { WalletBar } from "@components/ui/web3";
import { Card, List as CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { Course, getAllCourses } from "content/courses/fetcher";
import { CustomNextPage } from "model/common/customNextPages";
import { useAccount } from "@components/hooks/web3/setupHooks";
import { useNetwork } from "@components/hooks/web3/setupHooks";
import { Button } from "@components/ui";

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
        <WalletBar
          address={account.data}
          network={{
            data: network?.data,
            target: network.target,
            isSupported: network.isSupported,
            hasInitialResponse: network.hasInitialResponse || false,
          }}
        />
      </div>
      <CourseList courses={courses}>
        {(course: Course) => (
          <Card
            key={course.id}
            course={course}
            Footer={() => (
              <div className="mt-4">
                <Button variant="lightPurple">Purchase</Button>
              </div>
            )}
          />
        )}
      </CourseList>
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
