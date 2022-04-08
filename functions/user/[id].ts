export function onRequestGet({ env, request }: EventContext<Env, string, unknown>) {
    return env.ASSETS.fetch(
        new Request(
        new URL('/user/:id/', request.url).toString(),
        request
        )
    )
}

interface Env {
    ASSETS: Fetcher
}