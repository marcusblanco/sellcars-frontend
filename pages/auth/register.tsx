import type { NextPage } from 'next'
import Head from 'next/head'
import AuthForm from '../../hocs/formWithHandling';
// import styles from '../../styles/AuthPage.module.scss';

const Register: NextPage = () => {
  return (
    <div className="wrapper">
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthForm actionType='register'/>
      
    </div>
  )
}

export default Register;
