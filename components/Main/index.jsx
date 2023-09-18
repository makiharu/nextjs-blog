import { calculateSizeAdjustValues } from "next/dist/server/font-utils";
import Links from '../components/Links';
import HeadLine from '../components/Headline';
import { useEffect } from 'react';

export function Main(props) {
    useEffect(() => {
        console.log('マウント時');
        // Homeコンポーネントがマウントされる（DOMになる）瞬間、JSXがレンダリングされてuseEffectの中の処理が走る。
        document.body.style.backgroundColor ='lightgreen';
    
        // アンマウント時の処理
        return () => {
          console.log('アンマウント時');
          document.body.style.backgroundColor ='';
        }
    }, [])

    
    return (
        <main>
            <HeadLine page="index" />
            <Links />
        </main>
    );
}