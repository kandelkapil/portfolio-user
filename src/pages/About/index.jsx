import React from 'react'

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
                <img src="Fixit/btn_back.png" alt="upward" width="40px" style={{ cursor: 'pointer' }} />
            </button>


            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <h2 id="animate_logo" className="fs-3 fw-bold">
                            PUT YOUR LOGO HERE
                        </h2>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav  ms-auto sticky-top my-3">
                            <li className="nav-item mx-2">
                                <a className="nav-link" aria-current="page" href="index.html" style={{ cursor: 'pointer' }}>Projects</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="resume.html" style={{ cursor: 'pointer' }}>Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="Aboutme.html" style={{ cursor: 'pointer',fontWweight: 500, color: '#6c63ff' }}>
                                    <i className="fa-solid fa-right-long fa-fade mx-2"></i>About me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="my-image container pt-5">
                <div className="row row-cols-lg-2 row-cols-sm-1 row-cols-md-1 row-gap-lg-4 row-gap-md-3 row-gap-sm-3">
                    <div className="col-sm-1 h-100">
                        <img src="put your image" alt="myimage" className="w-100 h-75 object-fit-cover" />
                    </div>

                    <div className="col-sm-1">
                        <h2 className="title-aboutme pt-3" style={{ color: '#161515'}}>Hi there!</h2>
                        <p className="description-aboutme pt-2 lh-4">
                            Write your description and life experiences here.
                        </p>
                        <p className="description-aboutme-2 pt-2 lh-4">
                            This is for paragraph change and making the para fit with your vertical image
                            beside this.
                        </p>
                        <p className="description-aboutme-3 pt-2 lh-4">
                            If you have any questions, please don't hesitate to contact me at
                            <span>manip.poudel@gmail.com</span>
                        </p>
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
                        <i className="fa-solid fa-envelope fa-fade  fa-lg" style= {{ cursor: 'pointer', color: 'black' }}></i>
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


