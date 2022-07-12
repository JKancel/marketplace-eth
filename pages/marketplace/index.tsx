import { WalletBar } from "@components/ui/web3";
import { Card, List as CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { Course, getAllCourses } from "content/courses/fetcher";
import { CustomNextPage } from "model/common/customNextPages";
import { useAccount } from "@components/hooks/web3/setupHooks";
import { useNetwork } from "@components/hooks/web3/setupHooks";
import { Button, OrderModal } from "@components/ui";
import { useState } from "react";

type MarketplaceProps = {
  courses: Course[];
};

const Marketplace: CustomNextPage<MarketplaceProps> = ({
  courses,
}: MarketplaceProps) => {
  const { account } = useAccount();
  const { network } = useNetwork();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
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
                <Button
                  onClick={() => setSelectedCourse(course)}
                  variant="lightPurple"
                >
                  Purchase
                </Button>
              </div>
            )}
          />
        )}
      </CourseList>
      {selectedCourse && (
        <OrderModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
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
