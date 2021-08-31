import React from 'react';

import Directory from '../../components/directory/directory.component';


const HomePage = () => (
    <div className='homepage'>
        <Directory history={history}/>
        Home Page
    </div>
);


export default HomePage;