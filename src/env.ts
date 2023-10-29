/* eslint-disable @typescript-eslint/no-namespace */
import { Output, flatten, object, safeParse, string, url } from 'valibot'

const envSchema = object({
  NEXT_PUBLIC_API_BASE_URL: string([url('Invalid API base URL')]),
})

const parsedEnv = safeParse(envSchema, process.env)

if (!parsedEnv.success) {
  console.error(flatten(parsedEnv.issues).nested)

  throw new Error('Invalid environment variables')
}

type Env = Output<typeof envSchema>

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends Env {}
  }
}
