import React, { useState, useCallback, useEffect } from "react";
import { DetailApi } from "../../utils/UseApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../../stateManagement/modules/fetchDetailReducer";
import { RootState } from "../../tdd/redux/modules";
import { withRouter } from "react-router";

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

  // const { loading, error, results }: ApiProps = DetailApi(stateId);
  // 여기서는 비동기 요청을 하는 '함수' 를 가져온다.
  const dispatch = useDispatch();
  const fetchDispatch = useCallback(() => dispatch(fetchDetail(stateId)), [
    dispatch
  ]);

  useEffect(() => {
    fetchDispatch();
  }, [dispatch, stateId]);

  const fetchSelect: any =
    // 여기서는 해당 요청을 처리하는 '리듀서' 자체를 가져온다.
    useSelector((state: RootState) => state.fetchDetailReducer) || [];
  const { loading, error, results } = fetchSelect;
  console.log(stateId);
  console.log(loading);
  console.log(error);
  console.log(results);

  return <div>{results.title}</div>;
}

export default withRouter(Detail);
