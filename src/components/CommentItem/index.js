const CommentItem = props => {
  const {eachItem} = props
  const {name, comment} = eachItem
  return (
    <li>
      <h1>{name}</h1>
      <p>{comment}</p>
    </li>
  )
}
export default CommentItem
