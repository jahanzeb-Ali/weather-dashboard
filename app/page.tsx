"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "@/components/search"
import { WeatherCard } from "@/components/weather-card"
import { getWeather } from "@/actions/weather"
import type { WeatherData } from "@/types/weather"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function WeatherApp() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (city: string) => {
    setLoading(true)
    setError(null)

    try {
      const data = await getWeather(city)
      if ("message" in data) {
        setError(data.message)
        setWeather(null)
      } else {
        setWeather(data)
        setError(null)
      }
    } catch (err) {
      setError("Failed to fetch weather data")
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-4xl mx-auto pt-12 space-y-8">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Weather App
        </motion.h1>

        <Search onSearch={handleSearch} isLoading={loading} />

        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </motion.div>
          )}

          {weather && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <WeatherCard data={weather} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}

