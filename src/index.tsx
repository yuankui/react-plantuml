import * as React from 'react';
import {FunctionComponent} from 'react';
// @ts-ignore
import plantumlEncoder from 'plantuml-encoder';


interface Props {
    src: string,
    alt: string,
}

const ReactPlantUML: FunctionComponent<Props> = (props) => {
    const encode = plantumlEncoder.encode(props.src);
    const url = `http://www.plantuml.com/plantuml/svg/${encode}`;

    return <>
        <img alt={props.alt} src={url}/>
    </>;
};

export default ReactPlantUML;
