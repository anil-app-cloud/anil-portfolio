import './index.css'

const TabItem = props => {
  const {eachTab, activetabId, changeActiveTab} = props
  const activeClass = activetabId === eachTab.tabId ? 'active-tab' : ''

  const changeTab = () => {
    changeActiveTab(eachTab.tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`button-itme ${activeClass}`}
        onClick={changeTab}
      >
        <p>{eachTab.displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
