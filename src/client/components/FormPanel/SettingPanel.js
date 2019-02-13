import React, { Component }  from 'react';


class SettingPanel extends Component{
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
export default SettingPanel;