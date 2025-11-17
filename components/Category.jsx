"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  ChevronRightIcon,
  SunIcon,
  TrophyIcon,
  SparklesIcon
} from "@heroicons/react/24/outline"
import Image from "next/image"

export default function Category() {
  const categories = [
    {
      title: "SUMMER INSPIRATION",
      image: "/img/category/1.jpg",
      icon: SparklesIcon,
      subtitle: "Trending Styles",
      items: [
        "Summer Clothes",
        "Summer Outfits", 
        "Summer Tops",
        "Summer Hots",
        "Summer Dresses"
      ]
    },
    {
      title: "SUMMER CASUAL",
      image: "/img/category/2.jpg", 
      icon: SunIcon,
      subtitle: "Everyday Wear",
      items: [
        "Crop Tops",
        "Graphic Tees",
        "White Tees", 
        "High Waisted Shorts",
        "Short Shorts"
      ]
    },
    {
      title: "SUMMER SPORTS", 
      image: "/img/category/3.jpg",
      icon: TrophyIcon,
      subtitle: "Active Collection",
      items: [
        "Bike Shorts",
        "Basketball Shorts",
        "Plus-Size Swimwear",
        "Running Sunglasses", 
        "Golf Shorts"
      ]
    }
  ]

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-primary font-bold text-primary uppercase tracking-tight mb-4">
            SUMMER COLLECTION
          </h1>
          <p className="text-xl font-secondary text-secondary max-w-2xl mx-auto">
            Discover the latest trends and essentials for your perfect summer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.title} className="border-2 border-gray-100 hover:border-accent transition-all duration-300 overflow-hidden group h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  {/*  */}
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/*  */}
                    <h2 className="absolute bottom-12 left-4 text-xl font-primary font-bold text-white uppercase bg-accent px-3 py-1 rounded">
                      {category.title}
                    </h2>
                    <p className="absolute bottom-4 left-4 text-black font-secondary font-semibold text-sm bg-accent px-2 py-1 rounded">
                      {category.subtitle}
                    </p>
                  </div>

                  {/* Item lista */}
                  <div className="p-6 flex-1">
                    <div className="space-y-3">
                      {category.items.map((item) => (
                        <div key={item} className="flex items-center gap-3 py-1 group/item cursor-pointer">
                          <ChevronRightIcon className="w-4 h-4 text-accent opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0" />
                          <span className="font-secondary text-secondary group-hover/item:text-primary transition-colors text-base">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* View All gomb */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-accent text-primary font-secondary font-bold text-lg rounded-lg hover:bg-accent-hover transition-colors duration-300 inline-flex items-center gap-2">
            VIEW ALL COLLECTIONS
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}