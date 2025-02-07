"use server"

import axios from "axios"
import type { WeatherData, WeatherError } from "@/types/weather"

export async function getWeather(city: string): Promise<WeatherData | WeatherError> {
  if (!city) return { message: "Please enter a city name" }

  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHERAPI_KEY}&q=${encodeURIComponent(city)}&aqi=no`,
    )

    if (response.status !== 200) {
      throw new Error("Failed to fetch weather data")
    }

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        return { message: "City not found" }
      }
      return { message: error.response?.data?.error?.message || "Failed to fetch weather data" }
    }
    return { message: "An unexpected error occurred" }
  }
}

