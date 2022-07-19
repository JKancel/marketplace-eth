

import { BaseLayout, Button } from '@components/ui';
import { Message, TYPES } from '@components/ui/common/message';
import { OwnedCourseCard } from '@components/ui/course/ownedCourseCard';
import { MarketHeader } from '@components/ui/marketplace/header';
import { CustomNextPage } from 'model/common/customNextPages';


const OwnedCourses: CustomNextPage<any> = () => {
  return (
    <>
      <MarketHeader />
      <section className="grid grid-cols-1">
      <OwnedCourseCard>
          <Message>
            My custom message!
          </Message>
          <Button>
            Watch the course
          </Button>
        </OwnedCourseCard>
      </section>
    </>
  )
}

OwnedCourses.Layout = BaseLayout;

export default OwnedCourses;