export default function Post({params}) {
    return <main>
        <h1>Blog post</h1>
        <p>Slug: {params.slug}</p>
    </main>
}