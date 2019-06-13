import { Widget } from '@phosphor/widgets';
import { ToolbarButton } from '@jupyterlab/apputils';
import { NotebookPanel } from '@jupyterlab/notebook';
export default class MfeMenuWidget extends Widget {
    private toolbarBtns;
    private panel;
    constructor(panel: NotebookPanel);
    addBtn(component: ToolbarButton): void;
    private render;
}
