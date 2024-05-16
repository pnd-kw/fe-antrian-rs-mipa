import Image from "next/image";
import { Grid } from "@mui/material";
import PusherConnection from "@/components/PusherConnection";

export default function Home() {
  return (
    <div className="relative h-screen">
      <PusherConnection />
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
      <div className="w-full">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className="relative">
            <div className="absolute w-2/5 h-56 right-4 top-4 mt-2 bg-white p-2 border-2 rounded-xl border-green-400">
              <div className="flex justify-center">
                <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-green-700">
                  no. antrian
                </div>
              </div>
              {/* <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <div className="flex justify-center">
                    <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-orange-400">
                      ulang
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="flex justify-center">
                    <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-green-700">
                      terakhir
                    </div>
                  </div>
                </Grid>
              </Grid> */}
              <div className="h-44 flex justify-center items-center">
                <div className="font-bold text-4xl md:text-6xl lg:text-8xl text-green-600">
                  4
                </div>
              </div>
              {/* <div className="h-44 flex items-center">
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
                    <div className="flex justify-center">
                      <div className="font-bold text-xl md:text-3xl lg:text-6xl text-green-600"></div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className="flex justify-center">
                      <div className="font-bold text-xl md:text-3xl lg:text-6xl text-green-600">
                        4
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div> */}
            </div>
            <div className="mx-4 my-4 h-52 flex items-center border-2 rounded-xl border-green-400">
              <Grid container spacing={1}>
                <Grid item xs={12} md={2.5}>
                  <Image
                    src="/images/dr_layung.jpg"
                    alt="drg Layung sekar prabarayi"
                    width={200}
                    height={500}
                  />
                </Grid>
                <Grid item xs={12} md={4.5}>
                  <div className="flex justify-center mb-12">
                    <div className="font-bold text-lg md:text-xl lg:text-2xl uppercase">
                      POLI GIGI
                    </div>
                  </div>
                  <div className="flex justify-center mb-2">
                    <div className="font-semibold text-xs md:text-xs lg:text-sm">
                      drg. Layung Sekar Prabarayi
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
              {/* <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <div className="flex justify-center">
                    <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-orange-400">
                      ulang
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="flex justify-center">
                    <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-green-700">
                      terakhir
                    </div>
                  </div>
                </Grid>
              </Grid> */}
              <div className="h-44 flex justify-center items-center">
                <div className="font-bold text-4xl md:text-6xl lg:text-8xl text-green-600">
                  1325
                </div>
              </div>
              {/* <div className="h-44 flex items-center">
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
                    <div className="flex justify-center">
                      <div className="font-bold text-xl md:text-3xl lg:text-6xl text-green-600"></div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className="flex justify-center">
                      <div className="font-bold text-xl md:text-3xl lg:text-6xl text-green-600">
                        132
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div> */}
            </div>
            <div className="mx-4 my-4 h-52 flex items-center border-2 rounded-xl border-green-400">
              <Grid container spacing={1}>
                <Grid item xs={12} md={2.5}>
                  <Image
                    src="/images/dr_febriza.png"
                    alt="drg Layung sekar prabarayi"
                    width={200}
                    height={500}
                    objectFit="cover"
                  />
                </Grid>
                <Grid item xs={12} md={4.5}>
                  <div className="flex justify-center mb-12">
                    <div className="font-bold text-lg md:text-xl lg:text-2xl uppercase">
                      POLI GIGI
                    </div>
                  </div>
                  <div className="flex justify-center mb-2">
                    <div className="font-semibold text-xs md:text-xs lg:text-sm">
                      drg. Febriza
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className="relative">
            <div className="absolute w-2/5 h-56 right-4 top-4 mt-8 bg-white p-2 border-2 rounded-xl border-green-400">
              <div className="flex justify-center">
                <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-green-700">
                  no. antrian
                </div>
              </div>
              {/* <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <div className="flex justify-center">
                    <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-orange-400">
                      ulang
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="flex justify-center">
                    <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-green-700">
                      terakhir
                    </div>
                  </div>
                </Grid>
              </Grid> */}
              <div className="h-44 flex justify-center items-center">
                <div className="font-bold text-4xl md:text-6xl lg:text-8xl text-green-600">
                  4
                </div>
              </div>
              {/* <div className="h-44 flex items-center">
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
                    <div className="flex justify-center">
                      <div className="font-bold text-xl md:text-3xl lg:text-6xl text-green-600"></div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className="flex justify-center">
                      <div className="font-bold text-xl md:text-3xl lg:text-6xl text-green-600">
                        4
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div> */}
            </div>
            <div className="mx-4 mt-10 h-52 flex items-center border-2 rounded-xl border-green-400">
              <Grid container spacing={1}>
                <Grid item xs={12} md={2.5}>
                  <Image
                    src="/images/dr_fajar.png"
                    alt="dr Fajar"
                    width={90}
                    height={200}
                  />
                </Grid>
                <Grid item xs={12} md={4.5}>
                  <div className="flex justify-center mb-12">
                    <div className="font-bold text-lg md:text-xl lg:text-2xl uppercase">
                      POLI
                    </div>
                  </div>
                  <div className="flex justify-center mb-2">
                    <div className="font-semibold text-xs md:text-xs lg:text-sm">
                      dr. Fajar
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="relative">
            <div className="absolute w-2/5 h-56 right-4 top-4 mt-8 bg-white p-2 border-2 rounded-xl border-green-400">
              <div className="flex justify-center">
                <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-green-700">
                  no. antrian
                </div>
              </div>
              {/* <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <div className="flex justify-center">
                    <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-orange-400">
                      ulang
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="flex justify-center">
                    <div className="text-sm md:text-base lg:text-lg font-bold uppercase text-green-700">
                      terakhir
                    </div>
                  </div>
                </Grid>
              </Grid> */}
              <div className="h-44 flex justify-center items-center">
                <div className="font-bold text-4xl md:text-6xl lg:text-8xl text-green-600">
                  1325
                </div>
              </div>
              {/* <div className="h-44 flex items-center">
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
                    <div className="flex justify-center">
                      <div className="font-bold text-xl md:text-3xl lg:text-6xl text-green-600"></div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className="flex justify-center">
                      <div className="font-bold text-xl md:text-3xl lg:text-6xl text-green-600">
                        132
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div> */}
            </div>
            <div className="mx-4 mt-10 h-52 flex items-center border-2 rounded-xl border-green-400">
            <Grid container spacing={1}>
                <Grid item xs={12} md={2.5}>
                  <Image
                    src="/images/dr_taufik.jpg"
                    alt="dr Taufik R Alkaff SpOg"
                    width={200}
                    height={500}
                  />
                </Grid>
                <Grid item xs={12} md={4.5}>
                  <div className="flex justify-center mb-12">
                    <div className="font-bold text-lg md:text-xl lg:text-2xl uppercase">
                      POLI OBSGYN
                    </div>
                  </div>
                  <div className="flex justify-center mb-2">
                    <div className="font-semibold text-xs md:text-xs lg:text-sm">
                      dr. Taufik R Alkaff SpOG
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Learn{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Templates{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Deploy{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
