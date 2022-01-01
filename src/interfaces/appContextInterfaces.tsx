import * as LearningPathInterfaces from "./learningPathInterfaces";
import * as CourseInterfaces from "./courseInterfaces";

// AppContextValue
export interface AppContextValue {
  allLearningPaths: LearningPathInterfaces.LearningPathNoLevelInterface[];
  allLearningPathsWithCourses: LearningPathInterfaces.LearningPathDetailInterface[];
  allCourses: CourseInterfaces.CourseInterface[];
  popularCourses: CourseInterfaces.CourseInterface[];
  courseDetails: CourseInterfaces.CourseTocAndSummaryInterface[];
  setAllLearningPaths: React.Dispatch<
    React.SetStateAction<LearningPathInterfaces.LearningPathNoLevelInterface[]>
  >;
  setAllCourses: React.Dispatch<
    React.SetStateAction<CourseInterfaces.CourseInterface[]>
  >;
  setPopularCourses: React.Dispatch<
    React.SetStateAction<CourseInterfaces.CourseInterface[]>
  >;
  setCourseDetails: React.Dispatch<
    React.SetStateAction<CourseInterfaces.CourseTocAndSummaryInterface[]>
  >;
}
