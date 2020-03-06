import React from 'react'

const styles = {
    position: 'fixed',
    bottom: 200,
    left: 10
}

export const VideoInfo = (props) => {
    return (
        <div className={props.className}>
            <h1 style={styles}>{props.name}</h1>
        </div>
    )
}