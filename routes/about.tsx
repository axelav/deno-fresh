import { Handlers } from '$fresh/server.ts'

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render()

    resp.headers.set('X-Custom-Header', 'Hello from the route handler fn')

    return resp
  },
}

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
      <p>
        <a href="/">Go home</a>
      </p>
    </main>
  )
}
