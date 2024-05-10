import Head from 'next/head';
import { MetaProps } from '@/Interfaces/SEO/MetaProps';

const Meta: React.FC<MetaProps> = ({ metaData }) => {
  return (
    <Head>
      {metaData && (
        <>
          {metaData.Title && <title>{metaData.Title}</title>}
          {metaData.Description && <meta name="description" content={metaData.Description} />}
          {metaData.Keywords && <meta name="keywords" content={metaData.Keywords} />}
          {metaData.Viewport && <meta name="viewport" content={metaData.Viewport} />}
          {metaData.CanonicalLink && <link rel="canonical" href={metaData.CanonicalLink} />}
          {metaData.Robots && <meta name="robots" content={metaData.Robots} />}

          {metaData.OpenGraph?.Images?.map((image, index) => (
            <meta key={index} property="og:image" content={image} />
          ))}
          {metaData.OpenGraph?.Title && <meta property="og:title" content={metaData.OpenGraph.Title} />}
          {metaData.OpenGraph?.Description && <meta property="og:description" content={metaData.OpenGraph.Description} />}

          {metaData.TwitterCard?.Title && <meta name="twitter:title" content={metaData.TwitterCard.Title} />}
          {metaData.TwitterCard?.Description && <meta name="twitter:description" content={metaData.TwitterCard.Description} />}
          {metaData.TwitterCard?.Image && <meta name="twitter:image" content={metaData.TwitterCard.Image} />}
        </>
      )}
    </Head>
  );
};

export default Meta;
