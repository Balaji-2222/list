const CommentItem = props => {
  const {list} = props
  const {name, comment} = list
  return (
    <li>
      <h1>{name}</h1>
      <p>{comment}</p>
    </li>
  )
}
export default CommentItem
