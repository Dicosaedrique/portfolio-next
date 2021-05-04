export const GTM_ID = 'GTM-MMDFB38';

export interface PageEventProps {
    event: string;
    page: string;
}

export const GTMPageView = (url: string): PageEventProps => {
    const pageEvent: PageEventProps = {
        event: 'pageview',
        page: url
    };

    // @ts-ignore
    window && window.dataLayer && window.dataLayer.push(pageEvent);

    return pageEvent;
};
