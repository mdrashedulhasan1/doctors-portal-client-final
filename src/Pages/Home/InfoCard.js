import React from 'react';

const InfoCard = ({ img, bgColor, title, description }) => {
    return (
        <div className={`card lg:card-side shadow-xl p-10 ${bgColor}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;