import { Component } from 'react'
import './coloredBoxList.css'

class coloredBoxList extends Component {
    render () {
        return (
            <div className='coloredBoxContainer'>
                {this.props.children} 
            </div>
        )
    }
}

export default coloredBoxList
