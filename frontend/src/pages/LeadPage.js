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
  Input,
} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import SimpleModalForm from "../components/SimpleModalForm";
import SimpleModalQuery from "../components/SimpleModalQuery";


const LeadPage = (props) => {
  const [pageNum, setPageNum] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [tableLoading, setTableLoading] = useState(false);

  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [addingRegisterLoading, setRegisterLoading] = useState(false);

  const [editingModalVisible, setEditingModalVisible] = useState(false);
  const [editingRegisterLoading, setEditingRegisterLoading] = useState(false);
  const [editingModalValues, setEditingModalValues] = useState({});

  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [statusRegisterLoading, setStatusRegisterLoading] = useState(false);
  const [statusModalValues, setStatusModalValues] = useState({});
  const [statusUploadFiles, setStatusUploadFiles] = useState({});

  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [viewingModalValues, setViewingModalValues] = useState({});

  const [deletingRegister, setDeletingRegister] = useState(false);

  const [rows, setRows] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const [statusColumns, setStatusColumns] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  useEffect(() => {
    handleUpdateTable();
  }, []);

  const toggleRegisterVisible = () => {
    setRegisterModalVisible(!registerModalVisible);
  };

  const toggleEditingVisible = () => {
    setEditingModalVisible(!editingModalVisible);
  };

  const toggleStatusVisible = () => {
    setStatusModalVisible(!statusModalVisible);
  };

  const toggleViewingVisible = () => {
    setViewModalVisible(!viewModalVisible);
  };

  const editRegister = (editingModalValues) => {
    setEditingModalValues(editingModalValues);
    setEditingModalVisible(true);
  };

  const updateStatus = async(statusModalValues) => {
    let fileList;
    await fetch(
      process.env.test_api + "lead/upload/" + statusModalValues.id,
      {
        headers: {
          "Authorization": "Bearer " + props.auth.auth_jwt
        }
      }
    )
    .then((response) => response.json())
    .then((response) => {
      fileList = response.message.map(
        (field) => {
          return {
            uid: field.id,
            name: field.file,
            status: 'done',          
            url: process.env.files + 'uploads/' + field.file,
          };
        }
      )
    });
    
	  setStatusModalValues(statusModalValues);
    setStatusUploadFiles(fileList);
    setStatusModalVisible(true);
  };

  /*const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);      
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');    
  };*/

  const handleEditRegister = async (e) => {
    setEditingRegisterLoading(true);

    let editObject = {
      ...editingModalValues,
      ...e,
    };

    let response = await fetch(
      process.env.test_api + "lead/" + editingModalValues.id,
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
      case 204:
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

    setEditingModalVisible(false);
    handleUpdateTable();
  };

  const handleStatusRegister = async (e) => {
    setStatusRegisterLoading(true);

	let editObject = {
      ...statusModalValues,
      ...e,
    };

   const response = await fetch(
      process.env.test_api + "lead/status/" + statusModalValues.id,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
		  "Authorization": "Bearer " + props.auth.auth_jwt
        },
        body: JSON.stringify({
          lead_id: e.lead_id,
		      status: e.status,
          comentarios: e.comentarios,
          motivo: e.motivo,
          lembrete_retorno: e.lembrete_retorno,
          valor_cotacao: e.valor_cotacao
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
      case 204:
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
	setStatusRegisterLoading(false);
    setStatusModalVisible(false);
    handleUpdateTable();
  };

  const viewRegister = (viewingModalValues) => {
    setViewingModalValues(viewingModalValues);
    toggleViewingVisible();
  };

  const deleteRegister = async (id) => {
    setDeletingRegister(true);

    let response = await fetch(
      process.env.test_api + "lead/" + id,
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

  const handleUpdateTable =  async() => {
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
      process.env.test_api + "lead",
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
              showInGrid: response.message.properties.show.includes(field),
              /*...getColumnSearchProps('name')*/
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
				        <Button onClick={() => updateStatus(record)} size="small">
                  Atualiza Status
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
					if(column.key == 'status')
						columnsInfo[index].type = 'yn';

					if(column.key == 'whatsapp')
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

		let columnsStatus = [
			{
			  title: "Status",
			  dataIndex: "status",
			  key: "status",
			  type: "options",
			  required: true,
			  editable: true,
			  options: [
					{
						id: "Novo",
						name: "Novo",
					},
					{
						id: "Contato Inicial",
						name: "Contato Inicial",
					},
					{
						id: "Cotação Encaminhada",
						name: "Cotação Encaminhada",
					},
					{
						id: "Em Emissão",
						name: "Em Emissão",
					},
					{
						id: "Implantado",
						name: "Implantado",
					},
					{
						id: "Declinado",
						name: "Declinado",
					}
				]
			},
			{
			  title: "Comentarios",
			  dataIndex: "comentarios",
			  key: "comentarios",
			  type: "String",
			  required: true,
			  editable: true
			},
			{
			  title: "Upload",
			  dataIndex: "upload",
			  key: "upload",
			  type: "upload",
			  required: true,
			  editable: true
			},
			{
			  title: "Lembrete Retorno",
			  dataIndex: "lembrete",
			  key: "lembrete",
			  type: "date",
			  required: true,
			  editable: true
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

  const handleAddRegister = async (e) => {
    setRegisterLoading(true);

    const rawResponse = await fetch(
      process.env.test_api + "lead",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
		  "Authorization": "Bearer " + props.auth.auth_jwt
        },
        body: JSON.stringify({
          nome: e.nome,
          cpf: e.cpf,
          endereco: e.endereco,
          cidade: e.cidade,
          estado: e.estado,
          cep: e.cep,
          email: e.email,
          telefone_fixo: e.telefone_fixo,
          telefone_celular: e.telefone_celular,
          whatsapp: e.whatsapp,
          status: e.status,
          detalhes: e.detalhes,
          afiliado_id: e.afiliado_id,
        }),
      }
    );

    let status = {
      type: "error",
      title: "Falha ao adicionar novo lead",
      message:
        "Não foi possível adicionar um novo lead. Tente novamente. Código do erro: " +
        rawResponse.status,
    };

    switch (rawResponse.status) {
      case 201:
        status.type = "success";
        status.title = "Novo lead";
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
    <Card title="Leads">
      <Row>
        <Col span={24}>
          <Button onClick={toggleRegisterVisible}>Novo Lead</Button>
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
        title="Adicionar novo Lead"
        visible={registerModalVisible}
        onCancel={toggleRegisterVisible}
        onFormFinish={handleAddRegister}
        submitLoading={addingRegisterLoading}
        columns={tableColumns}
      />
      <SimpleModalForm
        title="Editar Lead"
        visible={editingModalVisible}
        onCancel={toggleEditingVisible}
        onFormFinish={handleEditRegister}
        submitLoading={editingRegisterLoading}
        columns={tableColumns}
        editValues={editingModalValues}
      />
	  <SimpleModalForm
        title="Novo Status"
        visible={statusModalVisible}
        onCancel={toggleStatusVisible}
        onFormFinish={handleStatusRegister}
        submitLoading={statusRegisterLoading}
        columns={statusColumns}
        statusValues={statusModalValues}
        fileList={statusUploadFiles}
        authJWT={props.auth.auth_jwt}
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

export default connect(mapStateToProps)(LeadPage);
