// Keys declaration
export interface ObjectKeys<T = any> {
  [key: string]: T;
}

export interface MasterDetail {
  id: number;
  title: string;
  step?: number;
  logo?:string
}
