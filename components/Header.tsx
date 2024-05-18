"use client";

import Image from "next/image";
import { Grid } from "@mui/material";

const Header: React.FC = () => {
    return (
        <div
        className="w-full h-28"
        style={{
          background: "linear-gradient(to right, #009b4c, #00587a, #00c8d7)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="flex justify-start">
              <div className="ml-4 mt-3">
                <Image
                  src="/images/logo-rsu-mipa.png"
                  alt="Logo RSU Mipa"
                  width={70}
                  height={70}
                />
              </div>
              <div className="ml-6 mt-6">
                <div className="font-24 font-bold uppercase text-white">
                  antrian pasien rsu mitra paramedika
                </div>
                <div className="font-14 text-white">Senin, 13 Mei 2024</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div
              className="absolute top-0 right-0 h-28 w-full"
              style={{
                opacity: 0.2,
                backgroundImage: "url('images/rsu-mipa.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex justify-end items-center h-full pr-8">
              <div className="font-24">
                <Image
                  src="/images/logo-kars.png"
                  alt="Logo Kars"
                  width={100}
                  height={300}
                  className="z-10"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
};

export default Header;