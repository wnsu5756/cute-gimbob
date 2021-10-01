import Head from 'next/head'
import Image from 'next/image'
import router, { useRouter } from 'next/router'
import { Box } from "@chakra-ui/react"

export default function Home() {
  return (
    <Box bg="tomato" onClick= {(e) => {e.preventDefault()
      router.push("/junhyun")
    }}>Junhyun</Box>
  )
}
