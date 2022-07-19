

import { BaseLayout, Button } from '@components/ui';
import { CourseFilter } from '@components/ui/course/filter';
import { OwnedCourseCard } from '@components/ui/course/ownedCourseCard';
import { MarketHeader } from '@components/ui/marketplace/header';
import { CustomNextPage } from 'model/common/customNextPages';

type Props = {}

const ManageCourses: CustomNextPage<any> = () => {
  return (
    <>
      <MarketHeader />
      <CourseFilter />
      <section className="grid grid-cols-1">
      <OwnedCourseCard>
          <div className="flex mr-2 relative rounded-md">
            <input
              type="text"
              name="account"
              id="account"
              className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
              placeholder="0x2341ab..." />
            <Button>
              Verify
            </Button>
          </div>
        </OwnedCourseCard>
      </section>
    </>
  )
}

ManageCourses.Layout = BaseLayout;

export default ManageCourses;