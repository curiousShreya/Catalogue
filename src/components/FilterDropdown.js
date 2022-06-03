import React, {useState} from 'react';

function FilterDropdown({posts, setCatalogue}) {
  const [active, setActive] = useState(false)
  
  function filterTaskCompleted() {
      return (posts.filter(post => post.completed === true))
  }
  function filterTaskIncompleted() {
      return (
          posts.filter(post => post.completed === false)
          
          )
  }
  function filterUserId1() {
    return (posts.filter(post => post.userId === 1))
}
function filterUserId2() {
  return (posts.filter(post => post.userId === 2))
}

  return (
    <div className='dropdown'>
     <div className="dropdown-btn"onClick={() => setActive(!active)}>Choose any filter<i className="bi bi-caret-down-fill"></i></div>
     {active &&
       <div className='dropdown-content'>
        <div className="dropdown-item" onClick={() => setCatalogue(posts)}>No Filter</div>
        <div className="dropdown-item" onClick={() => setCatalogue(filterTaskCompleted())}>IDs with Task Completed</div>
        <div className="dropdown-item" onClick={() => setCatalogue(filterTaskIncompleted())}>IDs with Task Incompleted</div>
        <div className="dropdown-item" onClick={() => setCatalogue(filterUserId1())}>IDs with UserId1</div>
        <div className="dropdown-item" onClick={() => setCatalogue(filterUserId2())}>IDs with UserId2</div>
    </div> 
    }
    

         
  </div>
  )
}

export default FilterDropdown;


