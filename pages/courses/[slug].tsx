import { Modal } from "@components/ui/common";
import { CourseHero, Curriculum, Keypoints } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { Course, getAllCourses } from "content/courses/fetcher";
import { CustomNextPage } from "model/common/customNextPages";

export type PageProps = {
  params: {slug: string};
}

export type CourseDetailProps = {
  course: Course;
}

export const CourseDetail: CustomNextPage<CourseDetailProps> = ({ course }: CourseDetailProps) => {
  return (
    <>
      <div className="py-4">
        <CourseHero title={course.title} description={course.description} image={course.coverImage} />
      </div>
      <Keypoints points={course.wsl} />
      <Curriculum locked={true} />
      <Modal />
    </>
  );
}

export function getStaticPaths() {
  const { data } = getAllCourses();
  return {
    paths: data.map(course => ({
      params: { slug: course.slug },
    })),
    fallback: false,
  }
}

export function getStaticProps({ params }: PageProps) {
  const { data } = getAllCourses();
  const course = data.find(course => course.slug === params.slug);
  return {
    props: {
      course
    },
  };
}

CourseDetail.Layout = BaseLayout;

export default CourseDetail;

