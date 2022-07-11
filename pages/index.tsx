import { Hero } from "@components/ui/common";
import { Card, List as CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { Course, getAllCourses } from "content/courses/fetcher";
import { CustomNextPage } from "model/common/customNextPages";

type HomeProps = {
  courses: Course[];
};

const Home: CustomNextPage<HomeProps> = ({ courses }: HomeProps) => {
  return (
    <>
      <Hero />
      <CourseList courses={courses}>
        {(course: Course) => <Card key={course.id} course={course} />}
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

Home.Layout = BaseLayout;

export default Home;
