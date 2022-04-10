import { Breadcrumb, Layout, Menu, Pagination } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import FilterForm from '../../components/Filter/Filter';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';

import { getAdvertsByQuery } from '../../api_controllers/Adverts';
import { setFilter } from '../../state/actions/filter';


const Adverts: NextPage = () => {
  const router = useRouter();
  const [pagination, updatePagination] = useState({ current: 1 });
  const { adverts } = useSelector((state) => state.advertReducer);
  const filter = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvertsByQuery(filter));
  }, [filter]);
  useEffect(() => {
    dispatch(setFilter({ skip: filter.limit * (pagination.current - 1) }));
  }, [pagination.current]);
  const onChange = (page) => {
    updatePagination((state) => ({
      ...state,
      current: page,
    }));
  };
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
        style={{ padding: '0 50px', marginTop: '100px' }}
      >
        <FilterForm />
        <h1 className='page-title'>Все объявления</h1>
        <p>Найдено: {adverts.count}</p>
        <AdvertsList />
        {adverts.count > 0 && (
          <Pagination
            current={pagination.current}
            defaultPageSize={filter.limit}
            onChange={onChange}
            total={adverts.count}
            style={{ margin: '30px auto', width: 'fit-content' }}
          />
        )}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        My social: <a href='https://github.com/marcusblanco'>GitHub</a>
      </Footer>
    </Layout>
  );
};

export default Adverts;
