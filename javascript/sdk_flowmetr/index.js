/**
 * A client for interacting with the FlowMetr API.
 */
class FlowMetr {
  /**
   * @param {string} url The base URL for the FlowMetr API (e.g., "https://flowmetr.com/hooks").
   * @param {string} project_token Your project-specific API token.
   * @param {string} flow_id The ID of the flow you are tracking.
   */
  constructor(url, project_token, flow_id) {
    this.base_url = url;
    this.project_token = project_token;
    this.flow_id = flow_id;
    this.endpoint_url = `${this.base_url}/${this.flow_id}`;
  }

  /**
   * A private helper method to send events to the FlowMetr API.
   * @private
   */
  async _send_event(node_id, run_id, logs, node_type) {
    const params = new URLSearchParams({
      project_token: this.project_token,
      run_id: run_id,
      node_id: node_id,
      node_type: node_type,
      logs: logs || "", // Ensure logs is at least an empty string
    });

    const fullUrl = `${this.endpoint_url}?${params.toString()}`;
    console.log(`Sending '${node_type}' event for node '${node_id}'...`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10-second timeout

    try {
      const response = await fetch(fullUrl, {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(
          `HTTP error! Status: ${response.status} ${response.statusText}`
        );
      }

      const responseData = await response.text();
      console.log(`Successfully sent event. Response: ${responseData}`);
      return responseData;
    } catch (error) {
      if (error.name === "AbortError") {
        console.error(
          "Error: The request timed out while trying to reach FlowMetr."
        );
      } else {
        console.error(
          "An error occurred while sending the request to FlowMetr:",
          error.message
        );
      }
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /**
   * Sends a 'start' event for a specific node in a flow.
   */
  start(node_id, run_id, logs = "") {
    // FIXED: Call the function by passing arguments directly.
    // The string "start" is the fourth argument.
    return this._send_event(node_id, run_id, logs, "start");
  }

  /**
   * Sends a 'stop' event for a specific node in a flow.
   */
  stop(node_id, run_id, logs = "") {
    // FIXED: Refactored to use the helper function for consistency.
    return this._send_event(node_id, run_id, logs, "stop");
  }

  /**
   * Prints the configuration of the client.
   */
  test() {
    console.log("--- FlowMetr Configuration ---");
    console.log(`Flow ID: ${this.flow_id}`);
    console.log(`Project Token: ${this.project_token}`);
    console.log(`Base URL: ${this.base_url}`);
    console.log(`Full Endpoint URL: ${this.endpoint_url}`);
    console.log("----------------------------");
  }
}

module.exports = { FlowMetr };
