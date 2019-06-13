import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Widget } from '@phosphor/widgets';
import { ToolbarButton } from '@jupyterlab/apputils';
import MfeToolBarComponent from './MfeMenuComponent';

import {
    NotebookPanel
} from '@jupyterlab/notebook';

export default class MfeMenuWidget extends Widget {

    private toolbarBtns: ToolbarButton[] = [];
    private panel: NotebookPanel;

    constructor(panel: NotebookPanel) {
        super();
        this.panel = panel;
        this.id = "mfe-tool-btns"
    }

    public addBtn(component: ToolbarButton) {
        let isExists = false;
        let w: Widget;
        const iter: any = this.panel.toolbar.children().iter();
        while (w = iter.next()) {
            if (w.id === 'mfe-tool-btns') {
                isExists = true;
                (w as MfeMenuWidget).toolbarBtns.push(component);
                break;
            }
        }
        if (!isExists) {
            this.toolbarBtns.push(component);
            this.panel.toolbar.insertItem(10, 'mfe-tool-button', this);
        }
        this.render()
    }

    private render() {
        ReactDOM.render(
            <MfeToolBarComponent buttons={this.toolbarBtns} />
            , this.node
        );
    }
}
