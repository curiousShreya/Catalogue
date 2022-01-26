import React, {useState} from 'react';


function SortDropdown({catalogue, setCatalogue}) {
  const [active, setActive] = useState(false)
  return (
    <div className='dropdown'>
     <div className="dropdown-btn" onClick={() => setActive(!active)}>Choose any sort<i className="bi bi-caret-down-fill"></i></div>
     {active &&
       <div className='dropdown-content'>
        <div className="dropdown-item" onClick={() => setCatalogue([...catalogue].sort((a,b) => a.id - b.id))}>No Sort</div>
        <div className="dropdown-item" onClick={() => setCatalogue([...catalogue].sort((a,b) => b.id - a.id))}>Sorting IDs from High to Low</div>
        
    </div> 
    }
         
  </div>
  )
}

export default SortDropdown;
