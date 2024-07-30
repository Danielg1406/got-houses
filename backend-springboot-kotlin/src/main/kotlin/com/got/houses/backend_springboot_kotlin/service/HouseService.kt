package com.got.houses.backend_springboot_kotlin.service

import com.got.houses.backend_springboot_kotlin.model.House
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import org.springframework.web.client.getForObject

@Service
class HouseService{
    private val restTemplate = RestTemplate()
    private val apiUrl = "https://anapioficeandfire.com/api/houses"

    fun searchHouses(query: String): List<House> {
        val response = restTemplate.getForObject<Array<House>>("$apiUrl?name-$query")
        return response?.toList() ?: emptyList()
    }

    fun getHouseDetails(id: Long): House? {
        return restTemplate.getForObject("$apiUrl/$id")
    }
}