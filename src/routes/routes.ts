import { createBrowserRouter } from "react-router-dom"
import { AppLayout } from "../Components/AppLayout"
import HomePage from "../pages/HomePage"


export const router= createBrowserRouter([
    {
        id:"Pages",
        Component:AppLayout,
        children:[
            {
                path: "/",
                element: <HomePage />
            },
        ]
    }
])
