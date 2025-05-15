export interface Class {
    id: number;
    code: string;
    course_id: number;
    duration: number;
    start_date: string;
    end_date: string;
    instructor: string;
    participants: string;
    status: string;
    version:string,
    language: string;
    type: string;
    banner: string;
    certificate: string;
    description: string;
    course_start_time: string;
    course_end_time: string;
    overview: string;
    team: string;
    team_group: string;
    topic_name: string;
    updated_at: string;
    updated_by: string;
}

export interface ClassState {
    classesForParticipant: Class[];
    loading: boolean;
    error: string | null;
    count: number;
}