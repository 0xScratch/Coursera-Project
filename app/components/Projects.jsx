export const Projects = () => {
    return (
        <div className="w-[85%] mx-auto -mt-5">
            <h1 className="text-purple-600 text-4xl font-bold mb-4">Projects</h1>
            <div className="w-[95%] mx-auto">
                <ul className="list-disc">
                    <h2 className="font-bold mb-2 text-xl">Chatbot</h2>
                    <li className="w-[95%] mx-auto">Developed a secure website integrated with chatbot for an automobile client using HTML, CSS, JavaScript and IBM Watson Assistant.</li>
                </ul>
                <hr className="list-section-break"/>
                <ul className="list-disc">
                    <h2 className="font-bold mb-2 text-xl">Sentiment Analyzer</h2>
                    <li className="w-[95%] mx-auto">Developed and deployed a sentiment analyzer for the box reviews section of an eCommerce platform using IBM NLU</li>
                </ul> 
                <hr className="list-section-break"/>
                <ul className="list-disc">
                    <h2 className="font-bold mb-2 text-xl">Fashion Website</h2>
                    <li className="w-[95%] mx-auto">Created a styled multi-page website for a new player in the fashion industry and integrated it with a shopping card, using stripe for payment gateway</li>
                </ul>
            </div>
        </div>
    )
}