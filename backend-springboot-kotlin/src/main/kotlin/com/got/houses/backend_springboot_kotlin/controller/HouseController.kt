package com.got.houses.backend_springboot_kotlin.controller

import com.got.houses.backend_springboot_kotlin.service.HouseService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class HouseController(private val houseService: HouseService) {
    @GetMapping("/houses")
    fun getAllHouses() = houseService.getAllHouses()

    @GetMapping("/houses/{id}")
    fun getHouseDetails(@PathVariable id: Long) = houseService.getHouseDetails(id)
}