import React, { Component } from 'react'
import { connect } from 'react-redux'
import MacroCard from './macro_card'

class MacroCardContainer extends Component {

  render(){
    return(
      <div>
        <MacroCard voiceName="Melody"/>
        <MacroCard voiceName="Harmony"/>
        <MacroCard voiceName="Bass"/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    melody: state.melody,
    harmony: state.harmony,
    bass: state.bass
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateMacro: (macro) => {
      dispatch({
        type: 'UPDATE_MACRO',
        macro
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MacroCardContainer)
