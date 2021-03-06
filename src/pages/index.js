import React, { PureComponent } from "react";
import classNames from "classnames";
import DocumentTitle from 'react-document-title';
import { enquireScreen, unenquireScreen } from "enquire-js";
import { Layout } from "antd";
import { ContainerQuery } from 'react-container-query';

import HomePageComponent from "../components/home";
// import GlobalFooter from "../components/home/components/GlobalFooter";

import config from "../config"

import styles from "./index.scss";
import "./index.scss"
const { title, prefix, footer } = config;

const cx = classNames.bind(styles);


const { Content, Footer } = Layout;

const query = {
  "screen-xs": {
    maxWidth: 575
  },
  "screen-sm": {
    minWidth: 576,
    maxWidth: 767
  },
  "screen-md": {
    minWidth: 768,
    maxWidth: 991
  },
  "screen-lg": {
    minWidth: 992,
    maxWidth: 1199
  },
  "screen-xl": {
    minWidth: 1200,
    maxWidth: 1390
  },
  "screen-xxl": {
    minWidth: 1391
  }
};

class IndexPage extends PureComponent {
  constructor(props) {
    super(props);
    this.getPageTitle = "xkef"
    this.state = {
      rendering: true,
    };
  }

  componentDidMount() {
    this.renderRef = requestAnimationFrame(() => {
      this.setState({
        rendering: false,
      });
    });
    this.enquireHandler = enquireScreen(mobile => {

      this.setState({ismobile: mobile || true})
    });
  }


  componentWillUnmount() {
    cancelAnimationFrame(this.renderRef);

    unenquireScreen(this.enquireHandler);
  }

  render() {
    const { rendering , ismobile} = this.state;
    const {

      children,
    } = this.props;

    const classLayoutContainer = cx({
      [`${"mux"}-layout`]: true
    });
    const classLayoutFooter = cx({
      [`mux-layout-footer`]: true
    });
    const classLayoutContent = cx({
      [`mux-layout-layout-content`]: true,
    });
    return (<React.Fragment>
        <DocumentTitle title={"hi :)"}>
          <ContainerQuery query={query}>
          {params => (
            <div className={classNames(params)}>
              <Layout className={classLayoutContainer}>
                <Content>
                  <HomePageComponent className={classLayoutContent} ismobile={this.state.ismobile} />
                </Content>
              </Layout>
            </div>)}
            </ContainerQuery>
      </DocumentTitle>
      </React.Fragment>
    )
  }
}


export default IndexPage;
