import Link from 'next/link';

export default function NavBar() {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Covid Stats</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link href="/">
                        <a class="nav-link" aria-current="page">Home</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href="/">
                        <a class="nav-link" aria-current="page">Covid 19 stats</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href="/">
                        <a class="nav-link" aria-current="page">Flu stats</a>
                    </Link>
                </li>
            </ul>
          </div>
        </div>
    </nav>
    );
}