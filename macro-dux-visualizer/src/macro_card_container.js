import React, { Component } from 'react'
import { connect } from 'react-redux'
import MacroCard from './macro_card'

class MacroCardContainer extends Component {

  handleOnChange(event, updateMacro){
    updateMacro(event.target.id, event.target.value)
    console.log(event.target.id, event.target.value)
  }

  render(){
    return(
      <div>
        <MacroCard voiceName="Melody"
          macros={this.props.melody}
          updateMacro={this.props.updateMacro}
          handleOnChange={this.handleOnChange}/>
        <MacroCard voiceName="Harmony"
          macros={this.props.harmony}
          updateMacro={this.props.updateMacro}
          handleOnChange={this.handleOnChange}/>
        <MacroCard voiceName="Bass"
          macros={this.props.bass}
          updateMacro={this.props.updateMacro}
          handleOnChange={this.handleOnChange}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    melody: {
      macro1: state.macros.macro1,
      macro2: state.macros.macro2,
      macro3: state.macros.macro3
    },
    harmony: {
      macro4: state.macros.macro4,
      macro5: state.macros.macro5,
      macro6: state.macros.macro6
    },
    bass: {
      macro7: state.macros.macro7,
      macro8: state.macros.macro8,
      macro9: state.macros.macro9
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateMacro: (macroNum, macroVal) => {
      dispatch({
        type: 'UPDATE_MACRO',
        macro: {[macroNum]: parseInt(macroVal, 10)}
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MacroCardContainer)
