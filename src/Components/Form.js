import React,{Component} from 'react';
class Form extends Component{
    constructor(props){
        super(props);   
        this.initialeState = {
            nameTask:'',
            description:''
        }
        this.state =this.initialeState;
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }
    submitForm = (e)=>{
        e.preventDefault();
        const handleSubmit = this.props.handleSubmit; 
        handleSubmit(this.state);
        this.setState (this.initialeState);
    }
    render(){
        const nameTask = this.state.nameTask;
        const description = this.state.description;
        //why when I define handleSubmit here I can't get access to it in the arrow function ??
        return(
            <form className="container TheForm">
                <label>Task Name : </label>
                <input 
                    type='text'
                    name ="nameTask"
                    value = {nameTask}
                    onChange = {this.handleChange} />
                <label>Description : </label>
                <input 
                    type='text'
                    name ="description"
                    value = {description}
                    onChange = {this.handleChange} />
                <button type="submit" onClick={this.submitForm}>Add to List</button>
            </form>
        )
    }
}
export default Form;