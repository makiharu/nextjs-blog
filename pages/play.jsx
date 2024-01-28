import React, { useContext, useEffect, useState } from 'react';
import InfoContext from 'src/components/infoContext';
import App from 'src/components/App';

export default function Play() {
    // let count = 0;
    let [count, setCount] = useState(0);
    const info = useContext(InfoContext);

    const handleClick = () => {
        console.log(count);
        setCount(count+1);
    }

    useEffect(() => {
        console.log('hello Hooks');
    }, [count]);

    // カウントが3の倍数になった時にアホになる
    useEffect(() => {
        if(count % 3 === 0 && count !== 0) {
            alert(`${count}〜〜〜〜〜！！！！！`);
            document.body.style.backgroundColor = 'lightgreen';
        }

        return(() => {
            document.body.style.backgroundColor = '';
        })
    }, [count]);

    return (
        <div className="palyEx">
            <h1>useState, useEffect</h1>
            <button onClick={handleClick}>ボタン</button>
            <p>{ count }</p>
            <hr />
            <h1>useContext</h1>
            {/* <p>{info.name}</p>
            <p>{info.type}</p> */}

            <App />

        </div>
    )
}