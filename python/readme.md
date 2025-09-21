# FlowMetr Python Client Library

A Python client library for interacting with the FlowMetr API.

## Installation

Install the FlowMetr client library using pip:

```bash
pip install flowmetr
```

For development, install in editable mode:

```bash
pip install -e .
```

## Quick Start

```python
from flowmetr import FlowMetr

# Initialize the client
flowmetr = FlowMetr(
    url="https://FlowMetr.com",
    flow_id="your-flow-id",
    project_token="your-project-token"
)

# Test the connection
flowmetr.test()
```

## Configuration

The FlowMetr client requires three parameters:

- `url`: The base URL of your FlowMetr instance
- `flow_id`: The unique identifier for your flow
- `project_token`: Your authentication token

## API Reference

### FlowMetr

The main client class for interacting with FlowMetr.

#### Constructor

```python
FlowMetr(url: str, flow_id: str, project_token: str)
```

**Parameters:**
- `url` (str): The base URL of the FlowMetr instance
- `flow_id` (str): The unique identifier for the flow
- `project_token` (str): The project authentication token

#### Methods

##### `test()`

Tests the connection to FlowMetr and prints the configuration.

```python
flowmetr.test()
```

## Development

### Setting up the development environment

1. Clone the repository
2. Navigate to the python directory
3. Install in development mode:

```bash
pip install -e .
```

### Running Tests

Run the test suite:

```bash
python test/test.py
```

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## Support

For issues and questions:
- Create an issue on [GitHub](https://github.com/FlowMetr/client-libraries/issues)
- Visit the [FlowMetr documentation](https://FlowMetr.com)

## Changelog

### v1.0.0
- Initial release
- Basic FlowMetr client functionality
- Connection testing method
