import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Information from "../Pages/Home/Features/Information/Information"
import Mobile from "../Pages/Home/Features/Mobile_app/Mobile"
import Home from "../Pages/Home/Home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        //   errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/information',
                element: <Information/>,
            },
            {
                path: '/mobile',
                element: <Mobile/>,
            },
            // {
            //     path: '/eduman',
            //     element: <Eduman />,
            // }
        ],
    },

])

export default router