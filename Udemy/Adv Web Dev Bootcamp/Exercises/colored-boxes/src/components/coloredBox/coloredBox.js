
const coloredBox = ({color, size}) => {
    const style = {
        backgroundColor: color,
        height: size,
        width: size,
    }
    return (
        <div style={style} className="coloredBox-box">
        </div>
    )
}

export default coloredBox
