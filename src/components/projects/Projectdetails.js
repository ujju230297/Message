import React from 'react'

const Projectdetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
          <div className="card z-depth-0">
              <div className="card-content">
               <span className="card-title">Project Title </span>
                  <p>lorem ipsum esfghjj sergdhj esfhgv fgfhghjjk</p>
                  <div className="card-action grey lighten-4 grey-text">
                      <div>Posted by ------</div>
                      <div>2nd sep ,2am</div>
                  </div>

              </div>
              </div>  
        </div>
    )
}

export default Projectdetails;
