import React, { useEffect, useState } from 'react';

export default function palyEx() {
    // let count = 0;
    let [count, setCount] = useState(0);

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
            
        </div>
    )
}