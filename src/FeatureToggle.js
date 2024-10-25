import React from 'react';

function FeatureToggle(props) {
    return (
        <div>
            {props.isEnabled === true ? props.featureName : 'Feature [' + props.featureName + '] is disabled' }
        </div>
    );
}

export default FeatureToggle;