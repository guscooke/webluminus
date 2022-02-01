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
import SimpleModalPagamento from "../components/SimpleModalPagamento";
import ExportJsonExcel from 'js-export-excel';

const RelatorioPagamento = (props) => {
  const [pageNum, setPageNum] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [tableLoading, setTableLoading] = useState(false);
  
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [statusRegisterLoading, setStatusRegisterLoading] = useState(false);  
  const [statusModalValues, setStatusModalValues] = useState({});
  const [statusModalLogs, setStatusModalLogs] = useState([]);

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

  const downloadExcel = () => {
	const data = rows;//tabular data
	var option={};
	let dataTable = [];
	if (data) {
	for (let i in data) {
	  if(data){
	    let obj = {
	                 'id': data[i].id,
	                 'Nome': data[i].nome,
	                 'CPF/CNPJ': data[i].cpf,
	                 'Contato': data[i].contato,
	    }
	    dataTable.push(obj);
	  }
	}
	}
	 option.fileName = 'Relatorio - Pagamentos'
	option.datas=[
	{
	  sheetData:dataTable,
	  sheetName:'sheet',
	         sheetFilter:['id', 'Nome', 'CPF/CNPJ', 'Contato'],
	         sheetHeader:['id', 'Nome', 'CPF/CNPJ', 'Contato'],
	}
	];

	var toExcel = new ExportJsonExcel(option); 
	toExcel.saveExcel();        
  };
  
  const updateStatus = async (statusModalValues) => { 
	setStatusModalValues(statusModalValues);
	
	let dropdownInfo;
    await fetch(
	  process.env.test_api + "pagamento/" + statusModalValues.id,
	  {
		  headers: {
			  "Authorization": "Bearer " + props.auth.auth_jwt
		  }
	  }
	)
	.then((response) => response.json())
	.then((response) => {		
		console.log(response.message);
		dropdownInfo = response.message.map(
		  (field) => {								 
			return {
			  comissao_afiliado: field.comissao_afiliado,
			  valor_pagamento: field.valor_pagamento,
			  log_em: field.log_em,								  
			  comentarios: field.comentarios,								  
			};
		  }
		)		
	});
	
	setStatusModalLogs(dropdownInfo);	
	setStatusModalVisible(true);
	
  };
  


  const viewRegister = (viewingModalValues) => {
    setViewingModalValues(viewingModalValues);
    toggleViewingVisible();
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
                  Visualizar Lead
                </Button>                
				<Button onClick={() => updateStatus(record)} size="small">
                  Detalhes
                </Button>
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
      });
  };

  const openNotificationWithIcon = ({ type, title, message }) => {
    notification[type]({
      message: title,
      description: message,
    });
  };

  return (
    <div>
		<Card title="Relatorio - Pagamentos" extra={<Button onClick={() => downloadExcel()}>Export Excel Table</Button>}>
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
		  <SimpleModalQuery
			title="Visualizar Lead"
			visible={viewModalVisible}
			onCancel={toggleViewingVisible}
			columns={tableColumns}
			values={viewingModalValues}
		  />
		  <SimpleModalPagamento
			title="Pagamentos - Detalhes"
			visible={statusModalVisible}
			onCancel={toggleStatusVisible}					
			values={statusModalLogs}			
		  />
		</Card>		
	</div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.userReducer,
  };
};

export default connect(mapStateToProps)(RelatorioPagamento);
