const FormatDate = ({date}) => {
    console.log(date)
    return (
        <div>
            {date.toLocaleString()}
        </div>
    )
}

export default FormatDate