import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, changeText, addToList } from "./state/actions";
const CounterPresenter = ({
  count,
  text,
  list,
  onIncrease,
  onDecrease,
  onChangeText,
  onAddToList,
}) => {
  return (
    <div>
      <div style={{ display: "grid", gap: "5px" }}>
        <button onClick={onDecrease}>-</button>
        <div>{count}</div>
        <button onClick={onIncrease}>+</button>
      </div>
      change value :<input value={text} onChange={onChangeText}></input>
      <div>text : {text}</div>
      <div>
        list :
        {list.map((t, idx) => (
          <div key={idx}>{t}</div>
        ))}
      </div>
    </div>
  );
};
const CounterContainer = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.counter);
  const text = useSelector((state) => state.counter.text);
  const list = useSelector((state) => state.counter.list);

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onChangeText = (e) => {
    dispatch(changeText(e.target.value));
  };
  const onAddToList = (text) => dispatch(addToList());
  return (
    <div>
      <CounterPresenter
        count={count}
        text={text}
        list={list}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onChangeText={onChangeText}
        onAddToList={onAddToList}
      />
    </div>
  );
};

const Counter = () => {
  return (
    <div>
      <h2>Counter</h2>
      <CounterContainer />
    </div>
  );
};

export default Counter;
