/* eslint-disable */
import { useState, useEffect, useRef } from "react";
import HistoryList from "./components/history-list";
import useSearchHistory from "./hooks/useSearchHistory";
import debounce from "lodash.debounce";
import "./styles.css";

const DEBOUNCE_DELAY = 500;

export default function App() {
  const [search, setSearch] = useState("");
  const {
    history,
    addHistory,
    undoHistory,
    forceUpdateHistory
  } = useSearchHistory();

  const debounceSearch = useRef(
    debounce((value) => {
      addHistory(value);
    }, DEBOUNCE_DELAY)
  ).current;

  useEffect(() => {
    setSearch(history[history.length - 1] || "");
  }, [history]);

  return (
    <div className="App">
      <h1>Search Something</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          debounceSearch(e.target.value);
        }}
        placeholder={"Type something..."}
      />

      {/* <button type="button" onClick={() => addHistory(search)}>
        Search
      </button> */}

      <button type="button" onClick={undoHistory}>
        Undo
      </button>

      {history.length > 0 &&
        <h3>Search History</h3>
        <HistoryList
          history={history}
          onItemClick={(val) => {
            forceUpdateHistory(val);
          }}
        />
      }
    </div>
  );
}
