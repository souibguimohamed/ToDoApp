import React,{Component} from 'react';
class TableHeader extends Component{
    render(){
        return(
                <div className="row headerTab">
                    <div className="col col-lg-3 headItem">Task Name</div>
                    <div className="col col-lg-7 headItem">Description</div>
                    <div className="col col-lg-2 headItem">Options</div>
                </div>
        );
    }
}
export default TableHeader;