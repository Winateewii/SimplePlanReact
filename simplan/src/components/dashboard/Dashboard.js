import React,{ Component } from 'react'
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'

class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard container">
            <div className="dashboard container">
                <div className="row">
                    {/* //for project  */}
                    <div class="col s12 m6">
                        <ProjectList/>
                    </div>  
                    {/* //for notification */}
                    <div class="col s12 m5 offset-m1">
                        <Notification/>
                    </div>
                        
                </div>
            </div>
            </div>
        )
    }
}

export default Dashboard