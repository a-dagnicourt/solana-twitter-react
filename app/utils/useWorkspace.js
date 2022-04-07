import { PublicKey } from '@solana/web3.js'
import { Provider, Program } from '@project-serum/anchor'
import idl from '../idl/solana_twitter_react.json'

const preflightCommitment = 'processed'
const commitment = 'processed'
const programID = new PublicKey(idl.metadata.address)
let workspace = null

export const useWorkspace = () => workspace

export const initWorkspace = (wallet, connection) => {
  const provider = new Provider(connection, wallet, {
    preflightCommitment,
    commitment,
  })
  const program = new Program(idl, programID, provider)

  workspace = {
    wallet,
    connection,
    provider,
    program,
  }
}
