import {Header} from "./Header";
import {Footer} from "./Footer";
import Script from 'next/script'

export default function PreviewLink() {
    return (
        <>
            <Script src="https://static.cdn.prismic.io/prismic.js?new=true&repo=lcplayers"/>
        </>
    )
}

export function Layout({
                           navigation,
                           settings,
                           withHeaderDivider,
                           withProfile,
                           withSignUpForm,
                           children,
                       }) {
    return (
        <div className="text-slate-700">
            <Header
                withProfile={withProfile}
                withDivider={withHeaderDivider}
                navigation={navigation}
                settings={settings}
            />
            <main>{children}</main>
            <Footer withSignUpForm={withSignUpForm} settings={settings}/>
        </div>
    );
}
