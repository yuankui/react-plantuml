// @ts-ignore
import plantuml from "plantuml";

import * as React from 'react';
import {FunctionComponent, useEffect, useState} from 'react';


interface Props {
    src: string,
    alt: string,
}

const ReactPlantUML: FunctionComponent<Props> = (props) => {
    const [svg, setSvg] = useState('');

    const compileSrc = async (src: string) => {
        const data = await plantuml(src);
        const base64 = btoa(data);
        const url = `data:image/svg;base64,${base64}`;
        setSvg(url);
    }

    useEffect(() => {
        compileSrc(props.src);
    }, [props.src]);


    return <>
        <img alt={props.alt} src={svg}/>
    </>;
};

export default ReactPlantUML;
