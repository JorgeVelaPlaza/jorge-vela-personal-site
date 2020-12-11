import React from "react";

export default function Home() {
    return (
        <main>
            <section className="relative flex justify-center pt-24 lg:pt-64 px-8">
                <div class="space-y-4">
                    <div class="flow-root ...">
                        <div class="my-4 ...">
                            <h1 className="text-6xl text-indigo-300 font-bold cursive leading-none lg:leading-snug home-name">Jorge Vela</h1>
                        </div>
                    </div>
                    <div class="flow-root ...">
                        <div class="my-4 ...">
                            <h5 className="text-indigo-300 font-bold cursive "> 
                            Soy un desarrollador de Campo de Criptana viviendo en Madrid.
                            Conoce más de mi :)
                            </h5>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}