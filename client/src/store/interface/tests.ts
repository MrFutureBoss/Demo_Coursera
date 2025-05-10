//e_course_quiz is test

export interface Test {
    id: number;
    type: string;
    name: string;
    quiz_id: string;
    team_id: number;
    question: string;
    question_image: string;
    answers: string;
    options: string;
    description: string;
    category_code: string;
    sub_category_code: string;
    correct_feedback: string;
    correct_url: string;
    incorrect_feedback: string;
    incorrect_url: string;
    status: string;
    updated_by: number;
    updated_at: string;
}


export interface TestsState {
    tests: Test[];
    loading: boolean;
    error: string | null;
    test: Test | null;
}