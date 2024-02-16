import React from 'react'

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
        }
    }

  return (
    <footer id="footer" style={styles.footerStyle}>
        <div className='d-flex justify-content-between' style={styles.containerStyle}>
            This is text
        </div>
    </footer>
  )
}
