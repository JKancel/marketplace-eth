import { Course } from "content/courses/fetcher";
import { Card } from "./card";

type CourseProps = {
  courses: Course[];
  children?: (course: Course) => React.ReactNode;
};

export const List = ({ courses, children }: CourseProps) => (
  <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
    {courses.map(course => 
      children && children(course)
    )}
  </section>
);
