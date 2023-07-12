import React from 'react'

const NotificationTest = () => {
    const onButtonClick = () => {
        Notification.requestPermission().then((result) => {
            if (result === 'granted') {
                new Notification('Hello world!');
            }
        });
    }

    return (
        <div>
            <button onClick={onButtonClick}>Notification</button>
        </div>
    )
}

export default NotificationTest