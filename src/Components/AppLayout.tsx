import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import NavBar from "./NavBar"


export const AppLayout = () => {
  return (
    <>
    <header>
      <NavBar />
    </header>
    <main className="">
      <Outlet />
    </main>
    <footer>
        <Footer />
    </footer>
    </>
  )
}

