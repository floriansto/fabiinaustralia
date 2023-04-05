# fabiinaustralia

A simple webpage with a countdown timer.

# Usage

The webpage is hosted inside a `docker` container.
I used docker-compose to manage the container.

## Requirements

You need a public domain and a working `traefik` reverse proxy running to use this setup out of the box.
Other reverse proxies like `nginx` may work too, but you have to make some adjustments to the `docker-compose.yaml` file.

## Build the container

To build the container and make sure to include the latest source files use the following command:
```sh
docker-compose build --no-cache
```

## Start the container

To start the container execute
```sh
docker-compose up -d
```

# Credits

Credits to to chatGPT who helped me create the webpage :)
