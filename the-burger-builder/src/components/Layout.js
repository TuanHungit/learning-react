import Auxi from '../hoc/Auxi';
import React from 'react';
const layout = (props) => {
    return (
        <Auxi>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Auxi>
    )
} 
export default layout;