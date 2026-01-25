import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import NavBar from "./NavBar"

export const AppLayout = () => {
  return (
    
    <div className="bg-white text-black min-h-screen"> 
      <header>
        <NavBar />
      </header>
      
      
      <main className="relative z-10"> 
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}