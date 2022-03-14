import { useState } from "react";

const useSearchHistory = () => {
  const [history, setHistory] = useState([]);

  const addHistory = (item) => {
    setHistory((prev) => [...prev, item]);
  };

  const undoHistory = () => {
    const newHistory = history;
    newHistory.pop();
    setHistory([...newHistory]);
  };

  const forceUpdateHistory = (item) => {
    const itemIndex = history.indexOf(item);

    if (itemIndex === -1) {
      return;
    }

    setHistory((prev) => {
      return prev.slice(0, itemIndex + 1);
    });
  };

  return {
    history,
    addHistory,
    undoHistory,
    forceUpdateHistory
  };
};

export default useSearchHistory;
