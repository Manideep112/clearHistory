import './index.css'

const HistoryItem = props => {
  const {values, list, deleteFun} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = values

  const deleteHistoryItem = () => {
    deleteFun(list, id)
  }

  return (
    <li className="list-style">
      <div className="details-container">
        <p className="paragraph">{timeAccessed}</p>
        <img src={logoUrl} alt="logoUrl" className="website-image" />
        <p className="paragraph">
          {title} <span className="span">{domainUrl}</span>
        </p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        className="delete-image"
        onClick={deleteHistoryItem}
      />
    </li>
  )
}

export default HistoryItem
