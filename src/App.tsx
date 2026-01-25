import { RouterProvider } from "react-router-dom"
import { router } from "./routes/routes"
import CustomCursor from "./Components/CustomCursor"


function App() {
  return (
    <>
    <CustomCursor />
   <RouterProvider router={router}/>
    </>
  )
}

export default App