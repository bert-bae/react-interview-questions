const HistoryList = ({ history, onItemClick }) => {
  return (
    <ul>
      {history.map((item, i) => {
        return (
          <li
            className="clickable"
            onClick={() => {
              onItemClick(item);
            }}
            key={i}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default HistoryList;
