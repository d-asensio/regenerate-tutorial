export default `
# Hello, *world*!

\`\`\`javascript
function foo * () {
  const { baseApiUrl } = yield env.get()
  const posts = yield http.fetchJSON(\`\${baseApiUrl}/posts\`)
  store.set({ posts })
}
\`\`\`
`