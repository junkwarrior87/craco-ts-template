import {css} from '@linaria/core';
import logo from '../assets/logo.svg';

const appLogo = css`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: spin infinite 20s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const appLink = css`
  color: #61dafb;
`;

export const App = () => <div className={css`
  text-align: center;

  > header {
    display: flex;
    flex-flow: column;
    place-items: center;
    justify-content: center;
    background: #282c34;
    color: white;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
  }
`}>
    <header>
        <img className={appLogo} src={logo} alt="logo"/>
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        <a className={appLink} href="https://reactjs.org">Learn React</a>
    </header>
</div>;