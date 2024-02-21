import React from 'react'
import TextTransition, { presets } from 'react-text-transition'

export default function TextScroller() {
    const [ index,setIndex ] = React.useState(0);

    const style ={
      text : {
        color: "var(--mint)",
        fontSize: "40px"
      }
    }
    const TEXTS = [
        'Java',
        'Spring',
        'Dropwizard',
        'PostgreSQL',
        'ExpressJS',
        'MySQL',
        'React',
        'Heroku',
    ]

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index+1),
            4000
        );

        return ()=> clearTimeout(intervalId);
    }, []);
    
  return (
    <h5>
      <TextTransition springConfig={presets.wobbly} style={style.text}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h5>
  )
}