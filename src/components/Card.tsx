import React from "react";
import {Link} from 'react-router-dom';
import './Card.css';

interface Car {
    id: string;
    modelName: string;
    bodyType: string;
    modelType: string;
    imageUrl: string;
}

interface CardProps {
    data: Car
}

const Card:React.FC <CardProps> = ({data}) => {
    return (
        <div className='car-detail' key={data.id}>
            <p className="car-body-type">{data.bodyType.toUpperCase()}</p>
            <div className="model-details">
                <p className="bold-text black">
                {data.modelName}
                </p>
                <p className="text light-grey">
                {data.modelType}
                </p>
            </div>
            <div className='grid'>
                <img className="car-img" src={data.imageUrl} alt="car display" />
            </div>
            <div className="links">
            <Link className="link"
                to={`/learn:${data.id}`}
                key={data.id}
            >
                {'Learn  >'}
            </Link>
            <Link className="link"
                to={`/shop:${data.id}`}
                key={data.id}
            >
                {'Shop  >'}
            </Link>
            </div>
        </div>
    );
};

export default Card;