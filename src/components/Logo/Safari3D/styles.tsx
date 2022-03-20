import styled from "@emotion/styled";

type CircleLine = {
  num: number;
};
export const Safari3DBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .safari {
    position: relative;
    width: 300px;
    height: 300px;
    background: #fff;
    border-radius: 80px;
  }
  .circle_lines {
    position: absolute;
    inset: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#1ec9ff, #2971e7);
  }
`;
export const CircleLine = styled.span<CircleLine>`
  position: absolute;
  width: 2px;
  height: 24px;
  background: #fff;
  transform: translateY(-100px) rotate(calc(10deg * ${(props) => props.num}));
  transform-origin: 1px 110px;
  transition: 0.5s;
`;
