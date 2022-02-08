import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'

import { useEffect } from "react";
import NavBar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
    <NavBar />
    <div className="container">
      <div className="row">
        <div className="col">
          1 of 1
        </div>
      </div>
    <div className="row">
      <div className="col-11">
        <div className="card">
          <div className="card-body">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
  </div>
</div>
   
    </>
  )
}

export default MyApp
