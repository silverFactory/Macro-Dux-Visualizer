import React, { Component } from 'react'
import { connect } from 'react-redux'
import MacroCard from './macro_card'

class MacroCardContainer extends Component {

  handleOnChange(event, updateMacro){
    updateMacro(event.target.id, event.target.value)
    console.log(event)
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
      macro1: state.macro1,
      macro2: state.macro2,
      macro3: state.macro3
    },
    harmony: {
      macro4: state.macro4,
      macro5: state.macro5,
      macro6: state.macro6
    },
    bass: {
      macro7: state.macro7,
      macro8: state.macro8,
      macro9: state.macro9
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateMacro: (macroNum, macroVal) => {
      dispatch({
        type: 'UPDATE_MACRO',
        macroNum: macroVal
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MacroCardContainer)
