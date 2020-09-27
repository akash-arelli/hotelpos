import React from 'react'
import './Dashboard.css'
import Navbar from '../Nav/Navbar'

export default function Dashboard() {
    return (
        <div>
            <Navbar />
            <div id="body">
        <div className="dashboard-section">
        <div className="dashboard-content">
            <div className="content-div">
            <h2>Welcome  </h2> 
            
            <h5>Services Offered</h5>
            
            <button className="cta">Billing </button>
                 
            <button className="cta admin">Ledger </button>
            <button className="cta admin">Order </button>
            
           </div>
           <div>
           <button className="logout">Logout  </button>
           
         </div>
            </div>
        
      
      </div>  
           
      
            </div>
        </div>
    )
}
