FROM openjdk:17
VOLUME /tmp
EXPOSE 8080
ADD build/libs/hello-world-0.0.1-SNAPSHOT.jar hello-world-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "hello-world-0.0.1-SNAPSHOT.jar"]
