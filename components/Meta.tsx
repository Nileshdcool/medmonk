import { MetaProps } from '@/Models/MetaProps';
import Head from 'next/head';

const Meta: React.FC<MetaProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};

export default Meta;

