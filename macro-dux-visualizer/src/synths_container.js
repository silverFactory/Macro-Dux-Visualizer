import React, { Component} from 'react'
import BassSynth from './bass_synth_2'
import KeysSynth from './keys_synth'
import LeadSynth from './lead_synth_2'

export default function SynthsContainer(props) {

    return(
      <div>
        <BassSynth
          macro7={props.macro7}
          macro8={props.macro8}
          macro9={props.macro9}
          notes={props.bassNotes}
          playing={props.playing}
          getWaveformArray={props.getWaveformArray}
          scale={props.scale}
          />
        <KeysSynth
          macro4={props.macro4}
          macro5={props.macro5}
          macro6={props.macro6}
          notes={props.harmonyNotes}
          playing={props.playing}
          getWaveformArray={props.getWaveformArray}
          scale={props.scale}
          />
        <LeadSynth
          macro1={props.macro1}
          macro2={props.macro2}
          macro3={props.macro3}
          notes={props.melodyNotes}
          playing={props.playing}
          getWaveformArray={props.getWaveformArray}
          scale={props.scale}
          />
      </div>
    )
}
