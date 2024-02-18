import React from 'react'

import githubLogo from '../../icons/icons8-github-50.png'
import linkedinLogo from '../../icons/icons8-linkedin-60.png'
import './footer.css';

export default function Footer() {
    const styles = {
        footerStyle: {
            minWidth: "100%",
            minHeight: "40px",
            display: "flex",
            // flexDirection: "column",
            backgroundColor: "var(--darkbg)",
            position: "fixed",
            bottom: 0,
            backdropFilter: "blur(15px)"
        },
        containerStyle: {
            // border:"2px blue dashed",
            minWidth: "100%",
            color: "var(--mint)"
        },
        rowStyle: {
            // border: "2px red solid",
            minWidth: "100%"
        },
    }

  return (
    <footer id="footer" style={styles.footerStyle}>
        <div className='d-flex justify-content-between align-items-center' style={styles.containerStyle}>
        <span>©2024 Aaron Heath. <a href="https://github.com/Aaron-Heath/react-portfolio" rel="noopener noreferrer" target='_blank'><u>View the code</u></a>.</span>
            <div className='footer-icons'>
                <a href="https://github.com/Aaron-Heath" rel="noopener noreferrer" target='_blank'><img width="25" height="25" src={githubLogo} alt="github"/></a>
                <a href="https://www.linkedin.com/in/aaron-heath-2b0a5510b/" rel="noopener noreferrer" target='_blank'><img width="25" height="25" src={linkedinLogo} alt="github"/></a>
            </div>
        </div>
    </footer>
  )
}
