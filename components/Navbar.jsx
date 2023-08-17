import { Link } from "react-router-dom/dist"

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-md">
          <Link to={"/projeto-eja"}>Projeto EJA</Link>
          <Link to={"/projeto-enem-max"}>Projeto Enem Max</Link>
        </div>
      </nav>
    </>
  )
}
