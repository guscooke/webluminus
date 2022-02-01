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
import SimpleModalForm from "../../components/SimpleModalForm";
import SimpleModalQuery from "../../components/SimpleModalQuery";

const ExpeditePage = (props) => {
  const [tablePagination, setTablePagination] = useState({
    current: 1,
    pageSize: 10,
    total: undefined,
  });
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

  const [apiPath, setApiPath] = useState(undefined);

  const visibleColumns = [
    "srno",
    "closed",
    "type",
    "shift",
    "part_number",
    "quantity",
    "attention",
    "uom",
    "action",
  ];

  useEffect(() => {
    const stateApiPath = props.environment.environment.apiEndpointRoot;
    setApiPath(apiPath);
  }, []);

  useEffect(() => {
    if (props.environment.environment.apiEndpointRoot != apiPath) {
      console.log("environment props changed");
      const stateApiPath = props.environment.environment.apiEndpointRoot;
      setApiPath(stateApiPath);
    }
  }, [props.environment.environment.apiEndpointRoot]);

  useEffect(() => {
    if (apiPath == undefined) {
      console.warn("Couldn't update table. No api path defined yet!");
      return;
    }

    handleUpdateTable();
  }, [apiPath]);

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
      customer: props.auth.userCustomer,
      location: props.auth.userLocation,
    };

    let response = await fetch(
      apiPath + "expedite/expedite/" + editingModalValues.srno,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(editObject),
      }
    ).then((response) => {
      setEditingRegisterLoading(false);
      return response;
    });

    let status = {
      type: "error",
      title: "Failed to edit register",
      message:
        "We couldn't edit that register. Please try again later. Error code: " +
        response.status,
    };

    switch (response.status) {
      case 204:
        status.type = "success";
        status.title = "Register edited";
        status.message = "Register edited successfully";
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

  const deleteRegister = async (srno) => {
    setDeletingRegister(true);

    let response = await fetch(
      process.env.test_api + "expedite/expedite/" + srno,
      {
        method: "DELETE",
      }
    ).then((response) => {
      setDeletingRegister(false);
      return response;
    });

    let status = {
      type: "error",
      title: "Failed to delete register",
      message:
        "We couldn't delete that register. Please try again later. Error code: " +
        response.status,
    };

    switch (response.status) {
      case 204:
        status.type = "success";
        status.title = "Register deleted";
        status.message = "Register deleted successfully";
        break;

      default:
        break;
    }

    openNotificationWithIcon(status);
    handleUpdateTable();
  };

  const handleUpdateTable = (pagination = tablePagination) => {
    setTableLoading(true);
    console.log(
      "trying to update table with endpoint:",
      apiPath + "expedite/expedite"
    );
    fetch(
      apiPath +
        "expedite/expedite/?" +
        new URLSearchParams({
          page: pagination.current,
          per_page: pagination.pageSize,
        })
    )
      .then((response) => response.json())
      .then((response) => {
        let columnsInfo = Object.keys(response.fields.properties).map(
          (field) => {
            let columnField = {
              title: response.fields.properties[field].description
                ? response.fields.properties[field].description
                : field,
              dataIndex: field,
              key: field,
              editable:
                response.fields.properties[field].example !== "readonly"
                  ? true
                  : false,
              required: response.fields.required.includes(field),
              type: response.fields.properties[field].type,
              showInGrid: visibleColumns.includes(field),
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
                <p>Are you sure?</p>
                <Button
                  type="primary"
                  onClick={(e) => {
                    console.log(e);
                    deleteRegister(record.srno);
                  }}
                  danger
                  loading={deletingRegister}
                >
                  Confirm
                </Button>
              </>
            );
            return (
              <>
                <Button onClick={() => viewRegister(record)} size="small">
                  View
                </Button>
                <Button onClick={() => editRegister(record)} size="small">
                  Edit
                </Button>
                <Popover content={content} trigger="click">
                  <Button size="small">Delete</Button>
                </Popover>
                <Button onClick={() => alert("TBD")} size="small">
                  Bill of Lading
                </Button>
              </>
            );
          },
          showInGrid: true,
        });

        setRows(response.data);
        setTableColumns(columnsInfo);
        setTableLoading(false);
        setTablePagination({
          ...pagination,
          total: response.total,
        });
      });
  };

  const handleAddRegister = async (e) => {
    setRegisterLoading(true);

    const rawResponse = await fetch(apiPath + "expedite/expedite/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...e,
        customer: props.auth.userCustomer,
        location: props.auth.userLocation,
      }),
    });

    let status = {
      type: "error",
      title: "Failed to add new register",
      message:
        "We couldn't add a new register. Please try again later. Error code: " +
        rawResponse.status,
    };

    switch (rawResponse.status) {
      case 201:
        status.type = "success";
        status.title = "New register added";
        status.message = "New register added successfully";
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
    <Card title="Add-on/Expedite">
      <Row>
        <Col span={24}>
          <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
            <Button onClick={toggleRegisterVisible}>
              Create a new register
            </Button>
            <Table
              columns={tableColumns.filter(
                (column) => column.showInGrid === true
              )}
              dataSource={rows}
              loading={tableLoading}
              size="middle"
              rowKey="srno"
              pagination={tablePagination}
              onChange={handleUpdateTable}
            />
          </Space>
        </Col>
      </Row>
      <SimpleModalForm
        title="Adding new Register"
        visible={registerModalVisible}
        onCancel={toggleRegisterVisible}
        onFormFinish={handleAddRegister}
        submitLoading={addingRegisterLoading}
        columns={tableColumns}
      />
      <SimpleModalForm
        title="Editing Register"
        visible={editingModalVisible}
        onCancel={toggleEditingVisible}
        onFormFinish={handleEditRegister}
        submitLoading={editingRegisterLoading}
        columns={tableColumns}
        editValues={editingModalValues}
      />
      <SimpleModalQuery
        title="Viewing Register"
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
    auth: state.authReducer,
    environment: state.environmentReducer,
  };
};

export default connect(mapStateToProps)(ExpeditePage);
