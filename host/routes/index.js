import courseRouter from './courseRoutes.js';
import lessonRouter from './lessonRoutes.js';
import takeSectionRouter from './learn/takeSectionRoutes.js';
import takeTestRouter from './learn/takeTestRoutes.js';
import authenRouter from './auth/authenRoutes.js';
import classRouter from './classRoutes.js';

const routes = {
    authenRouter,
    courseRouter,
    lessonRouter,
    takeSectionRouter,
    takeTestRouter,
    classRouter
}

export default routes;
