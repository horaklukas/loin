import React from 'react';
import styles from './styles';
import Timer from './Timer';

const DEFAULT_MAX_COLUMNS_COUNT = 3;

/**
 * type Props = {
 *   count?: number,
 *   color?: string
 * }
 */

export const LoadingIndicator = (props/*: Props */) => {
  const maxColumnsCount = props.count || DEFAULT_MAX_COLUMNS_COUNT;
  const columnsCount = props.ticks % (maxColumnsCount + 1);
  const columnStyle = styles.column

  if (props.color) {
    columnStyle.backgroundColor = props.color;
  }

  return (
      <div className="indicator">
        {getColumns(columnsCount, columnStyle)}
      </div>
  )
};

const getColumns = (count, style) => {
  let columns = [];

  for (let i = 0; i < count; i++) {
    columns.push(<span className="column" style={style} key={`col${i}`} />);
  }

  return columns;
}

export default Timer(LoadingIndicator);