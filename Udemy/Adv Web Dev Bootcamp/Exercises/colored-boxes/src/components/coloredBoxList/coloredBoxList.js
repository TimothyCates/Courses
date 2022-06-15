import { Component } from 'react'
import ColoredBox from '../coloredBox/coloredBox'
import './coloredBoxList.css'

class coloredBoxList extends Component {
    constructor(props){
        super(props)
        this.state = function(){
            let nstate = {};
            nstate.colors = []
            
            for (let i = 0; i < props.count; i++) {
                let ci = Math.floor(Math.random() * props.colors.length)
                nstate.colors.push(props.colors[ci])
            }
            return nstate
        }();

       setInterval(() => {
            let i = Math.floor(Math.random() * this.state.colors.length)
            this.setState((prev) => {
                prev.colors[i] = coloredBoxList.getRColor(props.colors)
                return prev;
            })
       }, 3000) 
    }

    static getRColor = (colors) => {
        let i = Math.floor(Math.random() * colors.length)
        return colors[i]
    }

    renderBoxes = (size) => {
        let boxes = []
        for (let i = 0; i < this.state.colors.length; i++) {
            boxes.push(
                <ColoredBox key={i} color={this.state.colors[i]} size={size}/>
            )
        }
        return boxes
    }


    render () {
        const {size} = this.props
        let boxes = this.renderBoxes(size)
        
        return (
            <div className='coloredBoxContainer'>
                {boxes} 
            </div>
        )
    }
}

export default coloredBoxList
