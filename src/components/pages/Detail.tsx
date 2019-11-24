import React, { useState } from "react";
import { DetailApi } from "../../utils/UseApi";

interface Props {
  id: number;
}

interface ApiProps {
  loading: any;
  error: any;
  results: any;
}

function Detail({ id }: Props) {
  const [stateId, setStateId] = useState(id);
  const { loading, error, results }: ApiProps = DetailApi(stateId);
  console.log(results);
  return <div>detail</div>;
}

export default Detail;
