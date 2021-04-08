import React from 'react'

export default function MacroCard(props){



  return(
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">{props.voiceName} Macros</h5>
        {Object.keys(props.macros).map(key => {
          return <div>
            <label for={key} class="form-label">{key}</label>
            <input type="range"
              class="form-range"
              id={key}
              key={key}
              value={props.macros.key}
              onChange={e => props.handleOnChange(e, props.updateMacro)}/>
          </div>
        })}
      </div>
    </div>
  )
}
// {Object.keys(props.macros).map((key) => {
//   <input type="range" class="form-range" id={key} value={props.macros[key]}
//          onChange={e => props.handleOnChange(e, props.updateMacro)}/>
// })}


// <div class="card mb-4">
//   <div class="card-body">
//     <h5 class="card-title">{props.voiceName} Macros</h5>
//     <label for="macro1" class="form-label">Macro 1</label>
//     <input type="range" class="form-range" id="macro1"
//       onChange={e => props.handleOnChange(e, props.updateMacro)}/>
//     <label for="macro2" class="form-label">Macro 2</label>
//     <input type="range" class="form-range" id="macro2"
//        onChange={e => props.handleOnChange(e, props.updateMacro)}/>
//     <label for="macro3" class="form-label">Macro 3</label>
//     <input type="range" class="form-range" id="macro3"
//        onChange={e => props.handleOnChange(e, props.updateMacro)}/>
//   </div>
// </div>
