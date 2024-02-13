import Image from "next/image"
export const Form = () => {
    return (
        <div>
            <div className="w-[65%] m-auto">
                <h1 className="font-bold text-3xl mb-9">Leave a Recommendation</h1>
                <form action="" className="ml-2">
                    <input type="text" placeholder="Name (Optional)" className="border-2 px-2 py-1 rounded w-full mb-6" />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" className="border-2 px-2 py-1 rounded w-full mb-12"></textarea>
                    <div className="flex justify-center">
                        <button type="submit" className="border-2 border-purple-400 rounded-md px-11 py-1 text-purple-700 font-bold hover:text-white hover:bg-purple-600">Submit</button>
                    </div>
                </form>
            </div>
            <div className="flex justify-end mr-5 -mb-7">
                <Image
                    src="/arrow.png"
                    alt="arrow"
                    width={40}
                    height={40}
                    className=""
                />
            </div>
        </div>
    )
}