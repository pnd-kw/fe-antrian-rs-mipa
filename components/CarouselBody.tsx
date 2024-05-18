"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

interface CarouselProps {
  data: Array<{
    page_id: number;
    doctor_data: Array<{
      doctor_id: number;
      antrian: number;
      doctorImage: string;
      poli: string;
      doctorName: string;
    }>;
  }>;
}

const CarouselBody: React.FC<CarouselProps> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === data.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <>
      <div className="carousel-container">
        {/* <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}> */}
        {data.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
          
          >
            <div className="w-full">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} className="relative">
                  <div className="absolute w-2/5 h-56 right-4 top-4 mt-2 bg-white p-2 border-2 rounded-xl border-green-400">
                    <div className="flex justify-center">
                      <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-green-700">
                        no. antrian
                      </div>
                    </div>
                    <div className="h-44 flex justify-center items-center">
                      <div className="font-bold text-4xl md:text-6xl lg:text-8xl text-green-600">
                        {item.doctor_data[0].antrian}
                      </div>
                    </div>
                  </div>
                  <div className="mx-4 my-4 h-52 flex items-center border-2 rounded-xl border-green-400">
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={2.5}>
                        <Image
                          src={item.doctor_data[0].doctorImage}
                          alt={item.doctor_data[0].doctorName}
                          width={200}
                          height={500}
                        />
                      </Grid>
                      <Grid item xs={12} md={4.5}>
                        <div className="flex justify-center mb-12">
                          <div className="font-bold text-lg md:text-xl lg:text-2xl uppercase">
                            {item.doctor_data[0].poli}
                          </div>
                        </div>
                        <div className="flex justify-center mb-2">
                          <div className="font-semibold text-xs md:text-xs lg:text-sm">
                            {item.doctor_data[0].doctorName}
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} className="relative">
                  <div className="absolute w-2/5 h-56 right-4 top-4 mt-2 bg-white p-2 border-2 rounded-xl border-green-400">
                    <div className="flex justify-center">
                      <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-green-700">
                        no. antrian
                      </div>
                    </div>
                    <div className="h-44 flex justify-center items-center">
                      <div className="font-bold text-4xl md:text-6xl lg:text-8xl text-green-600">
                        {item.doctor_data[1].antrian}
                      </div>
                    </div>
                  </div>
                  <div className="mx-4 my-4 h-52 flex items-center border-2 rounded-xl border-green-400">
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={2.5}>
                        <Image
                          src={item.doctor_data[1].doctorImage}
                          alt={item.doctor_data[1].doctorName}
                          width={200}
                          height={500}
                        />
                      </Grid>
                      <Grid item xs={12} md={4.5}>
                        <div className="flex justify-center mb-12">
                          <div className="font-bold text-lg md:text-xl lg:text-2xl uppercase">
                            {item.doctor_data[1].poli}
                          </div>
                        </div>
                        <div className="flex justify-center mb-2">
                          <div className="font-semibold text-xs md:text-xs lg:text-sm">
                            {item.doctor_data[1].doctorName}
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} className="relative">
                  <div className="absolute w-2/5 h-56 right-4 top-4 mt-2 bg-white p-2 border-2 rounded-xl border-green-400">
                    <div className="flex justify-center">
                      <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-green-700">
                        no. antrian
                      </div>
                    </div>
                    <div className="h-44 flex justify-center items-center">
                      <div className="font-bold text-4xl md:text-6xl lg:text-8xl text-green-600">
                        {item.doctor_data[2].antrian}
                      </div>
                    </div>
                  </div>
                  <div className="mx-4 my-4 h-52 flex items-center border-2 rounded-xl border-green-400">
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={2.5}>
                        <Image
                          src={item.doctor_data[2].doctorImage}
                          alt={item.doctor_data[2].doctorName}
                          width={90}
                          height={200}
                        />
                      </Grid>
                      <Grid item xs={12} md={4.5}>
                        <div className="flex justify-center mb-12">
                          <div className="font-bold text-lg md:text-xl lg:text-2xl uppercase">
                            {item.doctor_data[2].poli}
                          </div>
                        </div>
                        <div className="flex justify-center mb-2">
                          <div className="font-semibold text-xs md:text-xs lg:text-sm">
                            {item.doctor_data[2].doctorName}
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} className="relative">
                    <div className="absolute w-2/5 h-56 right-4 top-4 mt-2 bg-white p-2 border-2 rounded-xl border-green-400">
                      <div className="flex justify-center">
                        <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-green-700">
                          no. antrian
                        </div>
                      </div>
                      <div className="h-44 flex justify-center items-center">
                        <div className="font-bold text-4xl md:text-6xl lg:text-8xl text-green-600">
                          {item.doctor_data[3].antrian}
                        </div>
                      </div>
                    </div>
                    <div className="mx-4 my-4 h-52 flex items-center border-2 rounded-xl border-green-400">
                      <Grid container spacing={1}>
                        <Grid item xs={12} md={2.5}>
                          <Image
                            src={item.doctor_data[3].doctorImage}
                            alt={item.doctor_data[3].doctorName}
                            width={200}
                            height={500}
                          />
                        </Grid>
                        <Grid item xs={12} md={4.5}>
                          <div className="flex justify-center mb-12">
                            <div className="font-bold text-lg md:text-xl lg:text-2xl uppercase">
                              {item.doctor_data[3].poli}
                            </div>
                          </div>
                          <div className="flex justify-center mb-2">
                            <div className="font-semibold text-xs md:text-xs lg:text-sm">
                              {item.doctor_data[3].doctorName}
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
              </Grid>
            </div>
            {/* <div className="w-full h-full">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} className="relative">
                  <div className="absolute w-2/5 h-56 right-4 top-4 mt-2 bg-white p-2 border-2 rounded-xl border-green-400">
                    <div className="flex justify-center">
                      <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-green-700">
                        no. antrian
                      </div>
                    </div>
                    <div className="h-44 flex justify-center items-center">
                      <div className="font-bold text-4xl md:text-6xl lg:text-8xl text-green-600">
                        {item.doctor_data.map((e) => e.antrian)}
                      </div>
                    </div>
                  </div>
                  <div className="mx-4 my-4 h-52 flex items-center border-2 rounded-xl border-green-400">
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={2.5}>
                        {item.doctor_data.map((e, idx) => (
                          <div key={idx}>
                            <Image
                              src={e.doctorImage}
                              alt={e.doctorName}
                              width={200}
                              height={500}
                            />
                          </div>
                        ))}
                      </Grid>
                      <Grid item xs={12} md={4.5}>
                        <div className="flex justify-center mb-12">
                          <div className="font-bold text-lg md:text-xl lg:text-2xl uppercase">
                            {item.doctor_data.map((e) => e.poli)}
                          </div>
                        </div>
                        <div className="flex justify-center mb-2">
                          <div className="font-semibold text-xs md:text-xs lg:text-sm">
                            {item.doctor_data.map((e) => e.doctorName)}
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} className="relative">
                  <div className="absolute w-2/5 h-56 right-4 top-4 mt-2 bg-white p-2 border-2 rounded-xl border-green-400">
                    <div className="flex justify-center">
                      <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-green-700">
                        no. antrian
                      </div>
                    </div>
                    <div className="h-44 flex justify-center items-center">
                      <div className="font-bold text-4xl md:text-6xl lg:text-8xl text-green-600">
                        {item.doctor_data.map((e) => e.antrian)}
                      </div>
                    </div>
                  </div>
                  <div className="mx-4 my-4 h-52 flex items-center border-2 rounded-xl border-green-400">
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={2.5}>
                        {item.doctor_data.map((e, idx) => (
                          <div key={idx}>
                            <Image
                              src={e.doctorImage}
                              alt={e.doctorName}
                              width={200}
                              height={500}
                              objectFit="cover"
                            />
                          </div>
                        ))}
                      </Grid>
                      <Grid item xs={12} md={4.5}>
                        <div className="flex justify-center mb-12">
                          <div className="font-bold text-lg md:text-xl lg:text-2xl uppercase">
                            {item.doctor_data.map((e) => e.poli)}
                          </div>
                        </div>
                        <div className="flex justify-center mb-2">
                          <div className="font-semibold text-xs md:text-xs lg:text-sm">
                            {item.doctor_data.map((e) => e.doctorName)}
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </div> */}
          </div>
        ))}
        {/* </Carousel> */}
      </div>
    </>
  );
};

export default CarouselBody;
