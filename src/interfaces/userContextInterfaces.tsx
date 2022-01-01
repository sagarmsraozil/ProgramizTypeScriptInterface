import * as GlobalInterfaces from "./globalInterfaces";

// User course progress
export interface UserCourseProgressRecordInterface {
  id: number;
  title: string;
  logo: string;
  updatedAt: string;
}

export interface UserCourseProgressInterface {
  inProgress: UserCourseProgressRecordInterface[];
  completed: UserCourseProgressRecordInterface[];
}

// User learning path progress
export interface UserLearningPathProgressRecordInterface {
  id: number;
  updatedAt: string;
}

export interface UserLearningPathProgressInterface {
  inProgress: UserLearningPathProgressRecordInterface[];
  completed: UserLearningPathProgressRecordInterface[];
}
export interface UserCourseProgressRecordInterface {
  id: number;
  title: string;
  logo: string;
  updatedAt: string;
}

export interface UserCourseProgressInterface {
  inProgress: UserCourseProgressRecordInterface[];
  completed: UserCourseProgressRecordInterface[];
}
// User information
export interface UserInformationInterface {
  accessToken: string;
  accountStatus: string;
  authenticationType: string;
  createdAt: string;
  createdJustNow: boolean;
  email: string;
  emailVerified: boolean;
  fullName: string;
  id: number;
  isUnlinkedAppleAccount: boolean;
  isUnlinkedGoogleAccount: boolean;
  profilePicture?: null | string;
  userSubscription?: null | boolean;
}

// User lesson progress
export interface LessonProgressRecordInterface {
  sectionId: number;
  sectionContentId: number;
  sectionContentDetailType: number;
  sectionContentPageId: number;
  isBookMarked: boolean;
  updatedAt: string;
}

export interface LessonProgressInterface {
  courseId: number;
  lessonProgress: LessonProgressRecordInterface[];
}

// User lesson interaction
export interface UserLessonInteractionInterface {
  activeChapter: number;
  completedSections: number[];
  remainingCourses: GlobalInterfaces.ObjectKeys<number>;
  currentSection: number;
  courseId: number;
}

// UserContext value
export interface UserContextValue {
  terminalCode: string;
  code: string;
  userLearningPathProgress: UserLearningPathProgressInterface;
  userCourseProgress: UserCourseProgressInterface;
  userInformation: UserInformationInterface;
  userLessonProgress: LessonProgressInterface[];
  userLessonInteraction: UserLessonInteractionInterface;
  setUserLearningPathProgress: React.Dispatch<
    React.SetStateAction<UserLearningPathProgressInterface>
  >;
  setUserCourseProgress: React.Dispatch<
    React.SetStateAction<UserCourseProgressInterface>
  >;
  setUserInformation: React.Dispatch<UserInformationInterface>;
  setUserLessonProgress: React.Dispatch<
    React.SetStateAction<LessonProgressInterface[]>
  >;
  setUserLessonInteraction: React.Dispatch<
    React.SetStateAction<UserLessonInteractionInterface>
  >;
  setTerminalCode: React.Dispatch<React.SetStateAction<string>>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}
