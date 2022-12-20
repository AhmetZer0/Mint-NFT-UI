import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import React from "react"
import styles from "../styles/Home.module.css"
import NavBar from "../components/NavBar"
import Disconnected from '../components/Disconnected'
import { useWallet } from "@solana/wallet-adapter-react"
import Connected from "../components/Connected"

const Home: NextPage = () => {
  const { connected } = useWallet()

  return (
    <div className={styles.container}>
       <Head>
        <title>Zer0</title>
        <meta name="The NFT Collection for Zer0" />
        <link rel="icon" href="/zero.png" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          <NavBar />

          <Spacer />
          <Center>{connected ? <Connected /> : <Disconnected />}</Center>
          <Spacer />

        </Stack>
      </Box>
    </div>
  )
}

export default Home