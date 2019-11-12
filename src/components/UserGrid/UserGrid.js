import React, { useState, useEffect, Fragment } from 'react';
import debounce from "lodash.debounce"


const UserGrid = () => {

  /**
   * @type {number} 
   * Set total amount of records to retrieve
  */
  const totalUsers = 40;

  /**
   * @type {number}
   * How many in each batch to retrieve
  */
  const fetchAmount = 10;

  /**
   * @type {boolean}
   * Set the current error state
  */
  const [error, setError] = useState(false);

  /**
   * @type {boolean}
   * Set whether there is any more to load
  */
  const [hasMore, setHasMore] = useState(true);

  /**
   * @type {boolean}
   * Is the data loading?
  */
  const [isLoading, setIsLoading] = useState(true);

  /**
   * @type {Array}
   * Array to hold the prefetch data
  */
  const [preFetch, setPreFetch] = useState([]);

  /**
   * @type {Array}
   * Array to set the users and render on the page
  */
  const [users, setUsers] = useState([]);

  /**
   * @type {Array}
   * Temporary array that retrieves the new users
  */
  let nextUsers = {};

  /**
   * @type {boolean}
   * Status to know whether we have we done a preFetch
  */
  const [doPreFetch, setDoPreFetch] = useState(false);


  /*
    Use lodash's debounce method for onscroll so that
    we can control something happening only after a time we specify
  */
  window.onscroll = debounce(() => {
    if (error || isLoading || !hasMore) return;

    // Find where the bottom of the page is and check for it first.
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      // set the loading flag to true
      setIsLoading(true)
      // Get the prefetched users | will not prefetch on initial page load
      collectUsers(false);
    } else {
      /* 
        Not at bottom of the page, so run this only if 
        doPreFetch has been set to not been ran (false)
      */
      if (doPreFetch === false) {
        collectUsers(true);
      }
    }

  }, 100);



  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    collectUsers();
  }, [])




  /**
  * Function that collects the users from random me api and returns a promise
  *
  *
  * @example
  *
  * loadUpUsers().then((data) => data)
  */
  async function loadUpUsers() {
    const res = await fetch(`https://randomuser.me/api/?results=${fetchAmount}`)
    return await res.json()
  }



  /**
   *  Function that preFetches data based ahead of time
   *  outputs it into the preFetch state variable, where later
   *  it adds it into the users state variable when at bottom
   *  of the page.
   * 
   *  @example
   * 
   *  prefetchData() - requires loadUpUsers() present
  */
  const prefetchData = () => {
    loadUpUsers().then(({ results }) => {
      nextUsers = results.map(user => ({
        email: user.email,
        name: Object.values(user.name).join(' '),
        photo: user.picture.medium,
        username: user.login.username,
        uuid: user.login.uuid,
      }));

      // Update hasMore state var so that we can check if we should load any more data
      setHasMore((users.length < totalUsers))
      // Set the preFetch state var to the newly loaded data, that later is merged into users state var
      setPreFetch([...nextUsers]);
      // set the loading state var flag to not loading
      setIsLoading(false);
      // Set this flag to true to say we've prefetched
      setDoPreFetch(true);
    }).catch((err) => {
      setError(err.message);
      setIsLoading(false);
    });
  }


  /**
   *  Function that will fetch live data (should only run on initial page load)
   *  that also adds it into the users state variable, that then renders it to the page
   * 
   *  @example prefetchData() - requires loadUpUsers present
  */
  const getLiveData = () => {
    loadUpUsers().then(({ results }) => {
      nextUsers = results.map(user => ({
        email: user.email,
        name: Object.values(user.name).join(' '),
        photo: user.picture.medium,
        username: user.login.username,
        uuid: user.login.uuid,
      }));

      // Update hasMore state var so that we can check if we should load any more data
      setHasMore((users.length < totalUsers))

      // Merge the new data into the existing users state var
      setUsers([...users, ...nextUsers])

      // set the loading state var flag to not loading
      setIsLoading(false)
    }).catch((err) => {
      setError(err.message)
      setIsLoading(false);
    });
  }



  /**
   *  Function that prefetches data from the preFetch state var
   *  and adds it to the users state var, which intern, renders/updates
   *  the output on the page
   * 
   *  @example
   * 
   *  updateFromPreFetch()
  */
  const updateFromPreFetch = () => {
    // Set whether we need to load any more users
    setHasMore((users.length < totalUsers))
    // Merge new data into original users array

    setUsers([...users, ...preFetch])

    // set loading state to false
    setIsLoading(false)

    // set prefetch to false so that we can say not to prefetch on next render
    setDoPreFetch(false);

    // Clear the prefetch array ready for new data on next pre-fetch
    setPreFetch([])
  }




  /**
  * Function that collects the users from random me api
  *
  * @param {boolean} - Trigger: Should we trigger a prefetch of the data?
  *
  * @example
  *
  *     collectUsers(true)
  */
  const collectUsers = (trigger = false) => {
    /* 
      Set loading state to true so that the user is informed
      there is something happening, incase connection is slow.
    */
    setIsLoading(true)

    // Trigger prefetching?
    if (trigger) {
      if (users.length === totalUsers) {
        setHasMore(0);
        return
      };
      prefetchData();
    } else {
      // Don't preload fetch but check if preloaded array has data, if so, load that instead
      if (preFetch.length) {
        updateFromPreFetch()
      } else {
        getLiveData();
      }
    }
  }

  return (
    <>
      <h1>All Users</h1>
      <p>Scroll down to load more!!</p>
      {users.map(user => (
        <Fragment key={user.username}>
          <hr />
          <div className="userDiv" style={{ display: 'flex' }}>
            <img
              alt={user.username}
              src={user.photo}
              style={{
                borderRadius: '50%',
                height: 72,
                marginRight: 20,
                width: 72,
              }}
            />
            <div>
              <h2 style={{ marginTop: 0 }}>
                @{user.username}
              </h2>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </Fragment>
      ))}
      <hr />
      {error &&
        <div style={{ color: '#900' }}>
          {error}
        </div>
      }
      {isLoading &&
        <div>Loading...</div>
      }
      {!hasMore &&
        <div>You did it! You reached the end!</div>
      } 
    </>
  );
};

export default UserGrid;