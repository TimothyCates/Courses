
const coloredBox = ({color, size}) => {
    const style = {
        backgroundColor: color,
        height: `${size}px`,
        width: `${size}px`,
    }
    return (
        <div style={style} className="coloredBox-box">
        </div>
    )
}

export default coloredBox
