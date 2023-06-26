import { Container } from '@/components/ui/container';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getNews } from '@/constants/service';
import { PostCard } from '../PostCard';
import { LoadingUI } from '@/components/ui/LoadingUI';
import { ButtonUI } from '@/components/ui/ButtonUI';
import { useLocalStorageListener } from '@/hooks/useLocalStorageListener';
import { LINKS_FROM_MENU_TITLES } from '@/constants/words';
import { Redirect } from '@/components/Redirect';
import { usePagination } from '@/hooks/usepagination';
import { useAppSelector } from '@/store/hooks';
import { selectMenus } from '@/store/manu';
import classes from './index.module.css';
import Link from 'next/link';

const News = () => {
    const router = useRouter();
    const { query } = router;
    const [ news, setNews ] = useState<undefined | Record<string, any>>(undefined);
    const [ errorNews, setErrorNews ] = useState<any>(false);
    const { currentPage, goToPage, nextPage, prevPage, getVisiblePages } = usePagination(news?.data?.pageCount || 1, Number(query.page) || 1);
    const { isLoading, data, error } = useQuery(
        ['news', currentPage],
        getNews(currentPage),
        { enabled: errorNews === false }
    );
    const { data: menu } = useAppSelector(selectMenus);

    useLocalStorageListener('page', (newValue: any) => {
        const pageParam = newValue ? Number(newValue) : 1;
        goToPage(pageParam);
    });

    useEffect(() => {
        error && errorNews === false && setErrorNews(error);
    }, [error]);

    useEffect(() => {
        if(data !== undefined && isLoading === false) {
            setNews(data);
            localStorage.setItem('page', String(currentPage));
        };
    }, [data]);

    if(errorNews) return <Redirect to='404' />

    if(isLoading || !data) return <LoadingUI type='fullPage'/>

    return (
        <section className={classes.newsSection}>
            <Container>
                <h1 className={classes.title}>
                    <Link href={menu?.contactInfo?.[LINKS_FROM_MENU_TITLES.news].url || ''}>
                        {menu?.contactInfo?.[LINKS_FROM_MENU_TITLES.news].title}
                    </Link>
                </h1>
                <div className={classes.wrapperNews}>
                    { news && news.data && news.data.posts && news.data.posts.length && news.data.posts.map((_new) => (
                        <PostCard
                            category='news'
                            key={Math.floor(Math.random() * 999999999999999999)}
                            time={_new.created_at}
                            title={_new.slug}
                            description={_new.body}
                            image={_new.image}
                            slug={_new.slug}
                        />
                    ))}
                </div>
                <div className={classes.paginationBtns}>
                    <ButtonUI
                        classN='border-dashed-trans'
                        text='Previous'
                        hendlechange={prevPage}
                    />
                    { getVisiblePages().map((pageNumber) => (
                        <ButtonUI
                            key={pageNumber}
                            classN={currentPage === pageNumber ? 'border-dashed-trans-active' : 'border-dashed-trans'  }
                            text={String(pageNumber)}
                            hendlechange={() => goToPage(pageNumber)}
                        />
                    ))}
                    <ButtonUI
                        classN='border-dashed-trans'
                        text='Next'
                        hendlechange={nextPage}
                    />
                </div>
            </Container>
        </section>
    );
};

export default News;