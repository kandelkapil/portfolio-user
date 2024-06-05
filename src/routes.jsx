import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import NotFound from "./pages/ErrorPage";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/resume",
        element: <Resume />,
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);


export {
    router
}