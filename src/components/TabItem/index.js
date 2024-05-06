import './index.css'

const TabItem = props => {
  const {tabDetails, pushRelevantProjects, isActiveTab} = props
  const {displayText, tabId} = tabDetails
  const activeTabClassName = isActiveTab ? 'active-tab-btn' : ''
  const projects = () => {
    pushRelevantProjects(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        onClick={projects}
        type="button"
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
