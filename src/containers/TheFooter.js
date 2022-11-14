import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={true}>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">QUICKSAFE</a>
        <span className="ml-1">&copy; 2021 .</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Produit par</span>
        <a href="/" target="_blank" rel="noopener noreferrer">Daniel GAMADO</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
