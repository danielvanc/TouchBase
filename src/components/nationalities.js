import React from 'react';
import { navigate } from '@reach/router'

const nationalities = ({ setNations }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const selectedOptions = document.querySelectorAll('input[type="checkbox"]:checked');
    const options = [ ...selectedOptions ]
    const selectedNations = [];
    options.forEach(el => {
      selectedNations.push( el.getAttribute("id").slice(3)  )
    })
    
    setNations(selectedNations)
    navigate("/")
  }
  return (
    <form action="post" onSubmit={handleSubmit}>
      <p>List users by nationality</p>
      <div>
        <label htmlFor="natCH">
          CH
        </label>
        <input type="checkbox" name="natCH" id="natCH" />
      </div>
      
      <div>
        <label htmlFor="natES">
          ES
        </label>
        <input type="checkbox" name="natES" id="natES" />
      </div>
      
      <div>
        <label htmlFor="natFR">
          FR
        </label>
        <input type="checkbox" name="natFR" id="natFR" />
      </div>
      <div>
        <label htmlFor="natGB">
          GB
        </label>
        <input type="checkbox" name="natGB" id="natGB" />
      </div>
      <button type="submit">Update List</button>
    </form>
  );
};

export default nationalities;