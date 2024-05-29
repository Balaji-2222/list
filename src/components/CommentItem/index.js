import './index.css'

const CommentItem = props => {
  const {eachItem, likeColor, deleteListItem} = props
  const {name, comment, color, id, isFavourite} = eachItem
  const changeColor = () => {
    likeColor(id)
  }
  const deleteItem = () => {
    deleteListItem(id)
  }
  const image = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const paragraph = isFavourite ? 'blueColor' : 'whiteColor'

  return (
    <li className="listItem">
      <div className="besideContainer">
        <h1 className={color}>{name[0]}</h1>
        <div className="downContainer">
          <h1 className="nameHeading">{name}</h1>
          <p className="paraHeading">{comment}</p>
        </div>
      </div>
      <div className="side">
        <div className="sideButton">
          <div>
            <button className="button1" type="button" onClick={changeColor}>
              <img src={image} alt="like" />
            </button>
          </div>
          <h1 className={paragraph}>Like</h1>
        </div>
        <div className="deleteButton">
          <button
            className="button2"
            type="button"
            onClick={deleteItem}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
