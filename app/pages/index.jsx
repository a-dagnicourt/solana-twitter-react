import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react'
import { initWorkspace } from '../utils/useWorkspace'
import Home from './Home'

export default function Index() {
  const wallet = useAnchorWallet()
  const { connection } = useConnection()
  initWorkspace(wallet, connection)
  return <Home />
}
