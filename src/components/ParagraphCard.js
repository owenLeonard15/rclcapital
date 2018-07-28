import React from 'react';
import './ParagraphCard.css';

const ParagraphCard = ({ title, text }) => {
    return (
        <div className="container text-card">
            <div className="row top">
                <h3>{title}</h3>
            </div>
            <div className="row bg-light">
            <p>{text[0]}</p>
                 <ul>
                    {
                        text.map((line, i) => {
                            if(i > 0){
                                return <li key={i}>{text[i]}</li>
                            }
                            return null;
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ParagraphCard;