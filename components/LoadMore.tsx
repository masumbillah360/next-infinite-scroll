'use client';
import { fetchAnime } from '@/actions/anime.action';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
let page = 100000;
let isPageEnd = false;
export type AnimeCard = JSX.Element;
function LoadMore() {
    const { ref, inView } = useInView();
    const [data, setData] = useState<AnimeCard[]>([]);
    useEffect(() => {
        if (isPageEnd) {
            return;
        } else if (inView) {
            isPageEnd = false;
            fetchAnime(page).then((res) => {
                if (res.length > 0) {
                    setData([...data, ...res]);
                    page++;
                } else {
                    isPageEnd = true;
                    console.log('Page khatam!');
                }
            });
        }
        console.log(data.length);
    }, [inView, data, isPageEnd]);
    return (
        <>
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {data}
            </section>
            {isPageEnd ? (
                <h1 className="text-3xl p-4 font-bold">Page Ended</h1>
            ) : (
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
            )}
        </>
    );
}

export default LoadMore;
