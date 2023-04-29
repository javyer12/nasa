import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Fragment>
      <div id="sidebar" className="bg-white">
        <h2 className="m-2 text-center fs-2 universe">The Universe</h2>
        <small className="border border-top"></small>
        <nav className="">
          <Link to="/">Daily Photo</Link>
          <Link to="index">Moon</Link>
          <Link to="index">Mars Photo</Link>
        </nav>

      </div>

      <div id="detail" className="bg-body-tertiary">
        <Outlet />
      </div>
    </Fragment>
  );
}


