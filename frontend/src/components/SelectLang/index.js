import React, { PureComponent } from "react";
import { Menu, Avatar } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import HeaderDropdown from "../HeaderDropdown";
import styles from "./index.less";

export default class SelectLang extends PureComponent {
  changeLang = ({ key }) => {
    setLocale(key);
  };

  render() {
    const { className } = this.props;
    const selectedLang = "en-US";
    const locales = ["en-US", "pt-BR"];
    const languageLabels = {
      "en-US": "English",
      "pt-BR": "Português",
    };
    const languageIcons = {
      "en-US": (
        <Avatar
          style={{ width: 24, height: 24, marginRight: 12 }}
          src="https://image.flaticon.com/icons/svg/551/551953.svg"
          alt="EN-US"
        />
      ),
      "pt-BR": (
        <Avatar
          style={{ width: 24, height: 24, marginRight: 12 }}
          src="https://image.flaticon.com/icons/svg/197/197386.svg"
          alt="PT-BR"
        />
      ),
    };
    const langMenu = (
      <Menu
        className={styles.menu}
        selectedKeys={[selectedLang]}
        onClick={this.changeLang}
      >
        {locales.map((locale) => (
          <Menu.Item key={locale}>
            <span role="img" aria-label={languageLabels[locale]}>
              {languageIcons[locale]}
            </span>{" "}
            {languageLabels[locale]}
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <HeaderDropdown overlay={langMenu} placement="bottomRight">
        <span className={styles.dropDown}>
          <Avatar
            style={{ background: "rgb(235, 238, 243, 0.5)", color: "#7887a9" }}
            icon={<GlobalOutlined />}
            title={"Title"}
          />
        </span>
      </HeaderDropdown>
    );
  }
}
