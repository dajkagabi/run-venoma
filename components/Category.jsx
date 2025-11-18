"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export default function Category() {
  const categories = [
    {
      id: 1,
      title: "Summer Inspiration",
      image: "/img/category/1.png",
      subtitle: "Trending Styles",
      items: ["Summer Clothes", "Summer Tops", "Summer Dresses"]
    },
    {
      id: 2,
      title: "Summer Casual",
      image: "/img/category/2.jpeg",
      subtitle: "Everyday Wear",
      items: ["Crop Tops", "Graphic Tees", "Short Shorts"]
    },
    {
      id: 3,
      title: "Summer Sports",
      image: "/img/category/3.jpeg",
      subtitle: "Active Collection",
      items: ["Bike Shorts", "Swimwear", "Running Sunglasses"]
    }
  ]

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Summer Collection
          </h1>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-base">
            Clean, everyday essentials curated for warm days.
          </p>
        </div>

        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <Card
              key={cat.id}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 m-0 p-0"
            >
              <CardContent className="p-0">
                <div className="relative aspect-4/4 overflow-hidden rounded-t-xl bg-gray-100"> 
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                 
                    className="object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-gray-500">{cat.subtitle}</p>

                  <ul className="space-y-2 pt-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-between text-gray-700 text-sm hover:text-accent-hover transition-colors cursor-pointer group/item"
                      >
                        <span>{item}</span>
                        <ChevronRightIcon className="w-4 h-4 text-gray-400 group-hover/item:text-primary transition-colors" />
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-accent2 text-primary rounded-lg text-base font-medium hover:bg-accent transition-colors shadow-md hover:shadow-lg">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  )
}