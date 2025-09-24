class FlowMetr {
  url = "";
  project_token = "";
  flow_id = "";
  node_id = "";
  run_id = "";
  logs = "";
  constructor(url, project_token, flow_id) {
    this.url = url;
    this.flow_id = flow_id;
    this.project_token = project_token;
  }
  test() {
    console.log(`flow_id: ${this.flow_id}`);
    console.log(`project_token: ${this.project_token}`);
    console.log(`url: ${this.url}`);
  }
  start(node_id, run_id, logs) {
    this.node_id = node_id;
    this.run_id = run_id;
    this.logs = logs;
    const request_url = `https://flowmetr.com/hooks/${this.flow_id}?run_id=${this.run_id}&node_id=${this.node_id}&node_type=start&logs=${this.logs}&project_token=${this.project_token}`;
    console.log(`request sent to: ${request_url}`);
    fetch(request_url)
      .then((response) => response.text())
      .then((data) => {
        console.log(`response: ${data}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
module.exports = { FlowMetr };
