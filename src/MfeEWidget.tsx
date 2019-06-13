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

    constructor(panel: NotebookPanel, public menuName: string) {
        super();
        this.panel = panel;
        this.id = "mfe-tool-btns"
    }

    public addBtn(component: ToolbarButton) {
        let isExists = false;
        let w: Widget;
        const iter: any = this.panel.toolbar.children().iter();
        while (w = iter.next()) {
            console.log(w);
            if (w.id === 'mfe-tool-btns') {
                console.log('发现mfe-btns已经存在');
                isExists = true;
                let btns: ToolbarButton[] = (w as MfeMenuWidget).toolbarBtns;
                btns.push(component);
                this.toolbarBtns = btns;
                break;
            }
        }
        if (!isExists) {
            console.log("未发现mfe-btns")
            this.toolbarBtns.push(component);
            const time = new Date().getMilliseconds();
            this.panel.toolbar.insertItem(10, 'mfe-tool-button' + time, this);
        }
        this.render()
    }

    private render() {
        ReactDOM.render(
            <MfeToolBarComponent buttons={this.toolbarBtns} menuName={this.menuName}/>
            , this.node
        );
    }
}
