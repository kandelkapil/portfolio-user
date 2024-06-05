import React from 'react'
import { Link } from 'react-router-dom';
import Summary from './summary.json';
import Experience from './experience.json';
import Projects from './projects.json'

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
            <div class="container">
                <h1>Manip Poudel</h1>
                <div class="contact">
                    <p>Chitwan, Nepal | <a href="mailto:manippoudel@gmail.com">manippoudel@gmail.com</a> | +977 9845807015</p>
                </div>

                <div class="section">
                    <h2>Summary</h2>
                    <ul>
                        {Summary?.map((i) => (<li>{i}</li>))}
                    </ul>
                </div>

                <div class="section">
                    <h2>Certification and Acknowledgement</h2>
                    <ul>
                        <li>AWS Certified Solutions Architect – Associate</li>
                        <li>HashiCorp Certified: Terraform Associate (003)</li>
                    </ul>
                </div>

                <div class="section">
                <h2>Professional Experience</h2>
                    {
                        Experience.experience.map((i) => (
                            <>
                                <h3>{i.company} ({i.duration})</h3>
                                <p>Position: {i.position} | {i.location}</p>
                                <ul>
                                    {i.responsibilities.map((responsibility) => (
                                        <li>{responsibility}</li>
                                    ))}
                                </ul>
                                <p>Environment: {i?.environment?.join(', ')}</p>
                            </>
                        ))
                    }
                </div>

                <div class="section">
                    <h2>Projects</h2>
                    {
                        Projects?.projects?.map((project, index) => (
                            <>
                                <h3>Project {index + 1}: {project.title}</h3>
                                <p>{project?.description}</p>
                                <p>Environment: {project.environment.join(', ')}</p>
                            </>
                        ))
                    }
                </div>

                <div class="section">
                    <h2>Education</h2>
                    <p>Bachelor’s in Computer Science, Information and Technology</p>
                    <p>Computer Science Information and Technology (CSITAN-Chitwan)</p>
                    <p>Former President (Nov 2019 – Oct 2020)</p>
                    <p>Former Executive Member (Nov 2018 – Nov 2019)</p>
                </div>
            </div>
        </body>
        // <body>
        //     <nav class="navbar navbar-expand-lg  sticky-top">
        //         <div class="container">
        //             <Link className="navbar-brand" to="/">
        //                 <img src="/logo.webp" alt="Main-Logo" class="navbar-brand" width="60px" style={{ cursor: 'pointer' }}
        //                 />
        //             </Link>
        //             <button
        //                 class="navbar-toggler"
        //                 type="button"
        //                 data-bs-toggle="collapse"
        //                 data-bs-target="#navbarNav"
        //                 aria-controls="navbarNav"
        //                 aria-expanded="false"
        //                 aria-label="Toggle navigation"
        //             >
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
        //             <div class="collapse navbar-collapse text-center" id="navbarNav">
        //                 <ul class="navbar-nav  ms-auto sticky-top my-3">
        //                 <li class="nav-item mx-2">
        //                     <Link className="nav-link" to="/">
        //                             Projects
        //                         </Link>
        //                     </li>
        //                     <li class="nav-item ">
        //                         <Link className="nav-link active" to="/resume">
        //                             Resume
        //                         </Link>
        //                     </li>
        //                     <li class="nav-item mx-2">
        //                     <Link className="nav-link" to="/about" style={{ fontWweight: 500, color: '#6c63ff' }}>
        //                             <i className="fa-solid fa-right-long fa-fade mx-2"></i> About me
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>

        //     <div class="container pt-5 w-50 h-auto">
        //         <button id="resume-download" class="btn btn-sm float-end mb-2 btn-primary" onClick={downloadImage}>
        //             <span class="fa fa-download me-1"></span> Download Resume
        //         </button>
        //         <img src="#" alt="resume" id="resume" class="img-fluid img-thumbnail" />
        //     </div>

        //     <div class="container pt-5">
        //         <hr />
        //     </div>

        //     <footer class="text-dark pt-lg-0 pb-lg-1 pt-sm-3 pb-sm-2">
        //         <div
        //             class="container-fluid text-center text-md-center text-sm-center pt-4"
        //         >
        //             <p class="footer-title pt-2">
        //                 Designed and Developed by <span>Manip Poudel </span>
        //             </p>
        //         </div>
        //         <div class="container mb-3 text-center">
        //             <a href="#" target="_blank">
        //                 <i class="fa-solid fa-envelope fa-fade  fa-lg" style={{ cursor: 'pointer', color: 'black' }} ></i></a>


        //             &nbsp; &nbsp;
        //             <a
        //                 href="#"
        //                 target="_blank"
        //             >
        //                 <i class="fa-brands fa-linkedin  fa-lg" style={{ cursor: 'pointer' }}></i>
        //             </a>
        //         </div>
        //     </footer>
        // </body>
    )
}

export default Resume

