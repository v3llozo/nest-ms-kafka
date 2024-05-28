# POC Kafka + NestJS

## Running
Running the docker compose, it builds the images and starts the containers for Zookeeper, Kafka, Kafka-UI and the Nest microservices.
```bash
docker compose up -d
```

## Kafka 
```bash
# Consume from topic
docker exec -it kafka /bin/bash
cd /usr/bin
kafka-console-consumer --bootstrap-server localhost:9092 --topic test --from-beginning

# Write on topic
docker exec -it kafka /bin/bash
cd /usr/bin
kafka-console-producer --broker-list localhost:9092 --topic test
```

# Microsservices NestJS

Using NestJS, microservices were created to consume and produce messages in Kafka.

| Microsservice | Description |
| --- | --- |
| user-identify | Recive a external request and identify the user, emitting its documentation |
| user-external-docs | Consumes the user documentation event and sends it to an external API |

