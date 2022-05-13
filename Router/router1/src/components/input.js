import { useState, useEffect } from 'react';

export function Input(props) {
    const IMG_PASS = `${process.env.PUBLIC_ENV}/img/pass-regex.png`
    const IMG_FAIL = `${process.env.PUBLIC_ENV}/img/fail-regex.png`
    const regex = props.regex
    const callback = props.callback
    const label = props.label
    const [val, setVal] = useState('');
    const [imgLink, setImgLink] = useState('')
    useEffect(() => {
        if (regex.test(val)) {
            console.log('run pass');
            setImgLink(IMG_PASS)
            callback({ [label]: val })
        } else {
            setImgLink(IMG_FAIL)
            callback({ [label]: '' })
        }
    }, [val])
    return (
        <div>
            <label>{label}</label>
            <input type={props.type} value={val} onChange={(event) => {
                setVal(event.target.value)
            }} />
            {imgLink ? <img src={imgLink} alt={'img check'} /> : ''}
        </div>
    )
}