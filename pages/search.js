import Head from 'next/head';
import Header from '../components/Header';
import { API_KEY,CONTEXT_KEY } from '../keys';
import Response from '../Response';
function search({ results }) {
    console.log(results);
    return (
        <div>
            <Head>
                <title>Search Results</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <Header />
            {/* Search Results*/}
        </div>
    )
}

export default search;

export async function getServerSideProps(context) {
    const useDummyData = true;

    const data = useDummyData ? Response: await fetch(
        
                            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
                            ).then(response => response.json())   
                            
            // after the SERVER had rendered the page, we need to return the data to the client

            return {
                props: {
                    results: data,
                }
            }
}