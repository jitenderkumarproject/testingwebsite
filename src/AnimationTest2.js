import React from 'react';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


// Define styles with Radium's keyframes
const styles = {
    bounce: {
        animation: 'bounce 1s',
        animationName: Radium.keyframes(bounce, 'bounce'),
    }
};

const Test = () => (
    <div className="test" style={styles.bounce}>
        <h1>Bounce Test</h1>
    </div>
);

export default Radium(Test);
