import { Link } from "react-router-dom/dist"

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-md">
          <Link to={"/projeto-eja"}><button>Projeto EJA</button></Link>
          <Link to={"/projeto-enem-max"}><button>Projeto Enem Max</button></Link>
        </div>
      </nav>
    </>
  )
}
