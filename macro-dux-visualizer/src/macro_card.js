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
