import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GOOGLE_FORM_URL } from './form-url';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        remarks: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formUrl = GOOGLE_FORM_URL;
        const formDataToSubmit = new FormData();
        formDataToSubmit.append("entry.1591218981", formData.name);
        formDataToSubmit.append("entry.975535354", formData.email);
        formDataToSubmit.append("entry.1119289649", formData.remarks);

        try {
            await fetch(formUrl, {
                method: 'POST',
                body: formDataToSubmit,
                mode: 'no-cors'
            }).then(() => {
                setFormData({
                    name: '',
                    email: '',
                    remarks: ''
                });
            }).catch((e) => console.error(e))
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/logo.webp" alt="upward" width="40px" style={{ cursor: 'pointer' }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav ms-auto sticky-top my-3">
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
                                <Link className="nav-link" to="/about" style={{ fontWeight: 500, color: '#6c63ff' }}>
                                    <i className="fa-solid fa-right-long fa-fade mx-2"></i> About me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact" style={{ fontWeight: 500, color: '#6c63ff' }}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="remarks" className="form-label">Remarks:</label>
                        <textarea
                            className="form-control"
                            id="remarks"
                            name="remarks"
                            value={formData.remarks}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
