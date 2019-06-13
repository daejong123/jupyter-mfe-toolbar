"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("antd/dist/antd.css");
const antd_1 = require("antd");
class MfeToolBarComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const buttons = this.props.buttons;
        const menu = (React.createElement(antd_1.Menu, null, buttons.map((item, index) => {
            return (React.createElement(antd_1.Menu.Item, { key: index }, item.render()));
        })));
        return (React.createElement("div", null,
            React.createElement(antd_1.Dropdown, { overlay: menu, placement: "bottomLeft" },
                React.createElement("a", { className: "ant-dropdown-link", href: "#" },
                    "MFE-Tools ",
                    React.createElement(antd_1.Icon, { type: "down" })))));
    }
}
exports.default = MfeToolBarComponent;
