import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Widget } from '@phosphor/widgets';
import { ToolbarButton } from '@jupyterlab/apputils';
import MfeToolBarComponent from './MfeMenuComponent';

import {
    NotebookPanel
} from '@jupyterlab/notebook';

export default class MfeMenuWidget extends Widget {

    toolbarBtns: ToolbarButton[] = [];
    panel: NotebookPanel;

    constructor(panel: any) {
        super();
        this.panel = panel as NotebookPanel;
        this.id = "mfe-tool-btns"
    }

    addBtn(component: any) {
        let isExists = false;
        let w: Widget;
        const iter: any = this.panel.toolbar.children().iter();
        while (w = iter.next()) {
            if (w.id === 'mfe-tool-btns') {
                isExists = true;
                (w as MfeMenuWidget).toolbarBtns.push(component as ToolbarButton);
                break;
            }
        }
        if (!isExists) {
            this.toolbarBtns.push(component);
            this.panel.toolbar.insertItem(10, 'mfe-tool-button', this);
        }
        this.render()
    }

    render() {
        ReactDOM.render(
            <MfeToolBarComponent buttons={this.toolbarBtns} />
            , this.node
        );
    }
}
