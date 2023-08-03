import React from 'react'

function Header({toggle,changeHeader}) {
  return (
    <div className="header">
        <h2 className={`${changeHeader && 'headerNote'}`}> Notes</h2>
        <button onClick={()=>toggle(true)} className="toggle" type="submit">Toggle Mode</button>
      </div>
  )
}

export default Header