import { PublicKey } from '@solana/web3.js'
import { Provider, Program } from '@project-serum/anchor'
import idl from '../../target/idl/solana_twitter_react.json'

const programID = new PublicKey(idl.metadata.address)
let workspace = null

export const useWorkspace = () => workspace

export const initWorkspace = (wallet, connection) => {
  const provider = new Provider(connection, wallet)
  const program = new Program(idl, programID, provider)

  workspace = {
    wallet,
    connection,
    provider,
    program,
  }
}
