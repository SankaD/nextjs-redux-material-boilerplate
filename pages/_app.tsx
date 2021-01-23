import React, {useEffect} from 'react';
import '../styles/globals.css'
import Head from "next/head";
import theme from "../theme";
import {ThemeProvider} from "@material-ui/styles";
import {CssBaseline} from "@material-ui/core";
import {useStore} from "../store";
import {Provider} from "react-redux";

function MyApp({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState)
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (
        <React.Fragment>
            <Head>
                <title>My Website</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </React.Fragment>
    )
}


export default MyApp
