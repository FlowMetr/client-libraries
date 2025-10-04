import requests
import logging

# It's good practice to set up a logger for libraries
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

class FlowMetr:

    def __init__(self, url, project_token, flow_id):
        self.base_url = url
        self.project_token = project_token
        self.flow_id = flow_id
        # The final URL endpoint is constructed from the base URL and flow ID
        self.endpoint_url = f"{self.base_url}/{self.flow_id}"
        
    def _send_event(self, node_id: str, run_id: str, logs: str, node_type: str):
        params = {
            "run_id": run_id,
            "node_id": node_id,
            "node_type": node_type,
            "logs": logs,
            "project_token": self.project_token
        }
        logging.info(f"Sending '{node_type}' event for node '{node_id}' in run '{run_id}'...")
        try:
            # Use the class's endpoint_url, pass parameters via `params`, and set a timeout
            response = requests.get(self.endpoint_url, params=params, timeout=10) # 10-second timeout
            
            # Raise an exception for bad status codes (4xx or 5xx)
            response.raise_for_status()
            
            logging.info(f"Successfully sent event. Response: {response.text}")
            return response

        except requests.exceptions.Timeout:
            logging.error("The request timed out while trying to reach FlowMetr.")
        except requests.exceptions.RequestException as e:
            # This will catch connection errors, HTTP errors, etc.
            logging.error(f"An error occurred while sending request to FlowMetr: {e}")
        
        return None

        
    def start(self,node_id,run_id,logs):
        self._send_event(node_id=node_id, run_id=run_id, logs=logs, node_type="start")

        
    def stop(self,node_id,run_id,logs):
        self._send_event(node_id=node_id, run_id=run_id, logs=logs, node_type="stop")
    
    def test(self):
        """Prints the configuration of the client."""
        print("--- FlowMetr Configuration ---")
        print(f"Flow ID: {self.flow_id}")
        print(f"Project Token: {self.project_token}")
        print(f"Full Endpoint URL: {self.endpoint_url}")
        print("----------------------------")