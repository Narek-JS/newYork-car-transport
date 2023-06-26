import { Container } from '@/components/ui/container';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PostCard } from '../PostCard';
import { useQuery } from 'react-query'
import { ButtonUI } from '@/components/ui/ButtonUI';
import { getBlogs } from '@/constants/service';
import { LoadingUI } from '@/components/ui/LoadingUI';
import { useLocalStorageListener } from '@/hooks/useLocalStorageListener';
import { Redirect } from '@/components/Redirect';
import { LINKS_FROM_MENU_TITLES } from '@/constants/words';
import { usePagination } from '@/hooks/usepagination';
import { useAppSelector } from '@/store/hooks';
import { selectMenus } from '@/store/manu';
import Link from 'next/link';
import classes from './index.module.css';

const Blogs = () => {
    const router = useRouter();
    const { query } = router;
    const [ blogs, setBlogs ] = useState<undefined | Record<string, any>>();
    const [ errorBlogs, setErrorBlogs ] = useState<any>(false);
    const { currentPage, goToPage, nextPage, prevPage, getVisiblePages } = usePagination(blogs?.data?.pageCount || 1, Number(query.page) || 1);
    const { isLoading, data, error } = useQuery(
        ['blogs', currentPage],
        getBlogs(currentPage),
        { enabled: errorBlogs === false }
    );

    const { data: menu } = useAppSelector(selectMenus);
    
    useLocalStorageListener('page', (newValue: any) => {
        const pageParam = newValue ? Number(newValue) : 1;
        goToPage(pageParam);
    });

    useEffect(() => {
        error && errorBlogs === false && setErrorBlogs(error);
    }, [error]);

    useEffect(() => {
        if(data !== undefined && isLoading === false) {
            setBlogs(data);
            localStorage.setItem('page', String(currentPage));
        };
    }, [data]);

    if(errorBlogs) return <Redirect to='404' />

    if(isLoading || menu === null) return <LoadingUI type='fullPage'/>;

    return (
        <section className={classes.blogsSection}>
            <Container>
                <h1 className={classes.title}>
                    <Link href={menu?.contactInfo?.[LINKS_FROM_MENU_TITLES.blogs].url || ''}>
                        {menu?.contactInfo?.[LINKS_FROM_MENU_TITLES.blogs].title}
                    </Link>
                </h1>
                <div className={classes.wrapperBlogs}>
                    { blogs && blogs.data && blogs.data.posts && blogs.data.posts.length && blogs.data.posts.map((blog, index) => (
                        <PostCard
                            key={index}
                            category='blogs'
                            time={blog.created_at}
                            title={blog.slug}
                            description={blog.body}
                            image={blog.image}
                            slug={blog.slug}
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

export default Blogs;