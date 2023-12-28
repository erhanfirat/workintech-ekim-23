import { useState } from "react";
import { API } from "../../api/api";

export const REQ_TYPES = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

export const useAxios = (initialValue) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const doRequest = ({ reqType = REQ_TYPES.GET, endpoint, payload }) => {
    setLoading(true);
    API[reqType](endpoint, payload)
      .then((res) => {
        //
        setData(res.data);
      })
      .catch((err) => {
        //
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  return [doRequest, data, loading, error];
};
