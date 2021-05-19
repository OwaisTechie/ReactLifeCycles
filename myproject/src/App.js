import './App.css';
import React from 'react'
import {connect} from 'react-redux'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      count:0,
      // data:[]
    }
    console.log('constructor')
  }
  
  // static getDerivedStateFromProps(){
  //   console.log('getDrivedStateFromProps')
  //   return{
  //     count: 5
  //   }
  // }
  
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps ==>",state)
    return null
  }
  
  // componentDidMount(){
  //   console.log('componentDidMount')
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  // .then(response => response.json())
  // .then(data => {
  //   this.setState({
  //     data:data
  //   })
  // } )
  // .catch(err => console.log(err))
  // }

  render(){
    console.log('render...')
    console.log('Redux data ==>',this.props)
    return (
      <div style={{textAlign:'center'}}>
        {/* this code for componentDidmount */}
        {/* <h1>React LifeCycle</h1>
        {this.state.data.map((v,i)=>{
          return <h4>{v.title}</h4>
        })} */}
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({count:this.state.count+1}) }>Increment</button>
        <button onClick={() => this.setState({count:this.state.count - 1}) }>Decrement</button>
        <br/>
        <button onClick={() => this.props.set_data()}>Set Data</button>
      </div>
      
    )
  }
}

const mapStateToProps= (state) => ({
  // name: state.name,
  // email: state.email
  username:state.auth.username,
  email:state.auth.email,
  App: state.app.app_name

})

const mapDispatchToProps = (dispatch) => ({
  set_data: () => console.log("Hello")
})

export default connect(mapStateToProps,mapDispatchToProps) (App);
