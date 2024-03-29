import * as React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Icon } from 'antd';
import { ToolbarButton } from '@jupyterlab/apputils';

interface IProps {
    buttons: ToolbarButton[],
    menuName: string
}

class MfeToolBarComponent extends React.Component<IProps, any> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        const buttons: ToolbarButton[] = this.props.buttons;
        const menuName = this.props.menuName;
        const menu = (
            <Menu>
                {
                    buttons.map((item, index) => {
                        return (
                            <Menu.Item key={index}>
                                {item.render()}
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        );
        return (
            <div>
                <Dropdown overlay={menu} placement="bottomLeft">
                    <a className="ant-dropdown-link" href="#">
                        {menuName} <Icon type="down" />
                    </a>
                </Dropdown>
            </div >
        )
    }
}

export default MfeToolBarComponent;