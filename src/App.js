import './App.css';
import React from 'react';
import SortColors from './SortColors';
import ListColors from './ListColors';



class App extends React.Component {

  listColorsDrawn=[]

  constructor(props){
    super(props)
    this.state = {
      listColorsVisible : [],
      listColorsSeleted : [],
      winner : false,
      loser :false
   }
  }



  handleInput=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  addItemToListColors = (color) =>{
    this.listColorsDrawn=[...this.listColorsDrawn,color]
    this.setState(currentState =>({
      listColorsVisible:[...currentState.listColorsVisible,color],
    } ))
  }

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
    this.setState(currentState =>({
      listColors:[],
      listColorsSeleted:[],
      winner:false,
      loser :false
    } ))
  }

  


  render(){
    
    return (

      <>
      <div>
      {this.state.listColorsVisible.length <5 && <SortColors onAddItem={this.addItemToListColors}></SortColors>}
      </div>
      
      
      
        
      {this.state.listColorsVisible.length ===5 && <ListColors selectColor={this.addItemToListColorsSelected} listColors={this.state.listColorsVisible} listColorsSeleted={this.state.listColorsSeleted}/>}

      <button disabled={this.state.listColorsSeleted.length !==5} onClick={this.validade}>Validar</button>

      {this.state.winner &&  <p>Parabens você Acertou</p>}
      {this.state.loser &&  <p>Você Errou</p>}
  

      {this.state.winner && <button onClick={this.playAgain}>Jogar Novamente</button>}
      {this.state.loser && <button onClick={this.playAgain}>Jogar Novamente</button>}

      

      </>

    );
  }
  
}

export default App;
