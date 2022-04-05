import React,{Component} from "react";

class Form extends Component{
    initialState = {
        name:'',
        job:'',
    }
    state = this.initialState
    handleChange = (event)=>{
        const {name,value} = event.target;
        this.setState({
            [name]:value,
        })
    }
    submitForm = ()=>{
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
    }
    //label与input搭配方便了屏幕阅读器的读取，且可通过点击label标签来激活input
    //label在html中有for属性（for属性值必须为关联元素的id，将关联元素放在label内可以不加id）
    //label在JSX中的for属性为htmlFor
    render() {
        const { name, job } = this.state;
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input type="text"
                       name = "name"
                       id = "name"
                       value={name}
                       onChange={this.handleChange}
                />
                <label htmlFor="job">Job</label>
                <input
                       type="text"
                       name="job"
                       id="job"
                       value={job}
                       onChange={this.handleChange}
                />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;