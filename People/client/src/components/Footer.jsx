import React, { useState } from 'react';
import styled from 'styled-components';

// Dummy data for footer
const dummyFooterData = {
    // logoLink: "src/assets/images/institute.jpg",
    logoText: "PUNE DISTRICT",
    // logoSubtitle: "Empowering Academic Excellence",
    navLinks: [
        { title: "Home", link: "/", openInNewTab: false },
        { title: "Visit", link: "https://maps.app.goo.gl/w8LqcnU38zhuG3Fo7", openInNewTab: true },
        { title: "About Us", link: "/aboutus", openInNewTab: false },
        // { title: "Careers", link: "http://cms.sinhgad.edu/sinhgad-institutes/careers.aspx", openInNewTab: true }
    ],
    socialLinks: [
        { title: "Facebook", link: "https://www.facebook.com/SinhgadInstitutes.STES" },
        { title: "Twitter", link: "https://twitter.com/SinhgadCollege" },
        { title: "Instagram", link: "https://www.instagram.com/sinhgadinstitutes/" }
    ]
};

// React component for the footer
const Footer = ({ isAuthenticated }) => {
    const [visitClicked, setVisitClicked] = useState(false);

    const handleVisitClick = () => {
        setVisitClicked(true);
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <FooterContainer className=''>
            <div className="container-fluid">
                <div className="container">
                    {/* Footer logo */}
                    <FooterLogo>
                        <div className="row footer-logo">
                            <div className="col col-xl-6 text-center text-xl-left">
                                <h1 className="h3 d-inline-block">
                                    <a href={dummyFooterData.logoLink} target="_self" className="text-dark">
                                        {dummyFooterData.logoText}
                                        <span className="d-block h6">{dummyFooterData.logoSubtitle}</span>
                                    </a>
                                </h1>
                            </div>
                        </div>
                    </FooterLogo>

                    {/* Footer navigation */}
                    <FooterNav>
                        <div className="row footer-links">
                            <div className="col-12 col-xl-8 footer-links-lc">
                                <nav className="nav justify-content-center justify-content-xl-start">
                                    {dummyFooterData.navLinks.map((link, index) => (
                                        <a key={index} target={link.openInNewTab ? "_blank" : "_self"} href={link.link}className="nav-link">{link.title}</a>
                                    ))}
                                </nav>
                            </div>

                            <div className="col-12 col-xl-4 footer-links-rc">
                                <nav className="nav justify-content-center justify-content-xl-start">
                                    {dummyFooterData.socialLinks.map((social, index) => (
                                        <a key={index} target="_blank" href={social.link} className="nav-link">{social.title}</a>
                                    ))}
                                    <a href="javascript:;" className="nav-link">Crafted By <strong>SKNCOE E&TC TE Student </strong></a>
                                </nav>
                            </div>
                        </div>
                    </FooterNav>
                </div>
            </div>
            {/* Copyright footer */}
            <Copyright>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            &copy; {new Date().getFullYear()} Sinhgad Institutes. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;

// Styled components for the footer elements
const FooterContainer = styled.footer`
    background-color: #eff1f4;
    padding: 20px 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: block;
`;

const FooterLogo = styled.div`
    h1 {
        color: #333;
        font-size: 18px;
        margin-bottom: 10px;
    }

    span {
        color: #666;
        font-size: 12px;
        display: block;
    }
`;

const FooterNav = styled.nav`
    .nav-link {
        color: #333;
        text-decoration: none;
        margin-right: 20px;
        transition: color 0.3s ease;
    }

    .nav-link:hover {
        color: #007bff;
    }
`;

const Copyright = styled.div`
    background-color: #333;
    color: #fff;
    padding: 10px 0;
`;
