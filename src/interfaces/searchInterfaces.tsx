import * as CourseInterfaces from "./courseInterfaces";
import * as GlobalInterfaces from "./globalInterfaces";
import * as LearningPathInterfaces from "./learningPathInterfaces";

// Search results
export interface CourseResultInterface extends GlobalInterfaces.MasterDetail {
  contentInfo: CourseInterfaces.CourseInterface;
}

export interface LearningPathResultInterface
  extends GlobalInterfaces.MasterDetail {
  contentInfo: LearningPathInterfaces.LearningPathDetailInterface;
}

export interface SearchResultInterface {
  courses: CourseResultInterface[];
  learningPaths: LearningPathResultInterface[];
}

// Search payload
export interface SearchPayloadInterface {
  q: string;
  start: number;
  rows: number;
}
