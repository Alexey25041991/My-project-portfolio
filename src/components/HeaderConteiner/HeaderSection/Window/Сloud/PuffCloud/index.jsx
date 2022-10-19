import React from "react";
import { observer } from "mobx-react";

// import { store } from '../../../../store';

import { getRandomArra } from "../../../../../common/utils";

import { PuffCloudPattern } from "./style";

const PuffCloud = observer(({ dropAmount, leftMin, leftMax }) => {
  return getRandomArra(dropAmount, leftMin, leftMax).map((itemPuff, i) => (
    <PuffCloudPattern key={i} top={itemPuff.top} left={itemPuff.left} />
  ));
});

export default PuffCloud;
