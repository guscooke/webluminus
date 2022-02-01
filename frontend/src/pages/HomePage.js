import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Table,
  Form,
  Button,
  Popover,
  Card,
  notification,
  Space,
  DatePicker,
  Select,
} from "antd";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const HomePage = (props) => {

	const [form] = Form.useForm();
	const { RangePicker } = DatePicker;

	const [afiliados, setAfiliados] = useState([]);

	const [afiliado, setAfiliado] = useState('');
	const [range, setRange] = useState('');
	
	const [leadsAfiliado, setLeadsAfiliado] = useState([]);	
	const [leadsStatus, setLeadsStatus] = useState([]);	
	const [pagamentosStatus, setPagamentosStatus] = useState([]);	

	useEffect(() => {
		loadGraphs();
	}, [afiliado, range]);

	const onFinish = async(values) => {		

		if(typeof(values.afiliado) != "undefined"){
			let aux_afiliado = 'afiliado='+values.afiliado+'&';						
			setAfiliado(aux_afiliado);			
			console.log('dentro', afiliado);
		}

		if(typeof(values.range) != "undefined"){
			let aux_range = 'data_ini='+values.range[0].format('L')+'&data_fim='+values.range[1].format('L');
			setRange(aux_range);			
		}
	};	
	
	let dropdownInfo;
	const loadGraphs = async() => {					
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

		setAfiliados(dropdownInfo);

		loadLeadsAfiliado();
		loadLeadsStatus();
		loadPagamentosStatus();
	};
	
	const loadLeadsAfiliado = async () => {
		await fetch(
		  process.env.test_api + "admin/leadsafiliados?" + afiliado + range ,
		  {
			  headers: {
				  "Authorization": "Bearer " + props.auth.auth_jwt
			  }
		  }
		)
		  .then((response) => response.json())
		  .then((response) => {
			let columnsInfo = response.message.map(
			  (field) => {
				return {
				  name: field.nome,
				  data: [field.leads],
				};
			  }
			);
			
			let options = {			  
				chart: {
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false,
					type: 'bar'
				},
				colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
				title: {
					text: ''
				},
				tooltip: {
					pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
				},
				accessibility: {
					point: {
						valueSuffix: '%'
					}
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: false
						},
						showInLegend: true
					}
				},
				xAxis: {
			        categories: [
			            'Leads'
			        ],
			        crosshair: true
			    },
				credits: {
					enabled: false
				},
				series: columnsInfo
				
			}
			
			setLeadsAfiliado(options);			
		  });
	  };
	  
	const loadLeadsStatus = async () => {
		await fetch(
		  process.env.test_api + "admin/leadsstatus?" + afiliado + range,
		  {
			  headers: {
				  "Authorization": "Bearer " + props.auth.auth_jwt
			  }
		  }
		)
		  .then((response) => response.json())
		  .then((response) => {			
			let columnsInfo = response.message.map(
			  (field) => {
				  if(field.status != 'Detalhes'){
					if(field.status == 'Declinado'){
						return {
						  y: field.qty,
						  name: field.status,
						  drilldown: field.status
						};
					}else{
						return {
						  y: field.qty,
						  name: field.status,
						  drilldown: null
						};
					}  
				  }else{
					  return;
				  }
			  }
			);
			let detalhesInfo = response.message.map(
			  (field) => {
				  if(field.status == 'Detalhes'){					
					return [					  
					  field.motivo,
					  field.qty
					];
				  }else{
					  return false;
				  }
			  }
			);
			
			let options = {			  
				chart: {
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false,
					type: 'pie'
				},
				colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
				title: {
					text: ''
				},
				tooltip: {
					pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
				},
				accessibility: {
					point: {
						valueSuffix: '%'
					}
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: false
						},
						showInLegend: true
					}
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'Total',
					colorByPoint: true,
					data: columnsInfo
				}],
				drilldown: {
					series: [
						{
							name: "Declinado",
							id: "Declinado",
							data: [ detalhesInfo ]
						}
					]
				}
			}
			
			setLeadsStatus(options);			
		  });
	  };
	  
	const loadPagamentosStatus = async () => {
		await fetch(
		  process.env.test_api + "admin/pagamentosstatus?" + afiliado + range,
		  {
			  headers: {
				  "Authorization": "Bearer " + props.auth.auth_jwt
			  }
		  }
		)
		  .then((response) => response.json())
		  .then((response) => {
			let columnsInfo = response.message.map(
			  (field) => {
				return {
				  name: field.nome,
				  y: field.total,
				};
			  }
			);
			
			let options = {			  
				chart: {
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false,
					type: 'pie'
				},
				colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
				title: {
					text: ''
				},
				tooltip: {
					pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
				},
				accessibility: {
					point: {
						valueSuffix: '%'
					}
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: false
						},
						showInLegend: true
					}
				},
				credits: {
					enabled: false
				},
				series: [{
					name: 'Pagamentos',
					colorByPoint: true,
					data: columnsInfo
				}]
			}
			
			setPagamentosStatus(options);			
		  });
	  };

	if(props.auth.afiliado_id != null && props.auth.afiliado_id > 0){
		return (
			<Card title="Dashboard Afiliado">
			  <Row>
				<Col xs={24} xl={8}>
				  <Card title="Leads por Afiliado">
					<HighchartsReact
						highcharts={Highcharts}
						options={leadsAfiliado}
					  />
				  </Card>
				</Col>
				<Col xs={24} xl={8}>
				  <Card title="Status Leads">
					<HighchartsReact
						highcharts={Highcharts}
						options={leadsStatus}
					  />
				  </Card>
				</Col>
				<Col xs={24} xl={8}>
				  <Card title="Pagamentos por Lead">
					<HighchartsReact
						highcharts={Highcharts}
						options={pagamentosStatus}
					  />
				  </Card>
				</Col>
			  </Row>
			</Card>
		);
	}else{		
		return (
			<Card title="Dashboard">
			  	<Form
			      form={form}
			      name="advanced_search"
			      onFinish={onFinish}
			    >
			      <Row gutter={24}>
			      	<Col>
			      		<Form.Item name="afiliado">
				      		<Select					        
						        placeholder="Afiliado"					        
						    >
						        {afiliados.map((item, key) => (
						          <Select.Option key={item.id} value={item.id}>
						            {item.name}
						          </Select.Option>
						        ))}
						    </Select>
						</Form.Item>
			      	</Col>
			      	<Col>
			      		<Form.Item name="range"><RangePicker /></Form.Item>
			      	</Col>
			      	<Col>
						<Button type="primary" htmlType="submit">
							Enviar
						</Button>
			      	</Col>
			      </Row>
			      <Row>
			        <Col span={24} style={{ textAlign: 'right' }}>
			          
			        </Col>
			      </Row>
			    </Form>
			  <Row>
				<Col xs={24} xl={8}>
				  <Card title="Leads por Afiliado">
					<HighchartsReact
						highcharts={Highcharts}
						options={leadsAfiliado}
					  />
				  </Card>
				</Col>
				<Col xs={24} xl={8}>
				  <Card title="Status Leads">
					<HighchartsReact
						highcharts={Highcharts}
						options={leadsStatus}
					  />
				  </Card>
				</Col>
				<Col xs={24} xl={8}>
				  <Card title="Pagamentos por Lead">
					<HighchartsReact
						highcharts={Highcharts}
						options={pagamentosStatus}
					  />
				  </Card>
				</Col>
			  </Row>
			</Card>
		);	
	}
	
};

const mapStateToProps = (state) => {
  return {
    auth: state.userReducer,
  };
};

export default connect(mapStateToProps)(HomePage);
