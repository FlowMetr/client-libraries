class FlowMetr:
    url = ""
    project_token = ""
    flow_id = ""
    
    def __init__(self, url, project_token, flow_id):
        self.url = url
        self.project_token = project_token
        self.flow_id = flow_id
    
    def test(self):
        print(f"flow_id: {self.flow_id}")
        print(f"project_token: {self.project_token}")
        print(f"url: {self.url}")