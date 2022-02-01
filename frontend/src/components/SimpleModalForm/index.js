import React from "react";
import { Modal, Form, Input, InputNumber, Select, Button, DatePicker, Upload } from "antd";

export default class SimpleModalForm extends React.Component {
  constructor(props) {
    super(props);

    this.formRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      setTimeout(() => {
        this.formRef.current.resetFields();
        if (this.formRef.current) {          
          this.formRef.current.setFieldsValue(this.props.editValues);
        }
      }, 100);
    }
  }

  render(props) {
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };

	const { Option } = Select;

	const fieldType = (type, options, name) => {

    let uploadProps = {};
    
    if(type == "upload"){
      console.log(this.props);
      uploadProps = {
        name: 'file',
        action: process.env.test_api + "lead/upload/" + this.props.statusValues.id,
        headers: {
          authorization: "Bearer " + this.props.authJWT,
        },
        fileList: this.props.fileList
      };  
    }

		switch(type) {
			case "Integer": return <InputNumber />;
			case "date": return <DatePicker />;
			case "upload": return <Upload {...uploadProps}><Button>Upload</Button></Upload>;
			case "hidden": return <Input type="text" type="hidden" />;
			case "yn": return <Select><Option value="S">Sim</Option><Option value="N">Não</Option></Select>;
			case "options": 
				let item = '';
				if(name == 'status'){
					item = <Select defaultValue={this.props.statusValues.status} >
							{
								options.map((value, index) => {
									return <Option key={value.id} value={value.id}>{value.name}</Option>;
								})
							}
							</Select>;
				}else{
					item = <Select>
							{
								options.map((value, index) => {
									return <Option key={value.id} value={value.id}>{value.name}</Option>;
								})
							}
							</Select>;
				}
				
				return item;
			default: return <Input />;
		}
	}

    return (
      <Modal
        title={this.props.title}
        visible={this.props.visible}
        onCancel={this.props.onCancel}
        footer={null}
      >
        <Form
          {...layout}
          name="basic"
          onFinish={this.props.onFormFinish}
          ref={this.formRef}
        >
          {this.props.columns.map((column, key) => {
            if (column.editable) {
				let required = null;
			  if(column.type == 'upload' || column.type == 'date'){
				  required = false;
			  }
              return (
                <Form.Item
                  label={column.title}
                  name={column.key}
                  rules={[
                    {
                      required: required != null ? required : column.required,
                      message: "Please fill this field!",
                    },
                  ]}
                  key={key}
                >
				          {fieldType(column.type, column.options, column.key)}
                </Form.Item>
              );
            }else if(!column.editable && column.type == 'hidden'){
			  return (
				<Form.Item label={column.key} key={key} noStyle>
					{fieldType(column.type, column.options)}
				</Form.Item>
              );
			}
          })}
		  <Form.Item
			noStyle
			shouldUpdate={(prevValues, currentValues) => prevValues.status !== currentValues.status}
		  >
			{({ getFieldValue }) => {
			  return getFieldValue('status') === 'Declinado' ? (
				<Form.Item name="motivo" label="Motivo" rules={[{ required: true }]}>
					<Select>
						<Option key='Achou Caro' value='Achou Caro'>Achou Caro</Option>
						<Option key='Dados Cadastrais Inválidos' value='Dados Cadastrais Inválidos'>Dados Cadastrais Inválidos</Option>
						<Option key='Cliente não responde mais' value='Cliente não responde mais'>Cliente não responde mais</Option>
						<Option key='Fora das regras de contratação' value='Fora das regras de contratação'>Fora das regras de contratação</Option>
						<Option key='Cliente sem interesse' value='Cliente sem interesse'>Cliente sem interesse</Option>
						<Option key='Rede incompatível' value='Rede incompatível'>Rede incompatível</Option>
					</Select>
				</Form.Item>
			  ) : getFieldValue('status') === 'Cotação Encaminhada' ? (
				<Form.Item name="valor_cotacao" label="Valor da Cotação" rules={[{ required: true }]}>
					<InputNumber />
				</Form.Item>
			  ) : null;
			}}
		  </Form.Item>
          <Form.Item label="srno" noStyle>
            <Input type="text" type="hidden" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              loading={this.props.submitLoading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
