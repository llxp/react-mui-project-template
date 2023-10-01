declare global {
  interface Window {
    env: any;
  }
}

type EnvType = {
  REACT_APP_API_URL: string;
}

if (window.env === undefined) {
  window.env = {
    REACT_APP_API_URL: "http://localhost:8080"
  };
}

let processObj: any;

if (typeof process === typeof undefined) {
  processObj = {};
  processObj.env = {};
} else {
  processObj = process;
}

export default { ...processObj.env, ...window.env} as EnvType;