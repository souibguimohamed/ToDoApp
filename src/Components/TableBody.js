import React,{Component} from 'react';
class TableBody extends Component{
    render(){
        const contenu = this.props.contenu;
        const removeItem = this.props.removeItemAtt;
        const tableBody = contenu.map((item,index) => {
            return (
                <div key={index} className="row">
                    <div className="col col-lg-3 item">{item.nameTask}</div>
                    <div className="col col-lg-7 item">{item.description}</div>
                    <div className="col col-lg-2 item ">
                        <button onClick={()=>removeItem(index)}
                                className="btn btn-danger">Delete</button>
                    </div>
                </div>
                );
            });
        return(

                <div className="BodyTab">
                    {tableBody}
                </div>

        );
    }
}
export default TableBody;