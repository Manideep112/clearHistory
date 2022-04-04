import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem/index'

class TotalHistory extends Component {
  state = {input: '', list: ''}

  userValue = event => {
    const inputText = event.target.value
    this.setState({input: inputText})
  }

  delete = id => {
    const {historyList} = this.props
    const {list} = this.state
    let filteredList

    if (list === '') {
      filteredList = historyList.filter(eachhistory => eachhistory.id !== id)
    } else {
      filteredList = list.filter(eachhistory => eachhistory.id !== id)
    }
    this.setState({list: filteredList})
  }

  render() {
    const {historyList} = this.props
    const {input} = this.state
    const {list} = this.state
    let filteredList

    if (list === '') {
      filteredList = historyList.filter(eachhistory =>
        eachhistory.title.toLowerCase().includes(input.toLowerCase()),
      )
    } else {
      filteredList = list.filter(eachhistory =>
        eachhistory.title.toLowerCase().includes(input.toLowerCase()),
      )
    }

    const filteredLen = filteredList.length
    return (
      <div className="bg-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo-img"
          />
          <div className="totalSearch">
            <div className="search-logo-container">
              <img
                className="img-size"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              className="input-container"
              type="search"
              placeholder="Search History"
              onChange={this.userValue}
            />
          </div>
        </div>

        <ul className="list-container">
          {filteredLen > 0 ? (
            filteredList.map(eachhistory => (
              <HistoryItem
                values={eachhistory}
                key={eachhistory.id}
                deleteFun={this.delete}
              />
            ))
          ) : (
            <div className="nohistory">
              <p className="nohistory-message">There is no history to show</p>
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default TotalHistory
