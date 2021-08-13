import React, { useEffect, useState} from 'react'
import UserCommentsPosts from './UserCommentsPosts'

export default function UserDetails(props) {
    let value = []
    let [userDetails, setUserDetails] = useState('')
    let [toggle2, settoggle2] = useState(false)
    let [ID, setID] = useState(0)

    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/" + props.userId);
      value = await response.json();
      console.log("data --- ", value)
      setUserDetails(value)
    }
    
    useEffect(() => {    
        console.log("in ud", props.userId)
        getData();
      },[]);
    
      const showUserCommentsPosts = (id) => {
        setID(props.userId)
        console.log("in onclick", id)
        settoggle2(true)
      }
  
      const toggleCommentsPosts = () => {
        settoggle2(false)
      }

    return(
        
       <div className="container">
         {
            userDetails?<form className="needs-validation" noValidate>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip01">Name</label>
            <input type="text" className="form-control" id="validationTooltip01" placeholder="name" defaultValue={userDetails.name}   readonly/> 
            <div className="valid-tooltip">
              Looks good!
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip02">User Name</label>
            <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" defaultValue={userDetails.username} readonly  /> 
            <div className="valid-tooltip">
              Looks good!
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltipUsername">Email Address</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
              </div>
              <input type="text" className="form-control" id="validationTooltipUsername" defaultValue={userDetails.email} placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" readonly  />
              <div className="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">

        <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip03">Street</label>
            {/* <label>{userDetails.address.street}</label>  */}
            <input type="text" defaultValue={userDetails.address["street"]} className="form-control" id="validationTooltip03" placeholder="City" readonly  />
            <div className="invalid-tooltip">
              Please provide a valid city.
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip03">Suite</label>
            <input type="text" className="form-control" defaultValue={userDetails.address.suite} id="validationTooltip03" placeholder="City" readonly  />
            <div className="invalid-tooltip">
              Please provide a valid city.
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip03">City</label>
            <input type="text" className="form-control" defaultValue={userDetails.address.city} id="validationTooltip03" placeholder="City" readonly  />
            <div className="invalid-tooltip">
              Please provide a valid city.
            </div>
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip03">Zip Code</label>
            <input type="text" className="form-control" defaultValue={userDetails.address.zipcode} id="validationTooltip03" placeholder="City" readonly  />
            <div className="invalid-tooltip">
              Please provide a valid city.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip04">Phnoe Number</label>
            <input defaultValue={userDetails.phone} type="text" className="form-control" id="validationTooltip04" placeholder="State" readonly  />
            <div className="invalid-tooltip">
              Please provide a valid state.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip05">Website</label>
            <input type="text" defaultValue={userDetails.website} className="form-control" id="validationTooltip05" placeholder="Zip" readonly  />
            <div className="invalid-tooltip">
              Please provide a valid zip.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip05">Company</label>
            <input type="text" defaultValue={userDetails.company.name} className="form-control" id="validationTooltip05" placeholder="Zip" readonly  />
            <div className="invalid-tooltip">
              Please provide a valid zip.
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip05">Catch Phrase</label>
            <input type="text" defaultValue={userDetails.company.name} className="form-control" id="validationTooltip05" placeholder="Zip" readonly  />
            <div className="invalid-tooltip">
              Please provide a valid zip.
            </div>
          </div>
        </div>
        
        <button className="btn btn-primary" onClick={props.handleShowUser} type="submit">Go Back</button>
      </form>:null } 
   
          {<UserCommentsPosts userId={props.userId} handleShowUserDetails={toggleCommentsPosts} />}
    </div>
    );
}
