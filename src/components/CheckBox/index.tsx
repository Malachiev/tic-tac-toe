import s from "./CheckBox.module.css";

type Props = {
  register: Function;
};

export const CheckBox: React.FC<Props> = ({ register }) => {
  return (
    <>
      <div className={s.checkbox}>
        <input
          {...register("checkbox", { required: true })}
          type="radio"
          className={s.check}
          id="check1"
          value={"X"}
        />
        <label form="check1" className={s.label}>
          <svg width="50" height="50" viewBox="0 0 100 100">
            <rect
              x="30"
              y="20"
              width="50"
              height="50"
              stroke="#03e9f4"
              fill="none"
            />
            <g transform="translate(0,-952.36218)">
              <path
                d="m 13,983 c 33,6 40,26 55,48 "
                stroke="#03e9f4"
                strokeWidth="3"
                className={s.path}
                fill="none"
              />
              <path
                d="M 75,970 C 51,981 34,1014 25,1031 "
                stroke="#03e9f4"
                strokeWidth="3"
                className={s.path}
                fill="none"
              />
            </g>
          </svg>
          <span>Сross</span>
        </label>
      </div>

      <div className={s.checkbox}>
        <input
          {...register("checkbox", { required: true })}
          type="radio"
          className={s.check}
          id="check2"
          value={"O"}
        />
        <label form="check2" className={s.label}>
          <svg viewBox="0 0 100 100" height="50" width="50">
            <rect
              x="30"
              y="20"
              width="50"
              height="50"
              stroke="#03e9f4"
              fill="none"
            />
            <g transform="translate(0,-952.36216)" id="layer1">
              <path
                id="path4146"
                d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23"
                fill="none"
                stroke="#03e9f4"
                strokeWidth="3"
                className={s.path}
              />
            </g>
          </svg>
          <span>Сircle</span>
        </label>
      </div>
    </>
  );
};

export default CheckBox;
