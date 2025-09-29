export default function ArrowRight( props: { arrowColor?: string, bgColor?: string } ) {
    return (
        <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="36.4694" height="30.7049" rx="15.3524" fill={props.bgColor} stroke={props.bgColor}/>
            <path d="M25.2064 16.5595C25.5969 16.169 25.5969 15.5358 25.2064 15.1453L18.8424 8.78135C18.4519 8.39082 17.8187 8.39082 17.4282 8.78135C17.0377 9.17187 17.0377 9.80504 17.4282 10.1956L23.085 15.8524L17.4282 21.5093C17.0377 21.8998 17.0377 22.533 17.4282 22.9235C17.8187 23.314 18.4519 23.314 18.8424 22.9235L25.2064 16.5595ZM10.088 15.8524V16.8524H24.4993V15.8524V14.8524H10.088V15.8524Z" fill={props.arrowColor}/>
        </svg>
    )
}