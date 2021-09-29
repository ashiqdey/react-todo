import React from 'react'
import PropTypes from 'prop-types'

export const Footer = (props) => {
    return (
        <footer>
            This is footer | Copyright {props.copyright} {props.company}
        </footer>
    )
}

Footer.defaultProps = {
    copyright : 2020
}

Footer.propstypes = {
    copyright : PropTypes.string.isRequired,
    company : PropTypes.string.isRequired
}