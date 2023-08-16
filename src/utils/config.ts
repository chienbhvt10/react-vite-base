const ApiServerURL = import.meta.env.VITE_BASE_URL
  ? import.meta.env.VITE_BASE_URL
  : "http://localhost:3000";

const ApiServerGrapqhlURL = import.meta.env.VITE_BASE_URL_GRAPHQL
  ? import.meta.env.VITE_BASE_URL_GRAPHQL
  : "http://localhost:8000/graphql";

const socketURL = import.meta.env.VITE_BASE_SOCKET_URL
  ? import.meta.env.VITE_BASE_SOCKET_URL
  : "http://localhost:8000";

const version = import.meta.env.VITE_VERSION;

export { ApiServerURL, version, ApiServerGrapqhlURL, socketURL };
