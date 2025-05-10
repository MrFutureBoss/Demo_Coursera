export interface Lesson {
    id: number;
    course_id: number;
    name: string;
    detail: string;
    type: string;
    time: number;
    updated_at: string;
    updated_by: number;
  }
  
  export interface LessonsState {
    lessons: Lesson[];
    loading: boolean;
    error: string | null;
    lesson: Lesson | null;
  }