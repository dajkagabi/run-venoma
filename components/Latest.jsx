"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Latest() {
  const images = [
    {
      src: "/img/latest/p1.png",
      title: "Sports Sunglasses", 
      description: "Polarized UV protection for outdoor activities"
    },
    {
      src: "/img/latest/p2.png", 
      title: "Performance T-Shirt",
      description: "Moisture-wicking athletic fabric"
    },
    {
      src: "/img/latest/p3.png",
      title: "Running Shoes",
      description: "Lightweight design for maximum comfort"
    },
    {
      src: "/img/latest/p4.png",
      title: "Baseball Cap", 
      description: "Breathable athletic cap with UV protection"
    },
    {
      src: "/img/latest/p5.png",
      title: "Nutrition Pack", 
      description: "Fresh fruits, vegetables and hydration essentials"
    },
    {
      src: "/img/latest/p6.png",
      title: "Energy Snacks",
      description: "Healthy protein bars and snacks"
    },
    {
      src: "/img/latest/p7.png",
      title: "Fitness Accessories",
      description: "Essential workout accessories"
    },
  ]

  const [api, setApi] = useState()

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <section id="latest" className="w-full py-16 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-primary font-bold text-primary text-center mb-12">
          LATEST PRODUCTS
        </h2>
        
        <div className="w-full max-w-6xl mx-auto">
          <Carousel 
            className="w-full"
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
                  
                  <div className="h-full">
                    <Card className="border-2 border-gray-100 hover:border-accent hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                      <CardContent className="p-6 flex flex-col flex-1">
                        {/* fix magasság */}
                        <div className="aspect-square relative mb-6 overflow-hidden rounded-lg flex-shrink-0">
                          <Image
                            src={image.src}
                            alt={image.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        
                        {/* Szöveg rész - flexibilis */}
                        <div className="flex flex-col flex-1">
                          <h3 className="font-primary text-xl font-bold text-primary mb-3 line-clamp-2">
                            {image.title}
                          </h3>
                          <p className="font-secondary text-secondary text-base leading-relaxed mb-4 flex-1 line-clamp-3">
                            {image.description}
                          </p>
                          <button className="w-full bg-accent text-primary font-secondary font-bold py-3 rounded-lg hover:bg-accent-hover transition-colors duration-300 mt-auto">
                            View Details
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static transform-none bg-primary text-white hover:bg-gray-800 border-0 w-12 h-12" />
              <CarouselNext className="relative static transform-none bg-primary text-white hover:bg-gray-800 border-0 w-12 h-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}