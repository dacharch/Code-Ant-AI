import React from 'react'
import "./RepoBoxes.css"


const RepoBoxes = ({ users }) => {
  return (
    <>
      {
        users.map((item) => (

          <div className='repos-boxses'>
            <div className='top-boxes'>
              <div>
                <span className='top-text'>{item.name}</span>
              </div>
              <div>
                <span className='access-text'>{item.access}</span>
              </div>

            </div>
            <div className='bottom-boxes'>
              <div>
                <span> {item.language}</span>
              </div>
              <div>
                <span>{item.storage}</span>
              </div>
              <div>
                <span>{item.updation_date}</span>
              </div>
            </div>

          </div>


        ))
      }
    </>

  )
}

export default RepoBoxes