import './App.css';
import React from 'react';
class SortColors extends React.Component {


  constructor(props){
    super(props)

    this.onAddItem = props.onAddItem
    this.state = {
      color:''
   }
  }

listColors = ["#CC66CC","#C6C","#CC33CC","#C3C","#993399","#939","#660066","#606",'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',]


  
  sortColors = () =>{
    let counter =0
    let colorSort = this.listColors[Math.floor(Math.random() * this.listColors.length)]
    this.listColors = this.listColors.filter(item => item !== colorSort)
    this.onAddItem(colorSort)
    this.setState({ 
        color: colorSort
    })
    counter ++
  }



  render(){
    
    return (

      <div class="bottom">
        Memorize a sequencia de cores: <br/>
        <div class="square-center">
          <div class="square" style={{backgroundColor: this.state.color}}/>
        </div>
        <button onClick={this.sortColors} >Iniciar</button>


      </div>

    );
  }
}

export default SortColors;
