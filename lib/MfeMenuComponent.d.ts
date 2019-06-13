import * as React from 'react';
import 'antd/dist/antd.css';
import { ToolbarButton } from '@jupyterlab/apputils';
interface IProps {
    buttons: ToolbarButton[];
}
declare class MfeToolBarComponent extends React.Component<IProps, any> {
    constructor(props: IProps);
    render(): JSX.Element;
}
export default MfeToolBarComponent;
