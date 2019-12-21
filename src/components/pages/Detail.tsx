import React, { useState, useCallback, useEffect } from "react";
import { DetailApi } from "../../utils/UseApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../../stateManagement/modules/fetch/fetchDetailReducer";
import { RootState } from "../../tdd/redux/modules";
import { withRouter, RouteComponentProps } from "react-router";
import { useFetchAll } from "../../stateManagement/hooks/useFetchAll";

interface DetailProps extends RouteComponentProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
  onDecreaseBy: (diff: number) => void;
  match: any;
}

function Detail({
  match,
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
  onDecreaseBy
}: any) {
  const {
    params: { id }
  } = match;
  console.log(match);
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
