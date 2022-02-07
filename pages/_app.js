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
    <div class="container">
      <div class="row">
        <div class="col">
          1 of 1
        </div>
      </div>
    <div class="row">
      <div class="col-11">
        <div class="card">
          <div class="card-body">
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
