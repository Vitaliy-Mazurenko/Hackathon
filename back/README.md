# Project Name

HelloWorld Hackathon Preparation Project

## Description

This project serves as a "Hello World" template designed to help teammates prepare for the upcoming hackathon. It includes a simple Spring Boot application with a single endpoint that allows you to customize a greeting.

## Getting Started

### Prerequisites

- Java Development Kit 17 (JDK17) installed
- Git

### Clone the Repository

```bash
git clone https://gitlab.com/hhrzc/hello-hakaton
cd hello-hakaton/back
```

## Usage

### The project exposes a single endpoint:

- Endpoint: /helloworld
- Method: GET
- Parameters:
  - `word`: The word you want to include in the greeting.

### Example

```bash
curl http://localhost:8080/helloworld?word=Team
```

#### Response
```json
{
"message": "Hello Team!"
}
```