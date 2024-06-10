import React from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

const DescriptionPage = ({ handleClose, description }) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top">
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
                        <ul className="navbar-nav ms-auto sticky-top my-3">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="/">
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/resume">
                                    Resume
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/about" style={{ fontWeight: 500, color: '#6c63ff' }}>
                                    <i className="fa-solid fa-right-long fa-fade mx-2"></i> About me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" style={{ fontWeight: 500, color: '#6c63ff' }}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                <Modal show={true} size="xl" dialogClassName="modal-90w">
                    <Modal.Body>
                        <div className="row d-flex p-5">
                            <div className="col d-flex flex-column">
                                <div className="col-md-6">
                                    <img src={description?.image} alt="Description" className="img-fluid rounded" />
                                </div>
                                <div className="col-md-12 d-flex flex-column justify-content-center">
                                    <h1 className="mt-3 mt-md-0">{description?.title}</h1>
                                    <p className="lead">{description?.description}</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="">Summary</h3>
                                <ul>
                                    {
                                        description?.role?.map((role) => (
                                            <li>{role}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default DescriptionPage;
