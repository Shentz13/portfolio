function Text(props) {
    if (props.type === "p") {
        return (
            <p>{props.text}</p>
        )
    }
}

export default Text;