import React from 'react';

function Loading(props) {
    return (

        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}.</div>
        </div>

    );
}

Loading.defaultProps = {
    message: 'Loading...' // if not send props of message use this
}

export default Loading;