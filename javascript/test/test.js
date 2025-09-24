const { FlowMetr } = require("sdk_flowmetr"); // This imports your local SDK

const flowmetr = new FlowMetr(
  (url = "https://FlowMetr.com"),
  (project_token =
    "f815f37293f415e33e3b8542cc6eefa433809e1777774632f2343668792f3dd1"),
  (flow_id = "339a7c52-58eb-4537-ab92-9a57f0bae96b")
);

flowmetr.test();

flowmetr.start(
  (node_id = "start-trigger"),
  (run_id = "fa932b0f386f5d2e"),
  (logs = "Started")
);
