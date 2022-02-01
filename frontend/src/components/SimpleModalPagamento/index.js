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
				        {column.log_em}: {column.comentarios} <br />
        				Comissão Afiliado: {column.comissao_afiliado} <br />
        				Valor Pagamento: {column.valor_pagamento} <br />
        			</Timeline.Item>
            );
          })}
		      </Timeline>
        </Space>
      </Modal>
    );
  }
}
