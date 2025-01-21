const Message = ({text,isImportant}) => {
    return (
        <div>
            {isImportant ? "Imporant Message" : "Reguler message"}
            {text}            

        </div>
    )
}

export default Message