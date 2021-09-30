const TabList = props => {
  const {e, changeActiveTab} = props
  const {displayText, tabId} = e
  const changer = event => {
    changeActiveTab(event.target.id)
  }
  return (
    <li>
      <button onClick={changer} id={tabId} type="button">
        {displayText}
      </button>
    </li>
  )
}
export default TabList
