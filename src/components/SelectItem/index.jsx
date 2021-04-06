import React, { useState, useRef, useLayoutEffect } from 'react';

import { ContentWrapper } from './ContentWrapper';

export const SelectItem = ({
  size,
  tooltipPortalContainer,
  tooltipTargetContainer,
  children,
}) => {
  const contentRef = useRef(null);
  const [overflow, setOverflow] = useState(false);

  const detectOverflow = (e) => e.offsetWidth < e.scrollWidth;
  const isObject = (element) => typeof element === 'object';

  useLayoutEffect(() => {
    const contentCurrent = contentRef.current;
    if (contentCurrent && detectOverflow(contentCurrent) !== overflow) {
      setOverflow(detectOverflow(contentCurrent));
    }
  }, [children, tooltipTargetContainer]);

  const renderChild = (key) => {
    return (
      <ContentWrapper
        key={key}
        ref={contentRef}
        tooltip={''}
        container={tooltipPortalContainer}
        target={tooltipTargetContainer?.current}
      >
        {children}
      </ContentWrapper>
    );
  };

  return <>{renderChild(children)}</>;
};
