import React, { Fragment } from "react";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import styles from "./index.less";

const DefaultLayout = (props) => (
  <div className={styles.pageWrapper}>
    <GlobalHeader isMobile={true} appMenu={true} />
    <div className={styles.mainContainer}>
    	{props.children}
    </div>
    <GlobalFooter 
    	links={[
        {
          key: 'politica-privacidade',
          title: 'Política de Privacidade',
          href: '#',
          blankTarget: true,
        },
        {
          key: 'sobre-nos',
          title: 'Sobre nós',
          href: '#',
          blankTarget: true,
        },        
      ]}
      version={
        <Fragment>
        <strong>Version</strong> 1.0
      </Fragment>
      }
      copyright={
        <Fragment>
        	Luminus @ 2020
      	</Fragment>
      }
    />
  </div>
);

export default DefaultLayout;
