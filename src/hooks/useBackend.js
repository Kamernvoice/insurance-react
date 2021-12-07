import {useEffect, useMemo, useState} from "react";
import axios from "axios";

const path =  'http://localhost:8082';

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts])
    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const  sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}

export const useOffers = () => {
    const [data, setData] = useState({_embedded: {offers: []}});
    useEffect( () => {
        const fetchData = async () => {
            const result = await axios.get(path + '/offers');
            setData(result.data);
        };
        fetchData();
    }, []);
    return data._embedded.offers;
}
