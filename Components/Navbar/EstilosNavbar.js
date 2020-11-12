import styled from "styled-components";

export const NavBar = styled.div`
  font-weight: 600;
  font-size: 1.1em;
  height: 6em;
  background-color: #dae5ed;
  padding-top: 1.2em;
`;
export const Btn = styled.button`
  color: white;
  background: #283049;
  padding: 0.15em 0.35em;
  border-color: #283049;
  border-width: 0.2em;
  border-style: solid;
  border-radius: 8px;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 2em #276d9b;
    border-color: #276d9b;
    -webkit-transform: translateY(-0.1em);
    transform: translateY(-0.1em);
  }
`;
