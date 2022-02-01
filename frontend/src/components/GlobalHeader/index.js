import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.less";
import { Row, Col, Input, Switch, Button, Menu, Avatar, Tooltip } from "antd";
import luminusLogo from "../../assets/luminus_logo.png";
import { WindowsOutlined, MailOutlined } from "@ant-design/icons";
import GlobalMenu from "../GlobalMenu";
import { connect } from "react-redux";

class GlobalHeader extends React.Component {
  constructor(props) {
    super(props);

    if(this.props.auth_jwt.afiliado_id != null && this.props.auth_jwt.afiliado_id > 0){
      this.state = {
        drawerOpen: false,
        childHeaderMenus: [          
          {
            menuName: "Leads",
            link: "lead",
            children: null,
          },          
          {
            menuName: "Relatórios",          
            children: [
              {
                menuName: "Leads",
                link: "relatorio_leads",
                children: null
              },  
              {
                menuName: "Pagamentos",
                link: "relatorio_pagamentos",
                children: null
              },
            ]
          },    
        ],
      };
    }else{
      this.state = {
        drawerOpen: false,
        childHeaderMenus: [
          {
            menuName: "Usuários",
            link: "usuarios",
            children: null,
          },
          {
            menuName: "Afiliados",
            link: "afiliado",
            children: null,
          },
          {
            menuName: "Leads",
            link: "lead",
            children: null,
          },
          {
            menuName: "Pagamentos",
            link: "pagamento",
            children: null,
          },
          {
            menuName: "Relatórios",          
            children: [
              {
                menuName: "Leads",
                link: "relatorio_leads",
                children: null
              },  
              {
                menuName: "Pagamentos",
                link: "relatorio_pagamentos",
                children: null
              },
            ]
          },    
        ],
      };
    }

    

    this.toggleChildMenu = this.toggleChildMenu.bind(this);
    this.getChildHeaderMenus = this.getChildHeaderMenus.bind(this);
    this.hasChildMenus = this.hasChildMenus.bind(this);
  }

  toggleChildMenu() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  getChildHeaderMenus() {
    const childHeaderMenus = this.state.childHeaderMenus;
    const { SubMenu } = Menu;

    if (childHeaderMenus.length < 1) {
      return false;
    }

    let children = childHeaderMenus.map((menu, key) => {
      if (!menu.children) {
        //if there are no children in the menu, render simple button with menu link
        return (
          <Menu.Item className={styles.menuItems} key={key}>
			     <Link className={styles.menuItems} to={menu.link}>{menu.menuName}</Link>
          </Menu.Item>
        );
      }

      let childrenMenu = menu.children.map((child, key) => {
        return (
          <Menu.Item key={key}>
            <Link to={child.link}>{child.menuName}</Link>            
          </Menu.Item>
        );
      });

      return (
        <SubMenu className={styles.menuItems} title={menu.menuName} key={key}>
          {childrenMenu}
        </SubMenu>
      );
    });

    let result = (
      <Row
        gutter={{ xs: 12, sm: 12, md: 24, lg: 24 }}
        className={[styles.childHeader, styles.centerChildrenVertically]}
      >
        <Col span={16}>
          <Menu className={styles.appMenu} mode="horizontal">
            {children}
            <Menu.Item className={styles.menuItems} key="logout">
             <Link className={styles.menuItems} to="login">Logout</Link>
            </Menu.Item>
          </Menu>          
        </Col>        
      </Row>
    );

    return result;
  }

  hasChildMenus() {
    return this.state.childHeaderMenus > 0;
  }

  render() {
    const { t } = this.props;
    return (
      <>
        <Row className={styles.header}>
          <Col span={24}>
            <Row>
              <Col xs={16} sm={16} md={8} lg={4} xl={4}>
                <Link to="/">
					<img
					  src={luminusLogo}
					  alt="Luminus Logo"
					  className={styles.logo}
					/>
				</Link>
              </Col>
              <Col xs={8} sm={8} md={16} lg={20} xl={20}>				
				<Row>
					<Col span={24}>
						{this.props.appMenu ? this.getChildHeaderMenus() : null}
					</Col>
				</Row>
              </Col>
              <GlobalMenu drawerOpen={this.state.drawerOpen} />
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => {  
  return {    
    auth_jwt: state.userReducer,
  };
};

export default connect(mapStateToProps)(GlobalHeader);