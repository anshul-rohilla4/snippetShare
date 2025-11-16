package com.example.SnippetShare;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer() {

            @Override
            public void addCorsMappings(CorsRegistry registry){
                registry.addMapping("/api/**")
                        .allowedOrigins(
                                "http://localhost:5173",
                                "https://snippetsshare.netlify.app",
                                "https://6919c7f99bc0596e1dae8e41--snippetsshare.netlify.app"
                        )
                        .allowedMethods("GET", "POST", "PUT", "DELETE");
            }
        };
    }

}
