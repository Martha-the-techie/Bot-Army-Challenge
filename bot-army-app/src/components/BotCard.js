import React from 'react';

const botClass = {
    Support: "bot support",
    Medic: "bot medic",
    Assault: "bot assault",
    Defender: "bot defender",
    Captain: "bot captain",
    Witch: "bot witch"
  };
  
    

function BotCard({bot, handleClick, handleDelete}) {
    return (
        <div className="column" >
        <div className="card" key= {bot.id} onClick={() => handleClick(bot.id)}>
            <div className="card-image">
                <img className="card-img-top" src={bot.avatar_url} alt={bot.name} />
            </div>
            <div className="card-body">
                <div className='details'>
                    <div className='header'>{bot.name}<i className={botClass[bot.bot_class]} />
                    </div>
                <h5 className="card-title">{bot.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{botClass[bot.class]}</h6>
                <p className="card-text">{bot.description}</p>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        </div>
        </div>
        </div>
    );
}
 export default BotCard;