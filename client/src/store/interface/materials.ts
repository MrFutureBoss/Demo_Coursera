export interface Material {
    id: number;
    name: string;
    time: number;
    type: string;
    content: string;
    detail: string;
    lesson_id: number;
    course_id: number;
    material_id_ByType: number;
    updated_at: string;
    updated_by: number;    
  }
  
  export interface MaterialsState {
  materialsByLessonId: { [lessonId: string]: Material[] };
  loading: boolean;
  error: string | null;
  material: Material | null;
}