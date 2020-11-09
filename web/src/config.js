const apiHost = process.env.NODE_ENV === "development" ? "http://localhost:8080" : "http://192.168.1.6:8080";
export default apiHost;