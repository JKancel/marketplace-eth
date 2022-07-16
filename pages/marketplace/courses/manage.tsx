

import { BaseLayout } from '@components/ui';
import { OwnedCourseCard } from '@components/ui/course/ownedCourseCard';
import { MarketHeader } from '@components/ui/marketplace/header';
import { CustomNextPage } from 'model/common/customNextPages';

type Props = {}

const ManageCourses: CustomNextPage<any> = () => {
  return (
    <>
      <MarketHeader />
      <section className="grid grid-cols-1">
        <OwnedCourseCard />
      </section>
    </>
  )
}

ManageCourses.Layout = BaseLayout;

export default ManageCourses;