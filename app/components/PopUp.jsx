export const PopUp = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-purple-200 rounded-lg p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="mb-8 font-bold">Thanks for leaving a recommendation!</p>
                <button className="border-2 border-purple-400 text-purple-400 font-bold bg-white rounded px-14 py-1" onClick={onClose}>Ok</button>
            </div>
        </div>
    )
}