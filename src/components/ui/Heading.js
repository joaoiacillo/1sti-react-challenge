export default function Heading({ type, children }) {
    switch (type) {
        case "secondary":
            return <h2>{children}</h2>
        case "primary":
        default:
            return <h1>{children}</h1>
    }
}
