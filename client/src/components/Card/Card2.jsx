import React from "react";
import './Card.css'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


function Card2( id ) {
    return(
            <div key={id} className="container">
                <div className={'card-container'} >
                    <div className="header">
                            <Link to={"/support/"+id.id}>
                            <img alt="" src={id.image}/>
                            </Link>
                        <h2>
                       USUARIO
                        </h2>
                        <h4>
                        NOMBRE DEL CANAL
                        </h4>
                    </div>
                    <div className="description">
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo porro, natus illum temporibus qui, cumque perspiciatis voluptates aliquam, quisquam minima commodi explicabo sit expedita dignissimos? Adipisci, enim! Eaque, nobis.
                        </p>
                    <div className="social">
                        <button className="button">
                            Ir
                        </button>
                    </div>
                    </div>
                </div>
            </div>
           
            )
}

const Container = s.div`
    display: flex;
    align-items: flex-end;
`
const Profile = s.img`
    witdh: 40px;
    height: 40px;
    border: 1px solid black;
    border-radius: 1000px;
    position: relative;
    margin-right: 400px;
`
const Title = s.h2`
    display: flex;
    padding: 10px;
    margin-top: 40px;
`
const TitleCard = s.h4`
    margin-left: 30px;
    position: absolute;
    color: white;
`

export default Card2;