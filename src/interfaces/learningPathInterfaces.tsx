import * as GlobalInterfaces from "./globalInterfaces";

// Learning path course

export interface LearningPathLevelInterface
  extends GlobalInterfaces.MasterDetail {
  courses: GlobalInterfaces.MasterDetail[];
}

// Learning paths with courses
export interface LearningPathDetailInterface extends GlobalInterfaces.MasterDetail {
  levels: LearningPathLevelInterface[];
}

// LearningPathsWithNoLevel
export interface LearningPathNoLevelInterface
  extends GlobalInterfaces.MasterDetail {
  learningPathLevels: null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// LearningPathEnrollment
export interface LearningPathEnrollmentInterface {
  learningPathId: number;
  isCompleted: boolean;
}
