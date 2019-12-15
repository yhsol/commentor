import React, { useState, useCallback, useEffect } from "react";
import { DetailApi } from "../../utils/UseApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../../stateManagement/modules/fetchDetailReducer";
import { RootState } from "../../tdd/redux/modules";
import { withRouter } from "react-router";
import { useFetchAll } from "../../stateManagement/hooks/useFetchAll";

interface Props {
  id: number;
}

interface ApiProps {
  loading: any;
  error: any;
  results: any;
}

function Detail(props: any) {
  const {
    match: {
      params: { id }
    }
  } = props;
  const parsedId = parseInt(id);
  const [stateId, setStateId] = useState(parsedId);

  const { loading, error, results } = useFetchAll.useFetchDetail(stateId);

  console.log(stateId);
  console.log(loading);
  console.log(error);
  console.log(results);

  return <div>{results.title}</div>;
}

export default withRouter(Detail);
