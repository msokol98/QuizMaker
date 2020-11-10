const desktop = "10.0.0.4";
// const aws_server = "3.136.106.200";

export const apiHost = process.env.NODE_ENV === "development" ? "http://localhost:8080" : `${desktop}:8080`;
export const webHost = process.env.NODE_ENV === "development" ? "http://localhost:3000" : desktop;