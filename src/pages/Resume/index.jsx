import React from 'react'

const Resume = () => {

    function downloadImage() {
        const imageElement = document.getElementById('resume');
        const imageUrl = imageElement.getAttribute('src');

        const downloadLink = document.createElement('a');
        downloadLink.href = imageUrl;
        downloadLink.download = '#';

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return (
        <body>
            <nav class="navbar navbar-expand-lg  sticky-top">
                <div class="container">
                    <a class="navbar-brand" href="index.html"
                    ><img src="logo.png" alt="Main-Logo" class="navbar-brand" width="60px" style="cursor: pointer;"
                        /></a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-center" id="navbarNav">
                        <ul class="navbar-nav  ms-auto sticky-top my-3">
                            <li class="nav-item mx-2">
                                <a class="nav-link" aria-current="page" href="index.html" style="cursor: pointer;">Projects</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link active" style="font-weight: 500;color: #6c63ff;" href="#"><i class="fa-solid fa-right-long fa-fade mx-2"></i>Resume</a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link" href="Aboutme.html" style="cursor: pointer;">About me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="container pt-5 w-50 h-auto">
                <button id="resume-download" class="btn btn-sm float-end mb-2 btn-primary" onClick={downloadImage}>
                    <span class="fa fa-download me-1"></span> Download Resume
                </button>
                <img src="#" alt="resume" id="resume" class="img-fluid img-thumbnail" />
            </div>

            <div class="container pt-5">
                <hr />
            </div>

            <footer class="text-dark pt-lg-0 pb-lg-1 pt-sm-3 pb-sm-2">
                <div
                    class="container-fluid text-center text-md-center text-sm-center pt-4"
                >
                    <p class="footer-title pt-2">
                        Designed and Developed by <span>Manip Poudel </span>
                    </p>
                </div>
                <div class="container mb-3 text-center">
                    <a href="#" target="_blank">
                        <i class="fa-solid fa-envelope fa-fade  fa-lg" style="cursor: pointer; color: black;"></i></a>


                    &nbsp; &nbsp;
                    <a
                        href="#"
                        target="_blank"
                    >
                        <i class="fa-brands fa-linkedin  fa-lg" style="cursor: pointer;"></i>
                    </a>
                </div>
            </footer>
        </body>
    )
}

export default Resume
