import { createBrowserRouter } from "react-router-dom"
import { AppLayout } from "../Components/AppLayout"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ContactPage from "../pages/ContactPage"
import WorkPage from "../pages/WorkPage"


export const router= createBrowserRouter([
    {
        id:"Pages",
        Component:AppLayout,
        children:[
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/work",
                element: <WorkPage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
        ]
    }
])
