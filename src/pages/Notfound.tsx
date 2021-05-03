import React from 'react';
import {Link} from 'react-router-dom';

const Notfound = () => {

        return (
            <div>
               <h1>Oops, 404 Notfound</h1>
               <Link to="/" className="btn btn-warning">Come back home</Link>
            </div>
        );
  
}

export default Notfound;