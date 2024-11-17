"use client";
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Card, CardContent } from './ui/card'
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Marketing Manager",
        content:
            "Schedulrr has transformed how I manage my team's meetings. It's intuitive and saves us hours every week!",
        image: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "David Lee",
        role: "Freelance Designer",
        content:
            "As a freelancer, Schedulrr helps me stay organized and professional. My clients love how easy it is to book time with me.",
        image: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Emily Chen",
        role: "Startup Founder",
        content:
            "Schedulrr streamlined our hiring process. Setting up interviews has never been easier!",
        image: "https://i.pravatar.cc/150?img=3",
    },
    {
        name: "Michael Brown",
        role: "Sales Executive",
        content:
            "I've seen a 30% increase in my meeting bookings since using Schedulrr. It's a game-changer for sales professionals.",
        image: "https://i.pravatar.cc/150?img=4",
    },
];

const Testimonials = () => {
    return (
        <Carousel
        plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
            opts={{
                align: "start",
            }}
            className="w-full mx-auto"
        >
            <CarouselContent>
                {testimonials.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <Card className='h-full'>
                                <CardContent className="flex flex-col items-center justify-between p-6">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-full mb-4"
                                    />
                                    <p className="text-center text-gray-600 mb-4">
                                        {item.content}
                                    </p>
                                    <div className="text-center">
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-gray-600">{item.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious />
      <CarouselNext /> */}
        </Carousel>
    )
}

export default Testimonials