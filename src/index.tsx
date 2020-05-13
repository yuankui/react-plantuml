import * as React from 'react';
import {FunctionComponent, useEffect, useState} from 'react';
// @ts-ignore
import plantumlEncoder from 'plantuml-encoder';


interface Props {
    src: string,
    alt: string,
}

const ReactPlantUML: FunctionComponent<Props> = (props) => {
    const [svg, setSvg] = useState('');

    const compileSrc = (src: string) => {
        const url = plantumlEncoder.encode(src);
        setSvg(`http://www.plantuml.com/plantuml/svg/${url}`);
    }

    useEffect(() => {
        compileSrc(props.src);
    }, [props.src]);


    return <>
        <img alt={props.alt} src={svg}/>
    </>;
};

export default ReactPlantUML;
