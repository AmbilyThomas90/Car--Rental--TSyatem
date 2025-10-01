import React from 'react'
const products = [
  {
    id: 1,
    name: 'Suzuki Swift or similar Economy',
    href: '#',
    imageSrc: '/src/images/swift1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'White',
  },
  {
    id: 2,
    name: 'Hyundai Grand i10 or similar Economy',
    href: '#',
    imageSrc: '/src/images/Hondajazz.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: ' White',
  },
  {
    id: 3,
    name: 'Toyota Vitz  or similar Economy',
    href: '#',
    imageSrc: '/src/images/Toyotavitz.jpg',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: '$35',
    color: 'Charcoal',
  },
  {
    id: 4,
    name: 'Hyundai Grand i10',
    href: '#',
    imageSrc: '/src/images/Gi10.jpg',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '$35',
    color: 'Iso Dots',
  },
]
function Home() {
  
  return (
    <>
  
    <div 
 
     style={{
    backgroundImage: "url('/src/images/carhome.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "50vh",
  }}
  > <p>
    <h1 className="text-center text-3xl font-bold p-4">Rent a Car from Best Car Rental- Rentora Drive</h1>
  </p>
    </div>
    
     <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Find the right car now !</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img 
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 object-fill"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </>
  )
}

export default Home
