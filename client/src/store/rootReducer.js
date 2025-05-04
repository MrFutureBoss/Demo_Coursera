import { coursesReducer } from "./reducers/courseReducer"

// Lấy đúng reducer function
const rootReducer = {
    courses: coursesReducer.reducer
};

export default rootReducer;