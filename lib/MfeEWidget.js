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
            console.log(w);
            if (w.id === 'mfe-tool-btns') {
                console.log('发现mfe-btns已经存在');
                isExists = true;
                let btns = w.toolbarBtns;
                btns.push(component);
                this.toolbarBtns = btns;
                break;
            }
        }
        if (!isExists) {
            console.log("未发现mfe-btns");
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
