const ListColors = (props) =>{
  

    

    return(
     <div>
       
        <div class="square-center-list">
        <div  class="square-float" style={{backgroundColor:props.listColorsSeleted[0]}}/>
        <div  class="square-float" style={{backgroundColor:props.listColorsSeleted[1]}}/>
        <div  class="square-float" style={{backgroundColor:props.listColorsSeleted[2]}}/>
        <div  class="square-float" style={{backgroundColor:props.listColorsSeleted[3]}}/>
        <div  class="square-float" style={{backgroundColor:props.listColorsSeleted[4]}}/>
        </div>

        <div class="square-center-list">
        <div onClick={() => props.addItemToListColorsSelected(props.listColors[0],0)} class="square-float" style={{backgroundColor:props.listColors[0]}}/>
        <div onClick={() => props.addItemToListColorsSelected(props.listColors[1],1)} class="square-float" style={{backgroundColor:props.listColors[1]}}/>
        <div onClick={() => props.addItemToListColorsSelected(props.listColors[2],2)} class="square-float" style={{backgroundColor:props.listColors[2]}}/>
        <div onClick={() => props.addItemToListColorsSelected(props.listColors[3],3)} class="square-float" style={{backgroundColor:props.listColors[3]}}/>
        <div onClick={() => props.addItemToListColorsSelected(props.listColors[4],4)} class="square-float" style={{backgroundColor:props.listColors[4]}}/>
        </div>

      
      </div>
    )}



export default ListColors