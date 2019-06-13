import { Widget } from '@phosphor/widgets';
import { ToolbarButton } from '@jupyterlab/apputils';
import { NotebookPanel } from '@jupyterlab/notebook';
export default class MfeMenuWidget extends Widget {
    menuName: string;
    private toolbarBtns;
    private panel;
    constructor(panel: NotebookPanel, menuName: string);
    addBtn(component: ToolbarButton): void;
    private render;
}
