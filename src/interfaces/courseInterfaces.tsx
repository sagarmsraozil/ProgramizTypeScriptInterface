import * as GlobalInterfaces from "./globalInterfaces";

// Course
export interface CourseInterface extends GlobalInterfaces.MasterDetail {
  chaptersCount: number;
  language: GlobalInterfaces.ObjectKeys;
  level: GlobalInterfaces.ObjectKeys;
}

// CourseToc

// CourseToc sectionContent
export interface CourseTocSectionContentInterface
  extends GlobalInterfaces.MasterDetail {
  sectionId: number;
  pagesCount: number;
  isFree: boolean;
}

// CoursToc sections
export interface CourseTocSectionInterface
  extends GlobalInterfaces.MasterDetail {
  sectionContent: CourseTocSectionContentInterface[];
}

export interface CourseTocInterface {
  id: number;
  sections: CourseTocSectionInterface[];
}

// Course Summary
export interface CourseSummary {
  id: number;
  title: string;
  content: string;
  courseId: number;
}

// Course Details
export interface CourseTocAndSummaryInterface {
  id: number;
  toc: CourseTocInterface;
  summary: CourseSummary;
}
