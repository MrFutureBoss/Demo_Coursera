export interface Section {
    id: number;
    name: string;
    time: number;
    type: string;
    content: string;
    details: string;
    lesson_id: number;
    course_id: number;
    updated_at: string;
    updated_by: number;    
  }
  
  export interface SectionsState {
    sections: Section[];
    loading: boolean;
    error: string | null;
    section: Section | null;
  }