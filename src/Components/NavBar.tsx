import AnimatedButton from "./ui/AnimatedButton"


function NavBar() {
  return (
  <>
  <nav className="flex p-5 justify-between items-center">
    <div className="">Local:00:00</div>
    <div className="navLink">menu</div>
    <AnimatedButton onClick={() => console.log("Clicked!")}>
       LET'S TAAK
    </AnimatedButton>
  </nav>
  </>
  )
}

export default NavBar