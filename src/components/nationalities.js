import React from 'react';

const nationalities = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Handling submit...');
    // TODO:
    // 1. Gather what's been selected

    const selectedOptions = document.querySelectorAll('input[type="checkbox"]').length;
    const options = Object.create(selectedOptions);
    console.log(selectedOptions);


    // 2. Add state further up in app
    // 3. Update state with new nationality info
    // 4. Check if state is populated
    // 5. Update UserGrid info feed url with selected nationality info
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