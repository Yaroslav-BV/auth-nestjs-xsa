import * as xsenv from '@sap/xsenv'
xsenv.loadEnv()

const { uaa } = xsenv.getServices({ uaa: { tag: 'xsuaa' } })

// Transform the verification key to RSA format
const getUAAConfig = uaa => {
  let { verificationkey } = uaa

  if (!verificationkey) return null

  const BEGIN_STRING = '-----BEGIN PUBLIC KEY-----'
  const END_STRING = '-----END PUBLIC KEY-----'

  if (!verificationkey.includes(`${BEGIN_STRING}\n`))
    verificationkey = verificationkey.replace(BEGIN_STRING, `${BEGIN_STRING}\n`)

  if (!verificationkey.includes(`\n${END_STRING}`))
    verificationkey = verificationkey.replace(END_STRING, `\n${END_STRING}`)

  return { ...uaa, verificationkey }
}

export default () => ({
  uaa: getUAAConfig(uaa),
})
