export interface Lesson {
    id: number;
    [key: string]: string | number;
  }
  
  export interface LessonsState {
    lessons: Lesson[];
    loading: boolean;
    error: string | null;
    lesson: Lesson | null;
  }