import { Connection, PublicKey } from '@solana/web3.js'
import { Provider, Program } from '@project-serum/anchor'
import idl from '../../target/idl/solana_twitter_react.json'
import { useAnchorWallet } from '@solana/wallet-adapter-react'

const programID = new PublicKey(idl.metadata.address)
let workspace = null

export const useWorkspace = () => workspace

export const initWorkspace = () => {
  const wallet = useAnchorWallet()
  const connection = new Connection('http://127.0.0.1:8899')
  const provider = new Provider(connection, wallet)
  const program = new Program(idl, programID, provider)

  workspace = {
    wallet,
    connection,
    provider,
    program,
  }
}
