import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import IntlMessages from '../../components/utility/intlMessages';
import { Link } from 'react-router-dom';
import appActions from '../../redux/app/actions';
import TopbarWrapper from './topbar.style';
import {
  TopbarSearch
} from '../../components/topbar';

const { Header } = Layout;
const { toggleCollapsed } = appActions;

class Topbar extends Component {
  render() {
    const { toggleCollapsed, customizedTheme, locale } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: 'fixed',
      width: '100%',
      height: 70,
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'
          }>
          <div className="isoLeft">
            <button
              className={
                collapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen'
              }
              style={{ color: customizedTheme.textColor }}
              onClick={toggleCollapsed}
            />
          </div>

          
          <ul className="isoRight">
            <li className="isoInputWrapper isoCenterComponent isoHelperWrapper">
                <Link to="/signin">
                  <IntlMessages id="page.addItems" />
                </Link>
            </li>
          </ul>


          <ul className="isoRight">
            <li className="isoSearch">
              <TopbarSearch locale={locale} />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.App.toJS(),
    locale: state.LanguageSwitcher.toJS().language.locale,
    customizedTheme: state.ThemeSwitcher.toJS().topbarTheme,
  }),
  { toggleCollapsed }
)(Topbar);
