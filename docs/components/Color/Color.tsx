/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import ReactTooltip from 'react-tooltip';

/**
 * Interface for Color props
 */
export interface ColorProps {
  children?: any;
  color: string;
  name: string;
}

/**
 *  A Color component.
 */
const Color: React.FC<ColorProps> = (props) => {
  return (
    <div
      data-tip={props.name}
      css={css`
        background-color: ${props.color};
        width: 50px;
        height: 50px;
				border: 1px solid var(--text-main);
				border-radius: 5px;
      `}
    >
      <ReactTooltip backgroundColor="black" />
    </div>
  );
};

export default Color;
