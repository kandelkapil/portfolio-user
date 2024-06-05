import React, { useEffect,useRef,useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
const texts = ['DevOps • Development • Backend', 'AWS • Kubernetes • GCP'];

const Home = () => {
    const containerRef = useRef('');
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useGSAP(
        () => {
            gsap.from('#header', {
                duration: 2,
                x: '-100%',
                ease: 'easeinout'
            })

            gsap.from('#projects_list', {
                duration: 2,
                delay: 1,
                y: '100%',
                ease: 'easeinout'
            })

            gsap.from('#animate_title', {
                duration: 2,
                delay: 2,
                opacity: 0,
                ease: 'easeinout'
            })

            gsap.from('#animate_logo', {
                duration: 2,
                delay: 0.6,
                opacity: 0,
                x: '100%',

                ease: "back.out(1.7)"
            })
        },
        { scope: containerRef }
    );

    const scrollTopHandler = () => {
        if (document.documentElement.scrollTop > 500) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    const scrollHandler = () => {
        const buttonTop = document.getElementById('btntotop');
        if (document.documentElement.scrollTop > 500) {
            buttonTop.style.display = "block";
        }
        else {
            buttonTop.style.display = "none";
        }
    }

    useEffect(() => {
        const text = texts?.[index];
        const textLength = text?.length;
    
        let timeoutId;
    
        const autoWrite = () => {
          if (!isDeleting) {
            setLetterIndex((prevIndex) => prevIndex + 1);
          } else {
            setLetterIndex((prevIndex) => prevIndex - 1);
          }
    
          const nextText = isDeleting
            ? text.slice(0, letterIndex)
            : text.slice(0, letterIndex + 1);
    
          setCurrentText(nextText);
    
          if (isDeleting && letterIndex === 0) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }
    
          if ((!isDeleting && letterIndex === textLength) || (isDeleting && letterIndex === 0)) {
            setIsDeleting(!isDeleting);
          }
        };
    
        timeoutId = setTimeout(autoWrite, 100);
    
        return () => clearTimeout(timeoutId);
      }, [index, letterIndex, isDeleting]);

    return (
        <body onScroll={scrollHandler} ref={containerRef}>
            <span id="btntotop" style={{ display: 'block' }} onClick={scrollTopHandler}>
                <i style={{ cursor: 'pointer' }} className=" bi bi-arrow-up"></i>
            </span>
            <nav className="navbar navbar-expand-lg  sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                    <img src="/logo.webp" alt="upward" width="40px" style={{ cursor: 'pointer' }} />       
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav  ms-auto sticky-top my-3">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="/">
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="/resume">
                                    Resume
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/about" style={{ fontWweight: 500, color: '#6c63ff' }}>
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

            <header id="header">
                <div className="container pt-4">
                    <div className="Subtitle">
                        <p>Namaste!
                            <span id="wave-hand">&#128591;</span>
                        </p>
                    </div>
                    <div className="top">
                        <h1 className="lh-base">
                            I'm
                            <span>
                                <a href="https://www.linkedin.com/in/manishux/" target="_blank" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                    {' '} Manip Poudel, {' '}
                                </a>
                            </span>
                            a DevOps Engineer <br />currently deploying
                            at Wesionary.team
                        </h1>
                    </div>
                    <div className="nickname pt-0">
                        <p id="main-text" style={{minHeight:'40px'}}>
                            {currentText}
                        </p>
                    </div>
                </div>
            </header><hr className="mt-2 opacity-0" />


            <div id="animate_title" className="container pt-lg-4">
                <h5>
                    Selected Projects
                </h5>
            </div>

            <main id="projects_list">
                <div className="container pt-3">
                    <div className="row row-cols-lg-2 row-cols-sm-1 row-cols-md-1 row-gap-3">

                        <div className="col-sm-12">
                            <a href="VisaMate.html" target="_self" id="visamates" className="project-link-2">
                                <img src="manip.JPG" alt="thumbnail" className=" img1 img-fluid" style={{ cursor: 'pointer' }} />
                                <h5 className="title-2" style={{ cursor: 'pointer' }}>Amazon Web Service</h5>
                                <p className="description-2">
                                    Making deployement easy for Amazon company and chief deployment officer
                                    for Amazon Company.
                                </p>
                            </a>
                        </div>

                        <div className="col-sm-12">
                            <a href="breath.html" target="_self" className="project-link-2">
                                <img src="manip.JPG" alt="thumbnail" className=" img4 img-fluid" style={{ cursor: 'pointer' }} />
                                <h5 className="title-2" style={{ cursor: 'pointer' }}>Google</h5>
                                <p className="description-2">
                                    Making deployement easy for Amazon company and chief deployment officer
                                    for Amazon Company.
                                </p>
                            </a>
                        </div>
                    </div>

                    <div className="container mt-lg-2 mt-0 pt-4 px-0">
                        <div className="row row-cols-lg-2 row-cols-sm-1 row-cols-md-1 row-gap-3">
                            <div className="col-sm-12">
                                <a href="Intern.html" target="_self" className="project-link-3">
                                    <img src="manip.JPG" alt="thumbnail" className="img-thrd img-fluid" style={{ cursor: 'pointer' }} />
                                    <h5 className="title-3" style={{ cursor: 'pointer' }}>Wesionary Team</h5>
                                    <p className="description-3">
                                        Making deployement easy for Subba sir and chief deployment officer
                                        for Wesionary Team.
                                    </p>
                                </a>
                            </div>

                            <div className="col-sm-12">
                                <a href="case-1.html" target="_self" className="project-link-1">
                                    <img src="manip.JPG" alt="thumbnail" className="img-scnd img-fluid" style={{ cursor: 'pointer' }} />
                                    <h5 className="title-1" style={{ cursor: 'pointer' }}>NAXA</h5>
                                    <p className="description-1">
                                        Making naxa for all the companies around the world and
                                        earning reputation in the industry.
                                    </p>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </main>


            <div className="container pt-3 opacity-50">
                <hr />
            </div>

            <footer className="text-dark pt-lg-0 pb-lg-1 pt-sm-3 pb-sm-2">
                <div className="container-fluid text-center">
                    <p className="footer-title pt-1">
                        Designed and Developed by
                        <span>Manip Poudel
                        </span>
                    </p>
                </div>
                <div className="container mb-3 text-center">
                    <a href="mailto:manippoudel@gmail.com" target="_blank" style={{ textDecoration: 'none' }}>
                        <span>
                            <i className="fa fa-envelope fa-fade fa-lg" style={{ cursor: 'pointer', color: 'black' }}></i>
                        </span>
                    </a>


                    &nbsp; &nbsp;

                    <a href="#" target="_blank">
                        <span>
                            <i className="fa-brands fa-linkedin  fa-lg" style={{ cursor: 'pointer' }}></i>
                        </span>
                    </a>
                </div>
            </footer>
        </body>
    )
}

export default Home

