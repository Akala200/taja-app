import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Row } from 'antd';
//import PageHeader from '../../components/utility/pageHeader';
//import Box from '../../components/utility/box';
//import LayoutWrapper from '../../components/utility/layoutWrapper';
//import { InputSearch } from '../../components/uielements/input';
//import IntlMessages from '../../components/utility/intlMessages';
import notification from '../../components/notification';
//import YoutubeResult from '../../components/youtubeSearch/result';
//import basicStyle from '../../config/basicStyle';
import actions from '../../redux/youtubeSearch/actions';
import Table from './table.style';


const { youtubeSearch, onPageChange } = actions;

class YoutubeSearch extends Component { 
  onSearch = value => {
    if (value && value.length > 0) {
      this.props.youtubeSearch(value);
    } else {
      notification('error', 'Please type something');
    }
  };
  componentDidMount() {
    this.onSearch(this.props.YoutubeSearch.searcText);
  }
  render() {
    return (
      <Table>
        <table>
          <thead>
            <tr>
              <th/>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            
            <tr>
             <td >ITEMS</td>
              <td />
             <td >Add</td>
            </tr>

            <tr>
             <td >CATEGORIES</td>
              <td />
             <td >Add</td>
            </tr>
            <tr>
             <td >DISCOUNTS</td>
              <td />
             <td >Add</td>
            </tr>
            <tr>
             <td >CHARGES</td>
              <td />
             <td >Add</td>
            </tr>
          </tbody>

          <tfoot>
           
          </tfoot>
        </table>
      </Table>
    );
  }
}
function mapStateToProps(state) {
  return { YoutubeSearch: state.YoutubeSearch.toJS() };
}
export default connect(mapStateToProps, { youtubeSearch, onPageChange })(
  YoutubeSearch
);
