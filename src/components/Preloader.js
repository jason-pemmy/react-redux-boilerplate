import React from 'react';
import '../css/preloader.min.css';

const Preloader = ({ showPreloader }) => {
    const css = showPreloader ? "preloader active" : "preloader";
    return( 
        <div className={ css }>
            <img src="https://multimedia.3m.com/mws/media/1445146O/fireapp-preloader.gif" alt="sweet preloader"/>
        </div>
    );
}; 

export default Preloader; 