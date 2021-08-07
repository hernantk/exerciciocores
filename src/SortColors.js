import './App.css';
import React from 'react';
const listColors = ["#CC66CC","#C6C","#CC33CC","#C3C","#993399","#939","#660066","#606",'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',]
class SortColors extends React.Component {


  constructor(props){
    super(props)

    this.onAddItem = props.onAddItem
    this.state = {
      color:''
   }
  }




  
  sortColors = () =>{
    let counter =0
    let colorSort = listColors[Math.floor(Math.random() * listColors.length)]
    this.onAddItem(colorSort)
    this.setState({ 
        color: colorSort
    })
    counter ++
  }



  render(){
    
    return (

      <>
        Memorize a sequencia de cores: <br/>
        <div class="square" style={{backgroundColor: this.state.color}}></div>

        <button onClick={this.sortColors} >Iniciar</button>


      </>

    );
  }
}

export default SortColors;
