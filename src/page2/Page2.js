import React from "react";
import Table2 from './Table2'
import Search2 from './Search2'
import { ADD_OBJ_PAGE_2, REMOVE_OBJ_PAGE_2 } from "../Store/actions";
import {connect} from "react-redux";


function Page2(props) {
  return (
    <div>
      <Search2 />
      <Table2 data={props.data} />
    </div>
  );
}


const mapStateToProps = state => {
  return { 
      data : state.Page2.obj
  };
};

const mapDispatchToProps = dispatch => {
  return {
      ADD_ONE:(data)=>dispatch({type:ADD_OBJ_PAGE_2,data}),
      REMOVE_ONE:(data)=> dispatch({type:REMOVE_OBJ_PAGE_2,data}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page2);
