import React from 'react'
import Button from './Button'
import VideoContainer from './VideoContainer'

const ButtonBar = () => {
  return (
    <div className='col-span-11'>
        <Button title="Game"/>
        <Button title="Songs"/>
        <Button title="Name"/>
        <Button title="Live"/>
        <Button title="Cricket"/>
        <Button title="News"/>
        <Button title="Cooking"/>
        <Button title="Technology"/>
        <Button title="Music"/>
        <Button title="News"/>
        <Button title="Cooking"/>
        <Button title="Technology"/>
        <Button title="Music"/>
        <Button title="News"/>
        <Button title="Cooking"/>
        <Button title="Technology"/>
        <Button title="Music"/>
        <VideoContainer/>
    </div>
  )
}

export default ButtonBar