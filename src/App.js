import './App.css';
import React from 'react';
import SortColors from './SortColors';
import ListColors from './ListColors';



class App extends React.Component {

  listColorsDrawn=[]
  listPositions=[0,1,2,3,4]


  constructor(props){
    super(props)
    this.state = {
      listColorsVisible : [],
      listColorsSeleted : [],
      winner : false,
      loser :false
   }
  }


  addItemToListColors = (color) =>{
    this.listColorsDrawn=[...this.listColorsDrawn,color]
    if(this.listColorsDrawn.length===6){
      for (var i = 0; i <= 4; i++){
        let colorScrumbled = this.listColorsDrawn[this.scrumble()]
        this.setState(currentState =>({
        listColorsVisible:[...currentState.listColorsVisible,colorScrumbled]
      }))
    
  }}}

  addItemToListColorsSelected = (color) =>{
    if(this.state.listColorsSeleted.length<5){
    this.setState(currentState =>({
      listColorsSeleted:[...currentState.listColorsSeleted,color],
    } ))}
  }

  checkColors=()=>{
    for (var i = 0; i <= 4; i++){
      if(this.state.listColorsSeleted[i]!==this.listColorsDrawn[i]){
        return false
      }
    }
    return true }

  validade = () =>{
    if(this.checkColors()){
      this.setState({
        winner:true
      })   }
    else{
      this.setState({
        loser:true
      })  } }

  playAgain = () =>{
    this.listColorsDrawn=[]
    this.listPositions=[0,1,2,3,4]
    this.setState({
      listColorsVisible:[],
      listColorsSeleted:[],
      winner:false,
      loser :false
    } )
  }

  scrumble=()=>{
    let position = Math.floor(Math.random() * 5)
    if(this.listPositions.includes(position)){
      this.listPositions= this.listPositions.filter(item => item !== position)
    }
    else{
      while(this.listPositions.includes(position)===false){
        position = Math.floor(Math.random() * 5)
      }
      this.listPositions= this.listPositions.filter(item => item !== position)
    }
    console.log(position)
    return position
  }


  render(){
    
    return (

      <>
      {this.state.listColorsVisible.length <5 && <SortColors onAddItem={this.addItemToListColors}></SortColors>}
  
      {this.state.listColorsVisible.length ===5 && <ListColors selectColor={this.addItemToListColorsSelected} listColors={this.state.listColorsVisible} listColorsSeleted={this.state.listColorsSeleted}/>}


      <div class="bottom-less">
      <button disabled={this.state.listColorsSeleted.length !==5} onClick={this.validade}>Validar</button>

      {this.state.winner &&  <p>Parabens você Acertou</p>}
      {this.state.loser &&  <p>Você Errou</p>}
  

      {this.state.winner && <button onClick={this.playAgain}>Jogar Novamente</button>}
      {this.state.loser && <button onClick={this.playAgain}>Jogar Novamente</button>}

      </div>

      </>

    );
  }
  
}

export default App;
