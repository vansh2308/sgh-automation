

export default function NotificationTile ( {item} : {
        item: {
            headline: string,
            timestamp: string,
            by: string
        }, key: number
    }) {
    return(
        <div className="w-full text-blue-2 dark:text-blue-2-dark border-b-[1px] border-b-blue-2 dark:border-b-blue-2-dark py-4" >
            <h3 className="font-semibold text-base"> {item.headline} <span className="text-xs font-normal">by {item.by}</span> </h3>
            <p className="text-sm mt-3 ">{item.timestamp}</p>
        </div>
    )
}
