import React from "react";
import useCredits from "../../../hooks/useCredits";
import Carousel from "../../../components/Carousel/carousel";

const Recommendation = ({ type, id }: { type: string; id: string }) => {
  const { data, isLoading, error } = useCredits(
    `/${type}/${id}/recommendations`
  );

  return (
    <Carousel
      title="Recommendations"
      data={data?.results}
      loading={isLoading}
      endpoint={type}
    />
  );
};

export default Recommendation;
