import { useEffect } from 'react';
import { Container } from '@/components/ui/container';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectMenus } from '@/store/manu';
import { EarringIcon } from '@/public/assets/svgs/EarringIcon';
import { MailIcon } from '@/public/assets/svgs/MailIcon';
import { GetQuoteButton } from '@/public/assets/svgs/GetQuoteButton';
import { closeQuoteFormMobile, openQuoteFormMobile, selectQuoteFormMobileStatus } from '@/store/quoteForm';
import { closeSidebar, selectSiteBarStatus } from '@/store/siteBar';
import { useRouter } from 'next/router';
import useWindowSize from '@/hooks/useWindowSize';
import Link from 'next/link';
import classes from './index.module.css';
import classNames from 'classnames';

const Nav: React.FC = () => {
    const { width } = useWindowSize();
    const { data } = useAppSelector(selectMenus);
    const { pathname } = useRouter();
    const isOpenQuoteFormMobile = useAppSelector(selectQuoteFormMobileStatus);
    const isOpenSideBar = useAppSelector(selectSiteBarStatus);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(Number(width) > 768) {
            isOpenQuoteFormMobile && dispatch(closeQuoteFormMobile());
            isOpenSideBar && dispatch(closeSidebar());
        };
    }, [width]);

    const toogleQoutForm = () => {
        dispatch(isOpenQuoteFormMobile ? closeQuoteFormMobile() : openQuoteFormMobile());
    };

    console.log('pathname --> ', pathname);
    console.log('data?.topHeaderCenterItems --> ', data?.topHeaderCenterItems);

    return (
        <nav className={classes.nav}>
            <Container>
                <div className={classes.contentDesktop}>
                    { data?.topHeaderLeftItem?.url &&
                        <Link href={`tel:${data?.topHeaderLeftItem?.url}`} className={classes.dynamicLink}>
                            { data?.topHeaderLeftItem?.title === 'phone' ? <EarringIcon /> : <MailIcon /> }
                            { data?.topHeaderLeftItem?.url }
                        </Link>
                    }
                    <ul className={classes.ul}>
                        { data?.topHeaderCenterItems.map(item => (
                            <li key={item.id} className={classNames(classes.li, {[classes.activeLi]: pathname === '/' + item.url})}>
                                <Link href={item.url || ''}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    { data?.topHeaderRightItem?.url &&
                        <Link href={`tel:${data?.topHeaderRightItem?.url}`} className={classes.dynamicLink}>
                            { data?.topHeaderLeftItem?.title === 'Mail' ?  <EarringIcon /> : <MailIcon /> }
                            { data?.topHeaderRightItem?.url }
                        </Link>
                    }
                </div>
                
                <div className={classes.contentMobile} onClick={toogleQoutForm}>
                    <GetQuoteButton rotate={isOpenQuoteFormMobile ? 180 : 0}/>
                    Get Quote Open
                </div>
            </Container>
        </nav>
    );
};

export { Nav };