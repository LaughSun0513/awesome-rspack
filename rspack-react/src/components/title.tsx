import React from "react";
import { useState } from "react";
import './title.scss';
import './title.less';
import data from '../assets/data.json';

export function Title() { 
    const [rspack, useRspack] = useState(data.bundler);
    const [reactText, useReactText] = useState(data.lib);

    return (
        <h1>
            <span className="rspack-less">{ rspack }</span> 
            + 
            <span className="rspack-scss">{ reactText }</span>
        </h1>
    )
}