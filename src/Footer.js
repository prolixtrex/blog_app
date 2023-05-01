import React from 'react'

const Footer = () => {
    const today = new Date();
    return (
        <footer className='footer'>
            copyright &copy; {today.getFullYear()}
        </footer>
    )
}

export default Footer