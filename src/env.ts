import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

// NEXT_PUBLIC_API_BASE_URL: string([url('Invalid API base URL')]),
// VERCEL_URL: string([url('Invalid Vercel URL')]),
export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    VERCEL_URL: z.string().url(),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    VERCEL_URL: process.env.VERCEL_URL,
  },
})
