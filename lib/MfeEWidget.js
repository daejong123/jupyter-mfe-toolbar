"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const widgets_1 = require("@phosphor/widgets");
const MfeMenuComponent_1 = require("./MfeMenuComponent");
class MfeMenuWidget extends widgets_1.Widget {
    constructor(panel) {
        super();
        this.toolbarBtns = [];
        this.panel = panel;
        this.id = "mfe-tool-btns";
    }
    addBtn(component) {
        let isExists = false;
        let w;
        const iter = this.panel.toolbar.children().iter();
        while (w = iter.next()) {
            if (w.id === 'mfe-tool-btns') {
                isExists = true;
                w.toolbarBtns.push(component);
                break;
            }
        }
        if (!isExists) {
            this.toolbarBtns.push(component);
            this.panel.toolbar.insertItem(10, 'mfe-tool-button', this);
        }
        this.render();
    }
    render() {
        ReactDOM.render(React.createElement(MfeMenuComponent_1.default, { buttons: this.toolbarBtns }), this.node);
    }
}
exports.default = MfeMenuWidget;
