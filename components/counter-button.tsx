interface CounterProps {
  quantity: number;
  increase: () => void;
  decrease: () => void;
}

export const CounterButton: React.FC<CounterProps> = ({
  quantity = 0,
  increase,
  decrease,
}) => {
  return (
    <div className="custom-number-input h-10 w-32">
      <div
        className="
          flex
          flex-row
          h-10
          w-full
          rounded-lg
          relative
          bg-transparent
          mt-1
        "
      >
        <button
          data-action="decrement"
          className="
            bg-neutral-100
            text-white
            hover:text-white/80
            hover:bg-neutral-100/80
            h-full
            w-20
            rounded-l
            cursor-pointer
            outline-none
          "
          onClick={decrease}
        >
          <span className="m-auto text-2xl font-thin text-black">-</span>
        </button>
        <input
          type="number"
          className="
            outline-none
            focus:outline-none
            text-center
            w-full
            bg-white
            font-semibold
            text-md
            text-black
            focus:text-black
            md:text-basecursor-default
            flex
            items-center
            border
            border-neutral-100
          "
          name="custom-input-number"
          value={quantity}
        ></input>
        <button
          data-action="increment"
          className="
            bg-neutral-100
            text-white
            hover:text-white/80
            hover:bg-neutral-100/80
            h-full
            w-20
            rounded-r
            cursor-pointer
          "
          onClick={increase}
        >
          <span className="m-auto text-2xl font-thin text-black">+</span>
        </button>
      </div>
    </div>
  );
};
