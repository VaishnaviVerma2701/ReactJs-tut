import React from 'react'
import loading from './loading2.gif'
const  Spinner = () =>  {
 
    return (
      <div>
        <div className='text-center'>
            <img src={loading} alt="loading" />
        </div>
      </div>
    )
  }


export default Spinner
