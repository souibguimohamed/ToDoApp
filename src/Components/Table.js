import React,{Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
class Table extends Component{
    render(){
        const contents = this.props.TableContent;
        const removeItem = this.props.removeItemAtt;
        return(
            <div className="container content">
                <TableHeader/>
                <TableBody contenu = {contents} 
                           removeItemAtt = {removeItem}/>
            </div>
        )
    }
}
export default Table;
