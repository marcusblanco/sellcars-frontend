import { Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import Header from '../../../components/Header/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import DetailAdvert from '../../../components/DetailAdvert/DetailAdvert';
import { useEffect, useState } from 'react';
import { getAdvertById } from '../../../api_controllers/Adverts';

export default function AdvertPage() {
  const router = useRouter();
  const { id } = router.query;
  const [advert, setAdvert] = useState(null);
  useEffect(() => {
    if (id) {
      getAdvert(id);
    }
  }, [id]);
  async function getAdvert(id:string) {
    const advert = await getAdvertById(id);
    setAdvert((state)=>(advert.ad));
  }
  return (
    <Layout style={{ background: '#ffffff' }}>
      <Head>
        <title>Adverts</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header activeTab={router.pathname} />
      <Content
        className='site-layout'
        style={{ padding: '0 50px', marginTop: '50px' }}
      >
        <DetailAdvert advert={advert}/>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        My social: <a href='https://github.com/marcusblanco'>GitHub</a>
      </Footer>
    </Layout>
  );
}