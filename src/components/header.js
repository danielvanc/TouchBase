import React, { useContext, useEffect } from 'react';
import { Link } from '@reach/router';
import { SearchContext } from "../Stores";
import Downshift from 'downshift';
import names from 'human-names';

const Header = () => {
  const [search, setSearch] = useContext(SearchContext);
  const { allEn, allDe, allEs, allFr, allIt, allNl } = names;
  
  let allPeople =
    [...allEn, ...allDe, ...allEs, ...allFr, ...allIt, ...allNl];
  
  /**
   *  TODO:
   *  1. Use downshift to implement search text.
   *  2. When entered and clicked return or hit search, feed updates all 
   *     elements already on display on the page and in the api url
   */
  useEffect(() => {
    
  });

  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
  }
  
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/preferences">Preferences</Link>
        </li>
      </ul>
      <Downshift
        onChange={selection => alert(`You selected ${selection.value}`)}
        itemToString={item => (item ? item : '')}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <div>
            <label {...getLabelProps()}>Enter a name</label>
            <input {...getInputProps()} />
              <ul {...getMenuProps()}>
                {isOpen
                  ? allPeople.filter(item => !inputValue || item.includes(inputValue)).map((item, index) => (
                    <li {...getItemProps({
                      key: index,
                      index,
                      item,
                      style: {
                        backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal'
                      },
                    })}
                    >
                      {item}
                    </li>
                ))
                : null}
              </ul>
          </div>
      )}
      </Downshift>
    </>
  )
}

export default Header;