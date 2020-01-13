import React, { useContext, useEffect } from "react";
import { navigate } from "@reach/router";
import NationsContext from "../Stores";

/**
 * TODO:
 * 1. Prefil checkbox's if items exist in state
 */

const Nationalities = () => {
  const [nations, setNations] = useContext(NationsContext);

  useEffect(() => {
    if (nations) {
      const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

      for (const checkbox of allCheckboxes) {
        const itemToCheck = checkbox.getAttribute("id").slice(3);
        nations.includes(itemToCheck)
          ? (checkbox.checked = true)
          : (checkbox.checked = false);
      }
    }
  }, [nations]);

  const handleSubmit = e => {
    e.preventDefault();

    const selectedOptions = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    const options = [...selectedOptions];
    const selectedNations = [];
    options.forEach(el => {
      selectedNations.push(el.getAttribute("id").slice(3));
    });

    console.log(nations);

    setNations(selectedNations);
    navigate("/");
  };
  return (
    <form action="post" onSubmit={handleSubmit}>
      <p>List users by nationality</p>
      <div>
        <label htmlFor="natCH">CH</label>
        <input type="checkbox" name="natCH" id="natCH" />
      </div>

      <div>
        <label htmlFor="natES">ES</label>
        <input type="checkbox" name="natES" id="natES" />
      </div>

      <div>
        <label htmlFor="natFR">FR</label>
        <input type="checkbox" name="natFR" id="natFR" />
      </div>
      <div>
        <label htmlFor="natGB">GB</label>
        <input type="checkbox" name="natGB" id="natGB" />
      </div>
      <button type="submit">Update List</button>
    </form>
  );
};

export default Nationalities;
