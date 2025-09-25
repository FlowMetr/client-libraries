from flowmetr import FlowMetr

flowmetr = FlowMetr(url="https://FlowMetr.com",flow_id="339a7c52-58eb-4537-ab92-9a57f0bae96b",project_token="f815f37293f415e33e3b8542cc6eefa433809e1777774632f2343668792f3dd1")

flowmetr.test()

flowmetr.start(node_id="start-trigger",run_id="fa932b0f386f5d2e",logs="Started")
flowmetr.stop(node_id="stop-trigger",run_id="c0940c1f0c8c2f66",logs="Stopped")

