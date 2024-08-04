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
        var page = 1
        val houses = mutableListOf<House>()
        while (true) {
            val response = restTemplate.getForObject<Array<House>>("$apiUrl?page=$page&pageSize=50")
            if (response.isEmpty()) break
            houses.addAll(response)
            page++
        }
        return houses.filter { it.name.contains(query, ignoreCase = true) }
    }

    fun getHouseDetails(id: Long): House? {
        return restTemplate.getForObject("$apiUrl/$id")
    }
}