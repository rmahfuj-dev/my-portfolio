import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import axios from "axios";


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
                path: `projects/:id`,
                loader: async ({ params }) => {
                    const { id } = params
                    const res = await axios.get(`http://localhost:3000/projects/${id}`)
                    return res.data

                },
                element: <ProjectDetails />
            }
        ]
    }
])