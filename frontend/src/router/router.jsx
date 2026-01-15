import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
        ,
        children: [
            {
                index: true,
                element: <Home />
            }, {
                path: "project"
                ,
                element: <ProjectDetails />
            }
        ]
    }
])