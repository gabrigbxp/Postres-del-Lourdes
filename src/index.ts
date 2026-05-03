import { serve } from 'bun'
import index from './index.html'

const server = serve({
  routes: {
    // Serve static assets before the catch-all
    '/fotos/*': async (req) => {
      const url = new URL(req.url)
      const file = Bun.file(import.meta.dir + url.pathname)
      return new Response(file)
    },

    '/logo.jpg': () => new Response(Bun.file(`${import.meta.dir}/logo.jpg`)),

    // Serve index.html for all unmatched routes.
    '/*': index,
  },

  development: process.env.NODE_ENV !== 'production' && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
})

console.log(`🚀 Server running at ${server.url}`)
