package com.got.houses.backend_springboot_kotlin.config

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class WebConfig : WebMvcConfigurer {
    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:5173") // Your frontend URL
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
    }
}