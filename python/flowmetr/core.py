import requests

class FlowMetr:
    url = ""
    project_token = ""
    flow_id = ""
    node_id = ""
    run_id = ""
    logs = ""    
    def __init__(self, url, project_token, flow_id):
        self.url = url
        self.project_token = project_token
        self.flow_id = flow_id
        
    def start(self,node_id,run_id,logs):
        self.node_id = node_id
        self.run_id = run_id
        self.logs = logs
        res = requests.get(f"https://flowmetr.com/hooks/{self.flow_id}?run_id={self.run_id}&node_id={self.node_id}&node_type=start&logs={self.logs}&project_token={self.project_token}")
        print(f"request sent to:{f"https://flowmetr.com/hooks/{self.flow_id}?run_id={self.run_id}&node_id={self.node_id}&node_type=start&logs={self.logs}&project_token={self.project_token}"}")
        print(f"response:{res.text}")
        
    def stop(self,node_id,run_id,logs):
        self.node_id = node_id
        self.run_id = run_id
        self.logs = logs
        res = requests.get(f"https://flowmetr.com/hooks/{self.flow_id}?run_id={self.run_id}&node_id={self.node_id}&node_type=stop&logs={self.logs}&project_token={self.project_token}")
        print(f"request sent to:{f"https://flowmetr.com/hooks/{self.flow_id}?run_id={self.run_id}&node_id={self.node_id}&node_type=stop&logs={self.logs}&project_token={self.project_token}"}")
        print(f"response:{res.text}")
    
    def test(self):
        print(f"flow_id: {self.flow_id}")
        print(f"project_token: {self.project_token}")
        print(f"url: {self.url}")