import { Component } from 'react'
import "./navbar.css"

class navbar extends Component {
    render () {
        const title = (
            <a href='./'>{this.props.title}</a>
        )
        const navLinks = this.props.links.map((link, index) => (
            <li><a href={link.src}>{link.text}</a></li>
        ));

        return (
            <nav className="navbar">
                { title }
                <ul>
                    {navLinks} 
                </ul>    
            </nav>
        )
    }
}

export default navbar
