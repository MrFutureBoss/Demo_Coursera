//e_course_quiz is test

export interface Test {
    id: number;
    type: string;
    name: string;
    time: number;
    score: number;
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
    max_attempt: number;
    status: string;
    updated_by: number;
    updated_at: string;
}

export interface TestResult {
    id: number;
    type: string;
    name: string;
    time: number;
    score: number;
    total_score: number;
    quiz_id: string;
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
    max_attempt: number;
    status: string;
    updated_by: number;
    updated_at: string;
}

export interface TestsState {
    tests: Test[];
    loading: boolean;
    error: string | null;
    test: Test | null;
    test_result: TestResult | null;
    count: number;
}