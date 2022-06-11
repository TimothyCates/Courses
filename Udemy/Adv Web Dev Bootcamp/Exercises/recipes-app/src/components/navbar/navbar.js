import { Component } from 'react'
import PropTypes from 'prop-types'
import "./navbar.css"

class navbar extends Component {
    static defaultProps = {
        title: "My Cool App",
        links: []
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(PropTypes.shape({
            src: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }))
    }
    
    

    render () {
        const title = (
            <a href='./'>{this.props.title}</a>
        )
        const navLinks = this.props.links.map((link, index) => (
            <li><a href={link.src}>{link.text}</a></li>
        ));

        return (
            <nav className="navbar">
            <span className="navbar-title">
                { title }
            </span>
                <ul>
                    {navLinks} 
                </ul>    
            </nav>
        )
    }
}

export default navbar
