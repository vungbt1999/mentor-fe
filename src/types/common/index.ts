export type ImageObjType = {
  url: string;
  name?: string;
  alt?: string;
};

export interface IUser {
  id?: string;
  name: string;
  email: string;
  score: number;
  performance: number;
  isBestPerformance?: boolean;
  performanceUp?: boolean;
  performanceDown?: boolean;
  avatar: ImageObjType;
}

export interface IAspectWeight {
  aspect: string;
  aspect_id: string;
  display_name: string;
  score: number | null; // độ quan trọng
  thresh_hold: string | null | number; // ngưỡng
}
