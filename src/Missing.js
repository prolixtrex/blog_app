import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
    return (
        <main>
            <h2>Page not found</h2>
            <p>The post you are looking for is not found</p>
            <p>Please Visit our <Link to="/">home page</Link></p>
        </main>
    )
}

export default Missing