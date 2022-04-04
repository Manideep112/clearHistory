import './index.css'

const HistoryItem = props => {
  const {values, deleteFun} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = values
  console.log(id)
  const deleteHistoryItem = () => {
    deleteFun(id)
  }
  return (
    <li className="list-style">
      <div className="details-container">
        <p className="paragraph">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="website-image" />
        <div className="paragraph-container">
          <p className="paragraph">{title}</p>
          <p className="span">{domainUrl}</p>
        </div>
      </div>

      <button className="button" type="button" testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
          onClick={deleteHistoryItem}
        />
      </button>
    </li>
  )
}

export default HistoryItem
