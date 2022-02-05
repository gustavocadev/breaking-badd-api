import { useEffect, useState } from "react";

const App = () => {
    const [phrase, setPhrase] = useState([]);

    const getPhrase = async () => {
        const res = await fetch("https://breakingbadapi.com/api/quotes");
        const data: any[] = await res.json();

        const phrases = data.map((el) => el.quote);
        setPhrase(phrases[Math.round(Math.random() * (data.length - 1))]);
    };

    useEffect(() => {
        getPhrase();
    }, []);
    return (
        <main className="container mx-auto px-24 mt-[120px]">
            <section className="py-8">
                <h1 className="text-2xl">Frase:</h1>
                <p className="text-5xl text-center"> {phrase}</p>
            </section>
            <section className="flex justify-center">
                <button
                    className="py-4 px-8 text-white rounded bg-green-800 font-semibold text-xl border border-black text-center hover:bg-green-900 transition"
                    onClick={getPhrase}
                >
                    Obtener Frase
                </button>
            </section>
        </main>
    );
};

export default App;
