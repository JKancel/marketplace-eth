import courses from './courses.json';

export type Course = {
  id: string;
  type: string;
  title: string;
  description: string;
  coverImage: string;
  author: string;
  link: string;
  slug: string;
  wsl: string[];
  createdAt: string;
  index?: number;
};

export interface CourseMap {
  [key: string | number]: Course;
}

export const getAllCourses = (): { data: Course[], courseMap: CourseMap } => {
  return {
    data: courses,
    courseMap: courses.reduce((acc, curr, i) => {
      acc[curr.id] = curr;
      acc[curr.id].index = i;
      return acc;
    }, {} as CourseMap)
  }
}