import React from 'react'
import Nationalities from '../components/nationalities'

const PagePreferences = ({setNations}) => (
  <>
    <h1>Preferences Page</h1>
    <Nationalities hi="hi" setNations={setNations} />
  </>
)

export default PagePreferences;