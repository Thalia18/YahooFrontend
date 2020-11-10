import styled from "styled-components";

export const NavBar = styled.div`
  // border: blue solid;
  height: 6em;
  background-color: #dae5ed;
  padding-top: 1.2em;
  .fControl {
    width: 50%;
    border-radius: 8px;
  }
`;
export const NvForm = styled.a`
  width: 75%;
`;
export const NbLink = styled.a`
  font-size: 1.1em;
  color: #283049;
`;
export const Btn = styled.a`
  --hover: #276d9b;
  --color: #283049;
  font-weight: 600;
  font-size: 15px;
  background: var(--color);
  color: #ffff;
  padding: 0.3em 0.5em;
  border-color: var(--color);
  border-width: 0.2em;
  border-style: solid;
  border-radius: 8px;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 2em var(--hover);
    border-color: var(--hover);
    color: #ffff;
    -webkit-transform: translateY(-0.1em);
    transform: translateY(-0.1em);
  }
`;
export const Collap = styled.div`
  margin-left: 25em;
  // border: red solid;
  width: 100%;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`;
