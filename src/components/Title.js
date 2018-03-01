import React from 'react';
import style from './Title.css';



const Title = (props) =>
  <h1 className={style.title}>{props.title} {props.number} </h1>;

export default Title;
