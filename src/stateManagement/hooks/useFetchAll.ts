import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { RootState } from "../../tdd/redux/modules";
import { fetchPopular } from "../modules/fetchPopularReducer";
import { fetchRecent } from "../modules/fetchRecentReducer";
import { fetchDetail } from "../modules/fetchDetailReducer";

export function useFetchPopular() {
  const dispatch = useDispatch();
  const fetchDispatch = useCallback(() => dispatch(fetchPopular()), []);

  useEffect(() => {
    fetchDispatch();
  }, [dispatch]);

  const fetchSelect: any = useSelector((state: RootState) => state.fetch) || [];
  const { loading, error, results } = fetchSelect;
  console.log(loading);
  console.log(error);
  console.log(results);

  return { loading, error, results };
}

export function useFetchRecent() {
  const dispatch = useDispatch();
  const fetchDispatch = useCallback(() => dispatch(fetchRecent()), []);

  useEffect(() => {
    fetchDispatch();
  }, [dispatch]);

  const fetchSelect: any =
    useSelector((state: RootState) => state.fetchRecent) || [];
  const { loading, error, results } = fetchSelect;
  console.log(loading);
  console.log(error);
  console.log(results);

  return { loading, error, results };
}

export function useFetchDetail(id: any) {
  // const { loading, error, results }: ApiProps = DetailApi(stateId);
  // 여기서는 비동기 요청을 하는 '함수' 를 가져온다.
  const dispatch = useDispatch();
  const fetchDispatch = useCallback(() => dispatch(fetchDetail(id)), [
    dispatch
  ]);

  useEffect(() => {
    fetchDispatch();
  }, [dispatch, id]);

  const fetchSelect: any =
    // 여기서는 해당 요청을 처리하는 '리듀서' 자체를 가져온다.
    useSelector((state: RootState) => state.fetchDetailReducer) || [];
  const { loading, error, results } = fetchSelect;
  console.log(id);
  console.log(loading);
  console.log(error);
  console.log(results);

  return { loading, error, results };
}

export const useFetchAll = { useFetchPopular, useFetchRecent, useFetchDetail };
