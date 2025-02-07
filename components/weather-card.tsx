"use client"

import { motion } from "framer-motion"
import { Droplets, Thermometer, Wind, MapPin, Umbrella } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { WeatherData } from "@/types/weather"

interface WeatherCardProps {
  data: WeatherData
}

export function WeatherCard({ data }: WeatherCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="w-full max-w-md mx-auto backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
        <CardHeader>
          <CardTitle className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <MapPin className="h-5 w-5 text-primary" />
              {data.location.name}
            </div>
            <div className="text-sm text-muted-foreground">
              {data.location.region}, {data.location.country}
            </div>
            <div className="text-xs text-muted-foreground">{data.location.localtime}</div>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-center gap-4">
            <img src={`https:${data.current.condition.icon}`} alt={data.current.condition.text} className="w-24 h-24" />
            <div className="text-4xl font-bold">{Math.round(data.current.temp_c)}°C</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="flex items-center gap-2 bg-primary/10 p-3 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Thermometer className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Feels Like</p>
                <p className="text-2xl font-bold">{Math.round(data.current.feelslike_c)}°C</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 bg-primary/10 p-3 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Droplets className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Humidity</p>
                <p className="text-2xl font-bold">{data.current.humidity}%</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 bg-primary/10 p-3 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Wind className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Wind</p>
                <p className="text-2xl font-bold">{Math.round(data.current.wind_kph)} km/h</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 bg-primary/10 p-3 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Umbrella className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Precipitation</p>
                <p className="text-2xl font-bold">{data.current.precip_mm} mm</p>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="text-center text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {data.current.condition.text}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

