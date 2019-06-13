import { Widget } from '@phosphor/widgets';
import { ToolbarButton } from '@jupyterlab/apputils';
import { NotebookPanel } from '@jupyterlab/notebook';
export default class MfeMenuWidget extends Widget {
    toolbarBtns: ToolbarButton[];
    panel: NotebookPanel;
    constructor(panel: any);
    addBtn(component: any): void;
    render(): void;
}
