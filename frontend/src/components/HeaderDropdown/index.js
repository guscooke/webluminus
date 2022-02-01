import React, { PureComponent } from "react";
import { Dropdown } from "antd";
import styles from "./index.less";

export default class HeaderDropdown extends PureComponent {
  render() {
    const { overlayClassName, ...props } = this.props;
    return <Dropdown overlayClassName={styles.container} {...props} />;
  }
}
