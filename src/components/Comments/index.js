import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {list: [], name: '', comment: '', count: 0}

  changeBackground = event => {
    event.preventDefault()

    const {name, comment, count} = this.state

    const v = Math.floor(Math.random() * 7)
    const color = initialContainerBackgroundClassNames[v]
    const newList = {
      name,
      comment,
      color,
      id: uuidv4(),

      isFavourite: false,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newList],
      name: '',
      comment: '',
      count: parseInt([prevState.count + 1]),
    }))
  }

  likeColor = id => {
    this.setState(prevState => ({
      list: prevState.list.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isFavourite: !eachItem.isFavourite}
        }
        return eachItem
      }),
    }))
  }

  deleteListItem = id => {
    const {list, count} = this.state

    const newList = list.filter(eachItem => eachItem.id !== id)
    this.setState({list: newList, count: count - 1})
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {list} = this.state
    const {count, id} = this.state
    return (
      <form className="bgContainer" onSubmit={this.changeBackground}>
        <div className="insideContainer">
          <div className="smallContainer">
            <h1 className="heading">Comments</h1>
            <p className="paragraph">Say something about 4.0 technologies</p>
            <input
              type="search"
              placeholder="Your Name"
              onChange={this.changeName}
            />
            <br />
            <textarea
              rows="3"
              cols="25"
              placeholder="Your Comment"
              onChange={this.changeComment}
            />
            <br />
            <button className="button" type="submit">
              Add Comment
            </button>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="separator" />
        <div className="container">
          <p className="para">{count}</p>
          <p>Comments</p>
        </div>
        <ul>
          {list.map(eachItem => (
            <CommentItem
              eachItem={eachItem}
              likeColor={this.likeColor}
              deleteListItem={this.deleteListItem}
              key={id}
            />
          ))}
        </ul>
      </form>
    )
  }
}

export default Comments
