import React from 'react'

export default function MacroCard(props){

  return(
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{props.voiceName} Macros</h5>
        <label for="macro1" class="form-label">Macro 1</label>
        <input type="range" class="form-range" id="macro1" />
        <label for="macro2" class="form-label">Macro 2</label>
        <input type="range" class="form-range" id="macro2" />
        <label for="macro3" class="form-label">Macro 3</label>
        <input type="range" class="form-range" id="macro3" />
      </div>
    </div>
  )
}
