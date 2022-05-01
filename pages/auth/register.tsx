import type { NextPage } from 'next'
import Head from 'next/head'
import AuthForm from '../../hocs/AuthForm';
// import styles from '../../styles/AuthPage.module.scss';

const Register: NextPage = () => {
  return (
    <div className="wrapper">
      <Head>
        <title>Регистрация</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthForm serviceName='register'/>
      
    </div>
  )
}

export default Register;
