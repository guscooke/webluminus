import React from "react";
import { Modal, Typography, Space } from "antd";

const { Text } = Typography;

export default class SimpleModalQuery extends React.Component {
  render(props) {
    return (
      <Modal
        title={this.props.title}
        visible={this.props.visible}
        onCancel={this.props.onCancel}
        footer={null}
      >
        <Space direction="vertical">
          {this.props.columns.map((column, key) => {
            const inputValue = this.props.values[column.key];

            return (
              <div key={key}>
                <Text>
                  <Text strong>{column.title}:</Text> {inputValue}
                </Text>
              </div>
            );
          })}
        </Space>
      </Modal>
    );
  }
}
