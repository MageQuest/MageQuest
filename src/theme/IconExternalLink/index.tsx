/**
 * MageQuest - https://magequest.io
 * Copyright © MageQuest 2021-present. All rights reserved.
 * See LICENSE file for details.
 */

import React from 'react';
import type {Props} from '@theme/IconExternalLink';
import Open from "pixelarticons/svg/open.svg";
import styles from './styles.module.css';

const IconExternalLink = ({
  width = 18,
  height = 18,
}: Props): JSX.Element => {
  return (
      <Open width={width} height={height} className={styles.iconExternalLink}/>
  );
};

export default IconExternalLink;
