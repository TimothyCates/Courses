import { Component } from 'react'
import ColoredBoxList from './components/coloredBoxList/coloredBoxList'
import ColoredBox from "./components/coloredBox/coloredBox";

const colors = [
    "#212738",
    "#F97068",
    "#D1D646",
    "#57C4E5",
    "#B4A0E5",
    "#CA3CFF",
    "#1E1014",
    "#BCC4DB",
    "#C0A9B0",
    "#7880B5",
    "#6987C9",
    "#6BBAEC",
    "#1C7C54",
    "#73E2A7",
    "#DEF4C6",
    "#686963",
    "#DB5461",
    "#8AA29E",
    "#FFA3AF",
    "#FFD639",
    "#FBAF00",
    "#007CBE",
    "#00AF54",
    "#023C40",
    "#C3979F",
    "#0AD3FF",
    "#78FFD6",
]

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxCount: 60,
            boxSize: 150,
            boxes: [],
        }
        setInterval(() => {
            let i = Math.floor(Math.random() * this.state.boxCount)
            this.changeBoxColor(i, App.getRandColor());
        }, 1000)
    }

    static getRandColor = () => {
        let i = Math.floor(Math.random() * colors.length);
        return colors[i];
    }

    changeBoxColor = (boxI, color) => {
        this.setState((prev) => {
            let nBoxes = [...prev.boxes]
            nBoxes[boxI] = <ColoredBox
                color={color}
                size={this.state.boxSize}
            />
            return {
                ...prev,
                boxes: nBoxes
            }
        })
    }

    genBoxes = () => {
        let boxes = []
        for (let i = 0; i < this.state.boxCount; i++) {
            boxes.push(<ColoredBox
                color={App.getRandColor()}
                size={this.state.boxSize}
            />)
        }
        return boxes;
    }

    render() {
        if (this.state.boxes.length < this.state.boxCount) {
            this.setState((prev) => {
                return {
                    ...prev,
                    boxes: this.genBoxes()
                }
            })
        }

        return (
            <ColoredBoxList>
                {this.state.boxes}
            </ColoredBoxList>
        )
    }
}

export default App
