import React from 'react';

const PersonCard = ({ person }) => {
    return (
        <div className="PersonCard">
            <h2>{person.firstname} {person.lastname}</h2>
            <p>Age: {person.age}</p>
            <p>Hair Color: {person.haircolor}</p>
        </div>
    );
};

export default PersonCard;