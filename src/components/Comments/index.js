import {Component} from 'react'

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

    const {name, comment} = this.state
    const newList = {
      name,
      comment,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newList],
      name: '',
      comment: '',
    }))
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {list} = this.state

    return (
      <form className="bgContainer" onSubmit={this.changeBackground}>
        <div className="insideContainer">
          <div className="smallContainer">
            <h1 className="heading">Comments</h1>
            <p className="paragraph">Say something about 4.0 technologies</p>
            <input
              type="search"
              placeholder="Name"
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
          <p className="para">0</p>
          <p>Comments</p>
        </div>
        <ul>
          <CommentItem list={list} />
        </ul>
      </form>
    )
  }
}

export default Comments
