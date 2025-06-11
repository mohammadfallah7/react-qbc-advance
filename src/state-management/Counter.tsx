import useCounterStore from "./stores/useCounterStore";

const Counter = () => {
  const { value, increment, reset } = useCounterStore();

  return (
    <div>
      Counter ({value})
      <button onClick={() => increment()} className="btn btn-primary mx-1">
        Increment
      </button>
      <button onClick={() => reset()} className="btn btn-primary">
        Reset
      </button>
    </div>
  );
};

export default Counter;
