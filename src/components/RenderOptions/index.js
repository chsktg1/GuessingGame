const RenderOptions = props => {
  const {e} = props

  const sendme = () => {
    const {sender} = props
    sender(e.id)
  }

  return (
    <li>
      <button type="button" onClick={sendme}>
        <img src={e.thumbnailUrl} style={{width: '10vw'}} alt="thumbnail" />
      </button>
    </li>
  )
}

export default RenderOptions
