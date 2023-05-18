import { useState } from "react";

const App = () => {
  const [ left,setLeft ] = useState(0)
  const [ right,setRight ] = useState(0)
  const [ allClicks,setAllClicks ] = useState([])
  const [ total,setTotal ] = useState(0)

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + left)
  }

  return(
    <div>
      {left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      {total}
    </div>
  )
}

export default App