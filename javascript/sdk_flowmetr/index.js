class FlowMetr {
  url = "";
  project_token = "";
  flow_id = "";
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
}
module.exports = { FlowMetr };
