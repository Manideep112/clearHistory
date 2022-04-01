import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem/index'

class TotalHistory extends Component {
  state = {input: '', list: 'nolist'}

  userValue = event => {
    const inputText = event.target.value
    this.setState({input: inputText})
  }

  delete = (list, id) => {
    const filteredList = list.filter(eachhistory => eachhistory.id !== id)
    console.log(filteredList)
  }

  render() {
    const {historyList} = this.props
    const {input} = this.state

    const filteredList = historyList.filter(eachhistory =>
      eachhistory.title.toLowerCase().includes(input.toLowerCase()),
    )

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
          {filteredList.map(eachhistory => (
            <HistoryItem
              values={eachhistory}
              key={eachhistory.id}
              list={historyList}
              deleteFun={this.delete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default TotalHistory
