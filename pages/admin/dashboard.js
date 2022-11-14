import React, { useEffect, useState } from "react";
import PageLoader from "../../components/loader/PageLoader";

const dashboard = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return <>{loading ? <PageLoader /> : <div></div>}</>;
};

export default dashboard;
