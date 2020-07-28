import React from "react";
import {connect} from "react-redux";
import "./Page1.css";
import Table1 from './Table1'
import Recurrence from './Recurrence'
import Search1 from './Search1'
import {ADD_OBJ_PAGE_1 , REMOVE_OBJ_PAGE_1} from '../Store/actions'

function Page1(props) {
  return (
    <div className="page1">
      < Search1 />
      <div className='tablediv' >
      <Table1 data={props.data} />
      <Recurrence />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { 
      data : state.Page1.obj
  };
};

const mapDispatchToProps = dispatch => {
  return {
      ADD_ONE:(data)=>dispatch({type:ADD_OBJ_PAGE_1,data}),
      REMOVE_ONE:(data)=> dispatch({type:REMOVE_OBJ_PAGE_1,data}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1);
