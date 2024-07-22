# Use OpenJDK image to run the Spring Boot app
FROM openjdk:17-jdk-alpine

# Copy the jar file
COPY target/archtech-0.0.1-SNAPSHOT.jar /app/spring-boot.jar

# Set working directory
WORKDIR /app/


# Run the application
ENTRYPOINT ["java", "-jar", "spring-boot.jar"]


# Expose the port on which the application will run
EXPOSE 8080
