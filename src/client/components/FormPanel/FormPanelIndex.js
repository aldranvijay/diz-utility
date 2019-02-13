import React, { Component }  from 'react';
import SignPanel  from './SignPanel.js';
import ViewPanel  from './ViewPanel.js';
import SignAPIPanel  from './SignAPIPanel.js';
import GroupPanel  from './GroupPanel.js';
import UserPanel  from './UserPanel.js';
import AppsPanel  from './AppsPanel.js';
import SettingPanel  from './SettingPanel.js';
import HelpPanel  from './HelpPanel.js';


class FormPanelIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            formPanel: this.props.raw.formPanel
        };
        //this.renderSwitch.bind(this,"sign");
     }

     renderSwitch(param){
        switch(param) {
            case 'sign':
            return <SignPanel raw={this.state} />;
            case 'view':
            return <ViewPanel raw={this.state} />;
            case 'sign_apis':
            return <SignAPIPanel raw={this.state} />;
            case 'group':
            return <GroupPanel raw={this.state} />;
            case 'user':
            return <UserPanel raw={this.state} />;
            case 'apps':
            return <AppsPanel raw={this.state} />;
            case 'setting':
            return <SettingPanel raw={this.state} />;
            case 'help':
            return <HelpPanel raw={this.state} />;
            default:
            return '';
        }
    }

    render() {
        return (
           <div>
               {this.renderSwitch(this.state.formPanel)}
           </div>    
        );
    }
}
export default FormPanelIndex;