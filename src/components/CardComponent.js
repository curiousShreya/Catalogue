import React from 'react';

function CardComponent({item}) {
  return (
    <div className='card'>
       <h2 style={{textAlign: 'center', paddingTop: '10px'}}>ID: #{item.id}</h2>
       <img src={`https://starwars-visualguide.com/assets/img/characters/${item.id}.jpg`} alt='pics'/>
       <div className='container'>
         <b>UserId: </b>{item.userId}<br></br>
         <b>Title: </b>{item.title}<br></br>
         <b>TaskCompleted : </b>{String(item.completed)}<br></br>
        </div>
    </div>
  )
}

export default CardComponent;
