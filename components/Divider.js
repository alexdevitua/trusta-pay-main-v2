export default function Divider() {
    return (
        <div className="mx-auto py-6 md:py-0">
            <div className="flex flex-row w-full">
                {/* <img src="/images/arrow.svg" className="h-auto w-full object-fill "/> */}
                <div className="w-1/2">
                    <hr className="border border-gray-300 md:border-gray-500 w-full transform skew-y-12 md:skew-y-0" />
                </div>
                <div className="w-1/2">
                    <hr className="border border-gray-300 md:border-gray-500 w-full transform -skew-y-12 md:skew-y-0" />
                </div>
            </div>
        </div>

    )
}