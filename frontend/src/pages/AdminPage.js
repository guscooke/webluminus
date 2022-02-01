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

const AdminPage = (props) => {
  const [pageNum, setPageNum] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [tableLoading, setTableLoading] = useState(false);

  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [addingRegisterLoading, setRegisterLoading] = useState(false);

  const [editingModalVisible, setEditingModalVisible] = useState(false);
  const [editingRegisterLoading, setEditingRegisterLoading] = useState(false);
  const [editingModalValues, setEditingModalValues] = useState({});

  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [viewingModalValues, setViewingModalValues] = useState({});

  const [deletingRegister, setDeletingRegister] = useState(false);

  const [rows, setRows] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);

  useEffect(() => {
    handleUpdateTable();
  }, []);

  const toggleRegisterVisible = () => {
    setRegisterModalVisible(!registerModalVisible);
  };

  const toggleEditingVisible = () => {
    setEditingModalVisible(!editingModalVisible);
  };

  const toggleViewingVisible = () => {
    setViewModalVisible(!viewModalVisible);
  };
  
  const editRegister = (editingModalValues) => {	
    setEditingModalValues(editingModalValues);
    setEditingModalVisible(true);
  };

  const handleEditRegister = async (e) => {
    setEditingRegisterLoading(true);

    let editObject = {
      ...editingModalValues,
      ...e,
    };
	
    let response = await fetch(
      process.env.test_api + "admin/" + editingModalValues.id,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
		  "Authorization": "Bearer " + props.auth.auth_jwt
        },
        body: JSON.stringify(editObject),
      }
    ).then((response) => {
      setEditingRegisterLoading(false);
      return response;
    });

    let status = {
      type: "error",
      title: "Falha ao atualizar registro",
      message:
        "Não foi possível atualizar o registro. Por favor tente novamente. Error code: " +
        response.status,
    };

    switch (response.status) {
      case 200:
        status.type = "success";
        status.title = "Registro atualizado";
        status.message = "Registro Atualizado com sucesso";
        break;

      default:
        break;
    }

    openNotificationWithIcon(status);

    setEditingModalVisible(false);
    handleUpdateTable();
  };

  const viewRegister = (viewingModalValues) => {
    setViewingModalValues(viewingModalValues);
    toggleViewingVisible();
  };

  const deleteRegister = async (id) => {
    setDeletingRegister(true);

    let response = await fetch(
      process.env.test_api + "admin/" + id,
      {
        method: "DELETE",
		headers: {
			  "Authorization": "Bearer " + props.auth.auth_jwt
		  }
      }
    ).then((response) => {
      setDeletingRegister(false);
      return response;
    });

    let status = {
      type: "error",
      title: "Falha ao apagar o registro",
      message:
        "Não foi possível atualizar o registro. Favor tente novamente. Error code: " +
        response.status,
    };

    switch (response.status) {
      case 204:
        status.type = "success";
        status.title = "Registro apagado";
        status.message = "Registro apagado com sucesso";
        break;

      default:
        break;
    }

    openNotificationWithIcon(status);
    handleUpdateTable();
  };

  const handleUpdateTable = async () => {
    setTableLoading(true);
	
	let dropdownInfo;
	await fetch(
	  process.env.test_api + "afiliado",
	  {
		  headers: {
			  "Authorization": "Bearer " + props.auth.auth_jwt
		  }
	  }
	)
	.then((response) => response.json())
	.then((response) => {		
		dropdownInfo = response.message.data.map(
		  (field) => {								 
			return {
			  id: field.id,
			  name: field.nome,								  
			};
		  }
		)
	});

    fetch(
      process.env.test_api + "admin" ,
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
              options: '',
            };

            return columnField;
          }
        );
        columnsInfo.push({
          title: "Action",
          key: "action",
          render: (record) => {
            const content = (
              <>
                <p>Confirmar?</p>
                <Button
                  type="primary"
                  onClick={(e) => {
                    console.log(e);
                    deleteRegister(record.id);
                  }}
                  danger
                  loading={deletingRegister}
                >
                  Apagar
                </Button>
              </>
            );
            return (
              <>
                <Button onClick={() => viewRegister(record)} size="small">
                  Visualizar
                </Button>
                <Button onClick={() => editRegister(record)} size="small">
                  Editar
                </Button>
                <Popover content={content} trigger="click">
                  <Button size="small">Apagar</Button>
                </Popover>
              </>
            );
          },
          showInGrid: true,
        });
		
		
		columnsInfo = columnsInfo.map(
				(column, index) => {
					if(column.key == 'ativo')
						columnsInfo[index].type = 'yn';
					
					if(column.key == 'afiliado_id'){						
						columnsInfo[index].type = 'options';
						columnsInfo[index].options = dropdownInfo;
					}
					
					return column;
				}			
			)
		
        setRows(response.message.data);
        setTableColumns(columnsInfo);
        setTableLoading(false);
      });
  };

  const handleAddRegister = async (e) => {
    setRegisterLoading(true);

    const rawResponse = await fetch(
      process.env.test_api + "admin",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
		  "Authorization": "Bearer " + props.auth.auth_jwt
        },
        body: JSON.stringify({
          nome: e.nome,
          email: e.email,
          password: e.password,
          ativo: e.ativo,          
          afiliado_id: e.afiliado_id,          
        }),
      }
    );

    let status = {
      type: "error",
      title: "Falha ao adicionar novo usuário",
      message:
        "Não foi possível adicionar um novo usuário. Tente novamente. Código do erro: " +
        rawResponse.status,
    };

    switch (rawResponse.status) {
      case 201:
        status.type = "success";
        status.title = "Novo usuário";
        status.message = "Registro adicionado com sucesso";
        break;

      default:
        break;
    }

    openNotificationWithIcon(status);

    setRegisterLoading(false);
    setRegisterModalVisible(false);
    handleUpdateTable();
  };

  const openNotificationWithIcon = ({ type, title, message }) => {
    notification[type]({
      message: title,
      description: message,
    });
  };

  return (
    <Card title="Admin Users">
      <Row>
        <Col span={24}>
          <Button onClick={toggleRegisterVisible}>Novo Usuário</Button>
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
        title="Adicionar novo Admin"
        visible={registerModalVisible}
        onCancel={toggleRegisterVisible}
        onFormFinish={handleAddRegister}
        submitLoading={addingRegisterLoading}
        columns={tableColumns}
      />
      <SimpleModalForm
        title="Editar Admin"
        visible={editingModalVisible}
        onCancel={toggleEditingVisible}
        onFormFinish={handleEditRegister}
        submitLoading={editingRegisterLoading}
        columns={tableColumns}
        editValues={editingModalValues}
      />
      <SimpleModalQuery
        title="Visualizar Admin"
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

export default connect(mapStateToProps)(AdminPage);
