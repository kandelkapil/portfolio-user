import React from 'react'
import { Link } from 'react-router-dom';
import { ABOUT_ME } from './About'

const About = () => {


    const handleTopScroll = () => {
        const scrollDuration = 300;
        const scrollHeight = window.scrollY;
        const scrollStep = Math.PI / (scrollDuration / 15);
        const cosParameter = scrollHeight / 2;

        let scrollCount = 0;
        let scrollMargin;
        requestAnimationFrame(function btntotop(timestamp) {
            if (scrollHeight !== 0) {
                scrollCount += 1;
                scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                window.scrollTo(0, (scrollHeight - scrollMargin));
                if (scrollCount >= Math.ceil(scrollDuration / 15)) {
                    return;
                }
                requestAnimationFrame(btntotop);
            }
        });
    }

    return (
        <body id="page-about">

            <button id="btntotop" onClick={handleTopScroll}>
                <img src="logo.webp" alt="upward" width="40px" style={{ cursor: 'pointer' }} />
            </button>


            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                    <img src="/logo.webp" alt="upward" width="40px" style={{ cursor: 'pointer' }} />       
                      </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav  ms-auto sticky-top my-3">
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/">
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/resume">
                                    Resume
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about" style={{ fontWweight: 500, color: '#6c63ff' }}>
                                    <i className="fa-solid fa-right-long fa-fade mx-2"></i> About me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" style={{ fontWweight: 500, color: '#6c63ff' }}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="my-image container pt-5">
                <div className="row row-cols-lg-2 row-cols-sm-1 row-cols-md-1 row-gap-lg-4 row-gap-md-3 row-gap-sm-3">
                    <div className="col-sm-1 h-100">
                        <img src="/manip.JPG" alt="myimage" className="w-100 h-75 object-fit-cover" />
                    </div>

                    <div className="col-sm-1">
                        <h2 className="title-aboutme pt-3" style={{ color: '#161515' }}>Hi there!</h2>
                        <div  dangerouslySetInnerHTML={{ __html: ABOUT_ME }} />
                    </div>
                </div>
            </div>

            <footer className="text-dark pt-lg-0 pb-lg-1 pt-sm-3 pb-sm-2">
                <div className="container-fluid text-center text-md-center text-sm-center pt-4">
                    <p className="footer-title pt-2">
                        Designed and Developed by
                        <span>Manip Poudel
                        </span>
                    </p>
                </div>
                <div className="container mb-3 text-center">
                    <a href="#">
                        <i className="fa-solid fa-envelope fa-fade  fa-lg" style={{ cursor: 'pointer', color: 'black' }}></i>
                    </a>


                    &nbsp; &nbsp;
                    <a href="#" target="_blank">
                        <i className="fa-brands fa-linkedin  fa-lg" style={{ cursor: 'pointer' }}></i>
                    </a>
                </div>
            </footer>
        </body>
    )
}

export default About


