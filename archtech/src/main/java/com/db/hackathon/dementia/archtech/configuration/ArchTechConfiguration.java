package com.db.hackathon.dementia.archtech.configuration;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import jakarta.persistence.EntityManagerFactory;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(
    basePackages = "com.db.hackathon.dementia.archtech.login.repository",
    entityManagerFactoryRef = "archTechH2EntityManagerFactory",
    transactionManagerRef = "archTechH2TransactionManager"
)
public class ArchTechConfiguration {

    @Bean(name = "archTechH2DataSource")
    @ConfigurationProperties(prefix = "spring.datasource")
    public DataSource archTechH2DataSource() {
        // Explicitly setting the JDBC URL here
        return DataSourceBuilder.create()
                .url("jdbc:h2:mem:hackdb") // Replace with your JDBC URL
                .build();
    }

    @Bean(name = "archTechH2EntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean archTechH2entityManagerFactory(
            EntityManagerFactoryBuilder builder,
            @Qualifier("archTechH2DataSource") DataSource archTechH2DataSource) {
        return builder
                .dataSource(archTechH2DataSource)
                .packages("com.db.hackathon.dementia.archtech")
                .persistenceUnit("archTechH2DataSource")
                .build();
    }

    @Bean(name = "archTechH2TransactionManager")
    public PlatformTransactionManager archTechH2TransactionManager(
            @Qualifier("archTechH2EntityManagerFactory") EntityManagerFactory archTechH2EntityManagerFactory) {
        return new JpaTransactionManager(archTechH2EntityManagerFactory);
    }

}
