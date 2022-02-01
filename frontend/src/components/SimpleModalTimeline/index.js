import React from "react";
import { Modal, Typography, Space, Timeline } from "antd";

const { Text } = Typography;

export default class SimpleModalTimeline extends React.Component {
  render(props) {
    return (
      <Modal
        title={this.props.title}
        visible={this.props.visible}
        onCancel={this.props.onCancel}
        footer={null}
      >
        <Space direction="vertical" style={{width:"100%"}}>          
          <Timeline>
		  {this.props.values.map((column, key) => {			
			     return (              
                <Timeline.Item key={key}>
                  <p>{column.status} {column.motivo ? '(' + column.motivo + ')' : '' }</p> 
                  <p>{column.log_em} - {column.comentarios}</p>
                </Timeline.Item>
            );
          })}
		      </Timeline>          
        </Space>
      </Modal>
    );
  }
}
