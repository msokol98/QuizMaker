package io.sokol.quizmaker.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/register")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH");
        registry.addMapping("/authenticate")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH");
    }
}