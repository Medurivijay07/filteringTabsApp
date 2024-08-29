import './index.css'

const TabItem = props => {
  const {tabDetails, updateTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTabstyle = isActive ? 'active-tab-btn' : ''

  const onClickingTab = () => {
    updateTab(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabstyle}`}
        onClick={onClickingTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
