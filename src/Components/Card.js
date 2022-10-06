import React from 'react'
import { props } from 'react'
export default function Card(props) {
    return (
        <div>

            <div className={`card h-100 text-bg-${props.col} border-secondary`} >
                <img src={props.imgUrl} className="card-img-top" alt="image" />
                <div className="card-body">
                    <span className="position-absolute top-0 float-none translate-middle badge rounded-pill bg-secondary" style={{translate:"30px"}}>
                        {props.badge}
                    </span>
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.desc}</p>
                    <a href={props.url} target="_blank" className="btn btn-sm btn-primary ">Read More</a>
                    <p className='text-start position-absolute bottom-1 start-0 mx-1 ' style={{  fontSize: "12px",opacity:"1" }}>Published At:{props.time}</p>
                </div>
            </div>
        </div>
    )
}
