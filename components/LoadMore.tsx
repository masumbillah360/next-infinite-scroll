'use client';
import { fetchAnime } from '@/actions/anime.action';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
let page = 2;

export type AnimeCard = JSX.Element;
function LoadMore() {
    const { ref, inView } = useInView();
    const [data, setData] = useState<AnimeCard[]>([]);
    const [endData, setEndData] = useState([]);
    useEffect(() => {
        if (inView) {
            fetchAnime(page).then((res) => {
                if (res.length !== 1) {
                    setData([...data, ...res]);
                    page++;
                } else {
                    setEndData(res);
                }
            });
        }
    }, [inView, data]);
    return (
        <>
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {data}
            </section>

            {endData.length !== 1 ? (
                <section className="flex justify-center items-center w-full">
                    <div ref={ref}>
                        <Image
                            src="./spinner.svg"
                            alt="spinner"
                            width={56}
                            height={56}
                            className="object-contain"
                        />
                    </div>
                </section>
            ) : (
                <h1 className="font-bold text-center text-3xl text-green-800 border border-green-300 rounded-md py-3">
                    {endData[0]}
                </h1>
            )}
        </>
    );
}

export default LoadMore;
