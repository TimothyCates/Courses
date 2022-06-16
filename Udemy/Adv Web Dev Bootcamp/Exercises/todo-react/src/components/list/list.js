import "./list.css"
const list = ({items}) => {
  return (
    <ol>
    {items.map(test => {
      return <li>{test}</li>
    })}
    </ol>
  )
}

export default list
