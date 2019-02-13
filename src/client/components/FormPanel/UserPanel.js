import React, { Component }  from 'react';


class UserPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: false,
            formPanel: this.props.raw.formPanel
            };
     }

    render() {
        return (
           <div>
               {this.state.formPanel} Clicked
           </div>    
        );
    }
}
export default UserPanel;