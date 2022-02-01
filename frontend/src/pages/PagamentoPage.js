import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Table,
  Button,
  Popover,
  Card,
  notification,
  Space,
} from "antd";
import SimpleModalForm from "../components/SimpleModalForm";
import SimpleModalQuery from "../components/SimpleModalQuery";

const PagamentoPage = (props) => {
  const [pageNum, setPageNum] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [tableLoading, setTableLoading] = useState(false);
  
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [statusRegisterLoading, setStatusRegisterLoading] = useState(false);  
  const [statusModalValues, setStatusModalValues] = useState({});

  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [viewingModalValues, setViewingModalValues] = useState({});
  
  const [rows, setRows] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const [statusColumns, setStatusColumns] = useState([]);

  useEffect(() => {
    handleUpdateTable();
  }, []);
  
  const toggleStatusVisible = () => {
    setStatusModalVisible(!statusModalVisible);
  };

  const toggleViewingVisible = () => {
    setViewModalVisible(!viewModalVisible);
  };
  
  const updateStatus = (statusModalValues) => { 
	setStatusModalValues(statusModalValues);
    setStatusModalVisible(true);
  };
  
  const handleStatusRegister = async (e) => {
    setStatusRegisterLoading(true);
	
	let editObject = {
      ...statusModalValues,
      ...e,
    };
	
   const response = await fetch(
      process.env.test_api + "pagamento/" + statusModalValues.id,	  
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
		  "Authorization": "Bearer " + props.auth.auth_jwt
        },
        body: JSON.stringify({
          lead_id: e.lead_id,
		  data_pagamento: e.data_pagamento,		  
		  valor_pagamento: e.valor_pagamento,
          comentarios: e.comentarios,          
        }),
      }
    );

    let status = {
      type: "error",
      title: "Falha ao alterar status",
      message:
        "Não foi possível alterar o status do Lead. Por favor tente novamente. Error code: " +
        response.status,
    };

    switch (response.status) {
      case 201:
        status.type = "success";
        status.title = "Registro atualizado";
        status.message = "Registro Atualizado com sucesso";
        break;
	  case 200:
        status.type = "success";
        status.title = "Registro atualizado";
        status.message = "Registro Atualizado com sucesso";
        break;
      default:
        break;
    }

    openNotificationWithIcon(status);
    setStatusModalVisible(false);
    handleUpdateTable();
  };

  const viewRegister = (viewingModalValues) => {
    setViewingModalValues(viewingModalValues);
    toggleViewingVisible();
  };

  const handleUpdateTable = () => {
    setTableLoading(true);

    fetch(
      process.env.test_api + "pagamento",
	  {       
		headers: {         
		  "Authorization": "Bearer " + props.auth.auth_jwt
        }
      }
    )
      .then((response) => response.json())
      .then((response) => {
        let columnsInfo = Object.keys(response.message.properties.fields).map(
          (field) => {
            let columnField = {
              title: response.message.properties.fields[field].description
					? response.message.properties.fields[field].description
					: field,
              dataIndex: field,
              key: field,
              editable: response.message.properties.fields[field].readonly != "readonly"
					? true
					: false,
              required: response.message.properties.required.includes(field),
              type: response.message.properties.fields[field].type,
              showInGrid: response.message.properties.required.includes(field),
            };

            return columnField;
          }
        );
        columnsInfo.push({
          title: "Action",
          key: "action",
          render: (record) => {
            return (
              <>
                <Button onClick={() => viewRegister(record)} size="small">
                  Visualizar
                </Button>                
				<Button onClick={() => updateStatus(record)} size="small">
                  Atualiza Pagamentos
                </Button>                
              </>
            );
          },
          showInGrid: true,
        });

        setRows(response.message.data);
        setTableColumns(columnsInfo);
        setTableLoading(false);
		
		let columnsStatus = [			
			{
			  title: "Data Pagamento",
			  dataIndex: "data_pagamento",
			  key: "data_pagamento",
			  type: "date",
			  required: true,
			  editable: true
			},
			{
			  title: "Valor Pagamento",
			  dataIndex: "valor_pagamento",
			  key: "valor_pagamento",
			  type: "integer",
			  required: true,
			  editable: true,			  
			},
			{
			  title: "Comentários",
			  dataIndex: "comentarios",
			  key: "comentarios",
			  type: "String",
			  required: true,
			  editable: true,			  
			},
			{
			  title: "lead_id",
			  dataIndex: "lead_id",
			  key: "lead_id",
			  type: "hidden",
			  required: true
			  
			}
		];
		
		
		setStatusColumns(columnsStatus);
      });
  };

  const openNotificationWithIcon = ({ type, title, message }) => {
    notification[type]({
      message: title,
      description: message,
    });
  };

  return (
    <Card title="Pagamentos">
      <Row>
        <Col span={24}>          
          <Table
            columns={tableColumns.filter(
              (column) => column.showInGrid === true
            )}
            dataSource={rows}
            loading={tableLoading}
            size="small"
            rowKey="id"
          />
        </Col>
      </Row>     
	  <SimpleModalForm
        title="Novo Pagamento"
        visible={statusModalVisible}
        onCancel={toggleStatusVisible}
        onFormFinish={handleStatusRegister}
        submitLoading={statusRegisterLoading}
        columns={statusColumns}
      />
      <SimpleModalQuery
        title="Visualizar Lead"
        visible={viewModalVisible}
        onCancel={toggleViewingVisible}
        columns={tableColumns}
        values={viewingModalValues}
      />
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.userReducer,
  };
};

export default connect(mapStateToProps)(PagamentoPage);
