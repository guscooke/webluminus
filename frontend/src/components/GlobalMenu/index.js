import React, { PureComponent } from "react";
import { Drawer, Collapse } from "antd";

export default class GlobalMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidUpdate(props) {
    this.setState({ open: props.drawerOpen });
  }

  render() {
    const { Panel } = Collapse;

    const toggleMenu = () => {
      this.setState({
        open: !this.state.open,
      });
    };

    return (
      <Drawer
        title="Applications"
        placement="right"
        width={300}
        closable={true}
        maskClosable={false}
        onClose={toggleMenu}
        visible={this.state.open}
      >
        <Collapse accordion>
          <Panel header="Favorites" key="1">
            <p>YMS</p>
            <p>Light Touch</p>
          </Panel>
          <Panel header="Corporate" key="2">
            <p>SCR</p>
            <p>BPS</p>
            <p>EHS</p>
            <p>Launch Excellence</p>
          </Panel>
          <Panel header="Operations" key="3">
            <p>YMS</p>
            <p>Light Touch</p>
            <p>Add-on/Expedite</p>
            <p>Chargeback</p>
            <p>Weekly Scorecard</p>
          </Panel>
          <Panel header="Quality" key="4">
            <p>Quality Audit</p>
            <p>Internal Change Request</p>
          </Panel>
          <Panel header="Misc" key="5">
            <p>Cost Savings</p>
            <p>Self Declaration</p>
            <p>Dashboards</p>
          </Panel>
        </Collapse>
      </Drawer>
    );
  }
}
