import React from "react";

import BSImage from "react-bootstrap/Image";

const Image = (props) => {
  const { name, ...rest } = props;

  return (
    <BSImage
      src={`${process.env.PUBLIC_URL}/images/${name}`}
      fluid
      alt="site"
      {...rest}
    />
  );
};

export default Image;
