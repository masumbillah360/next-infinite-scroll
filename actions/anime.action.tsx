'use server';
import AnimeCard, { AnimeProp } from '@/components/AnimeCard';

export const fetchAnime = async (page: number) => {
    const response = await fetch(
        `https://shikimori.one/api/animes?page=${page}&limit=8`
    );
    const data = await response.json();
    if (data.length == 1) {
        return ['YOU HAVE SEEN ALL THE ANIME'];
    } else {
        return data.map((item: AnimeProp, index: number) => (
            <AnimeCard
                key={item.id + item.name + index}
                anime={item}
                index={index}
            />
        ));
    }
};
