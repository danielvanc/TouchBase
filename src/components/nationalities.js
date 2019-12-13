import React from 'react';

const nationalities = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Handling submit...');
  }
  return (
    <form action="post" onSubmit={handleSubmit}>
      <p>List users by nationality</p>
      <div>
        <label for="natCH">
          CH
        </label>
        <input type="checkbox" name="natCH" id="natCH" />
      </div>
      
      <div>
        <label for="natES">
          ES
        </label>
        <input type="checkbox" name="natES" id="natES" />
      </div>
      
      <div>
        <label for="natFR">
          FR
        </label>
        <input type="checkbox" name="natFR" id="natFR" />
      </div>
      <div>
        <label for="natGB">
          GB
        </label>
        <input type="checkbox" name="natGB" id="natGB" />
      </div>
      <button type="submit">Update List</button>
    </form>
  );
};

export default nationalities;