import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Fragment>
      <div id="sidebar" className="bg-white">
      <h1 className="text-black">React Router Contacts</h1>

        <nav className="">
        <Link to="index">Linkear</Link>
        <Link to="index">Moon</Link>
        </nav>
      
      </div>

      <div id="detail" className="bg-body-tertiary">
        <Outlet />
      </div>
    </Fragment>
  );
}
